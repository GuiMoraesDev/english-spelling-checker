import React, { AudioHTMLAttributes } from "react";

import { Play, Stop } from "phosphor-react";

import * as Styles from "./styles.module";

const AudioPlayer = (
  props: AudioHTMLAttributes<HTMLAudioElement>
): JSX.Element => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.createRef<HTMLAudioElement>();

  const onPlay = React.useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = React.useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handlePlayerClick = React.useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }, [audioRef, isPlaying]);

  const TRIGGER_KEY = React.useMemo(() => ["Space", "Enter"], []);

  const handlePressKey = React.useCallback(
    (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (TRIGGER_KEY.includes(event.code)) {
        handlePlayerClick();
      }
    },
    [TRIGGER_KEY, handlePlayerClick]
  );

  return (
    <Styles.AudioContainer>
      <Styles.AudioPlayerWrapper
        tabIndex={1}
        onKeyDown={handlePressKey}
        onClick={handlePlayerClick}
        isPlaying={isPlaying}
      >
        {isPlaying ? (
          <Stop className="icon stop" />
        ) : (
          <Play className="icon play" />
        )}
        <audio
          {...props}
          className="audio-tag"
          onPlay={onPlay}
          onPause={onPause}
          controls
          ref={audioRef}
        />
      </Styles.AudioPlayerWrapper>
    </Styles.AudioContainer>
  );
};

export default AudioPlayer;
