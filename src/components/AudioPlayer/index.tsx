import React, { AudioHTMLAttributes } from "react";
// import { Container } from './styles';

const AudioPlayer = (props: AudioHTMLAttributes<HTMLAudioElement>): JSX.Element => {
  return <audio {...props} controls />;
};

export default AudioPlayer;
