import React from "react";

import { formatLetterCode } from "helpers";

import * as Styles from "./styles.module";

interface KeyboardProps {
  keyboardKeys?: string[];
  clickedLetters: string[];
  onClickedLetter(letter: string, index: number): void;
}

const Keyboard = ({
  keyboardKeys = [],
  clickedLetters,
  onClickedLetter,
}: KeyboardProps) => {
  return (
    <Styles.Container>
      {keyboardKeys.map((keyboardKey, keyboardKeyIndex) => {
        const keyId = formatLetterCode({
          letter: keyboardKey,
          index: keyboardKeyIndex,
        });

        return (
          <Styles.KeyboardKey
            onClick={() => onClickedLetter(keyboardKey, keyboardKeyIndex)}
            disabled={!!clickedLetters.includes(keyId)}
            key={keyId}
            type="button"
          >
            {keyboardKey}
          </Styles.KeyboardKey>
        );
      })}
    </Styles.Container>
  );
};

export default Keyboard;
