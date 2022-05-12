import type { NextPage } from "next";

import React from "react";

import axios from "axios";
import { formatLetterCode } from "helpers";

import AudioPlayer from "components/AudioPlayer";
import Button from "components/Button";
import Input from "components/Input";
import Keyboard from "components/Keyboard";

import useLoading from "hooks/useLoading";

import {
  getSpelling,
  GetSpellingResponse,
  postSpelling,
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

  const loadExercise = React.useCallback(async () => {
    loadingData.set.loading();

    try {
      const getSpellingCancelToken = axios.CancelToken.source();

      const response = await getSpelling(getSpellingCancelToken.token);

      setSpellingData(response.data);
      setRemainingLetters(response.data["letter-pool"]);
      setClickedLetters([]);

      loadingData.set.init();
    } catch {
      loadingData.set.error();
    }
  }, [loadingData.set]);

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

  React.useEffect(() => {
    loadExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckAnswer = React.useCallback(async () => {
    if (isButtonDisabled || !spellingData?.id) {
      return;
    }

    loadingSubmit.set.loading();

    try {
      const postSpellingCancelToken = axios.CancelToken.source();

      await postSpelling(
        {
          id: spellingData?.id,
          answer: clickedLetters.map((letter) => letter.letter).join(""),
        },
        postSpellingCancelToken.token
      );

      loadingSubmit.set.init();

      loadExercise();
    } catch {
      loadingSubmit.set.error();
    }
  }, [
    clickedLetters,
    isButtonDisabled,
    loadExercise,
    loadingSubmit.set,
    spellingData?.id,
  ]);

  return (
    <Styles.Container>
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
          className="text-input-component"
          value={clickedLetters.map((letter) => letter.letter).join("")}
          onKeyDown={handleOnKeyDown}
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
        label="Check"
      />
    </Styles.Container>
  );
};

export default Home;
