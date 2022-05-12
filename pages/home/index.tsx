import type { NextPage } from "next";

import React from "react";

import axios from "axios";

import { TOTAL_STEPS } from "consts";

import { formatLetterCode } from "helpers";

import AudioPlayer from "components/AudioPlayer";
import Button from "components/Button";
import Input, { AlertProps } from "components/Input";
import Keyboard from "components/Keyboard";

import useLoading from "hooks/useLoading";

import {
  getSpelling,
  GetSpellingResponse,
  postSpelling,
  PostSpellingResponse,
} from "services/api.spelling";

import * as Styles from "./styles";

interface ClickedLettersProps {
  letter: string;
  code: string;
}

const Home: NextPage = () => {
  const loadingData = useLoading();
  const loadingSubmit = useLoading();

  const [spellingData, setSpellingData] =
    React.useState<GetSpellingResponse | null>(null);
  const [clickedLetters, setClickedLetters] = React.useState<
    ClickedLettersProps[]
  >([]);
  const [remainingLetters, setRemainingLetters] = React.useState<string[]>([]);
  const [answerValidation, setAnswerValidation] =
    React.useState<PostSpellingResponse | null>(null);
  const [currentStep, setCurrentStep] = React.useState(1);

  const loadExercise = React.useCallback(async () => {
    loadingData.set.loading();

    try {
      const getSpellingCancelToken = axios.CancelToken.source();

      const response = await getSpelling(getSpellingCancelToken.token);

      setSpellingData(response.data);
      setRemainingLetters(response.data["letter-pool"]);
      setClickedLetters([]);
      setAnswerValidation(null);

      loadingData.set.init();
    } catch {
      loadingData.set.error();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    loadExercise();
  }, [loadExercise]);

  const handleClickedLetter = React.useCallback(
    (letter: string, index: number) => {
      setClickedLetters((state) => [
        ...state,
        {
          letter,
          code: formatLetterCode({ letter, index }),
        },
      ]);

      setRemainingLetters((state) => {
        const newArray = [...state];

        newArray.splice(index, 1, "   ");

        return newArray;
      });
    },
    []
  );

  const handleOnKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        return setClickedLetters((state) => {
          const newState = [...state];
          newState.pop();

          return newState;
        });
      }

      const letterIndex = remainingLetters.findIndex(
        (letter) => event.key === letter
      ) as number;

      if (letterIndex >= 0) {
        const letter = remainingLetters[letterIndex] as string;

        handleClickedLetter(letter, letterIndex);
      }
    },
    [handleClickedLetter, remainingLetters]
  );

  const isButtonDisabled: boolean = React.useMemo(() => {
    return (
      loadingData.status !== "initial" ||
      loadingSubmit.status !== "initial" ||
      clickedLetters.length !== spellingData?.["letter-pool"].length
    );
  }, [
    clickedLetters.length,
    loadingData.status,
    loadingSubmit.status,
    spellingData,
  ]);

  const handleCheckAnswer = React.useCallback(async () => {
    if (isButtonDisabled || !spellingData?.id) {
      return;
    }

    loadingSubmit.set.loading();

    try {
      const postSpellingCancelToken = axios.CancelToken.source();

      const response = await postSpelling(
        {
          id: spellingData?.id,
          answer: clickedLetters.map((letter) => letter.letter).join(""),
        },
        postSpellingCancelToken.token
      );

      setAnswerValidation(response.data);

      setTimeout(() => {
        loadingSubmit.set.init();

        if (currentStep + 1 <= TOTAL_STEPS) {
          setCurrentStep((state) => {
            if (state + 1 <= TOTAL_STEPS) {
              return state + 1;
            }

            return state;
          });

          loadExercise();
        }
      }, 1000);
    } catch {
      loadingSubmit.set.error();
    }
  }, [
    clickedLetters,
    currentStep,
    isButtonDisabled,
    loadExercise,
    loadingSubmit.set,
    spellingData?.id,
  ]);

  const inputAlert: AlertProps | undefined = React.useMemo(
    () =>
      answerValidation
        ? {
            text: answerValidation?.["correct-answer"],
            type: answerValidation?.correct ? "success" : "error",
          }
        : undefined,
    [answerValidation]
  );

  return (
    <Styles.Container>
      <Styles.Steps>
        {currentStep}/{TOTAL_STEPS}
      </Styles.Steps>

      <Styles.Header>
        <h1>Find the correct word</h1>
        <p>Listen the audio bellow and type the matching term</p>
      </Styles.Header>

      <AudioPlayer src={spellingData?.["audio-url"]} />

      <Styles.InputsWrapper>
        <Input
          id="text-input"
          type="text"
          dimension="sm"
          isCorrect={answerValidation?.correct}
          className="text-input-component"
          value={clickedLetters.map((letter) => letter.letter).join("")}
          onKeyDown={handleOnKeyDown}
          alert={inputAlert}
          readOnly
        />

        <Keyboard
          keyboardKeys={spellingData?.["letter-pool"]}
          clickedLetters={clickedLetters.map((letter) => letter.code)}
          onClickedLetter={handleClickedLetter}
        />
      </Styles.InputsWrapper>

      <Button
        className="button-component"
        disabled={isButtonDisabled}
        onClick={handleCheckAnswer}
        label={answerValidation !== null ? "Next" : "Check"}
        isBold
      />
    </Styles.Container>
  );
};

export default Home;
