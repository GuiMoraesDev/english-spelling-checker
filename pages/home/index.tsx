import axios from "axios";
import AudioPlayer from "components/AudioPlayer";
import Button from "components/Button";
import Input from "components/Input";
import Keyboard from "components/Keyboard";
import useLoading from "hooks/useLoading";
import type { NextPage } from "next";
import React from "react";
import { getSpelling, GetSpellingResponse } from "services/api.spelling";

import * as Styles from "./styles";

const Home: NextPage = () => {
  const loadingData = useLoading();

  const [spellingData, setSpellingData] =
    React.useState<GetSpellingResponse | null>(null);

  const loadExercise = React.useCallback(async () => {
    loadingData.set.loading();

    try {
      const getSpellingCancelToken = axios.CancelToken.source();

      const response = await getSpelling(getSpellingCancelToken.token);

      setSpellingData(response.data);

      loadingData.set.init();
    } catch {
      loadingData.set.error();
    }
  }, [loadingData.set]);

  React.useEffect(() => {
    loadExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.Container>
      <Styles.Header>
        <h1>Find the correct word</h1>
        <p>Listen the audio bellow and type the matching term</p>
      </Styles.Header>

      <Styles.InputsWrapper>
        <AudioPlayer src={spellingData?.audioUrl} />

        <Input id="text-input" type="text" className="text-input-component" />

        <Keyboard keyboardKeys={spellingData?.letterPool || []} />
      </Styles.InputsWrapper>

      <Button
        className="button-component"
        disabled={loadingData.status !== "initial"}
        label="Next"
      />
    </Styles.Container>
  );
};

export default Home;
