import React from "react";

import * as Styles from "./styles";

interface KeyboardProps {
  keyboardKeys: string[];
}

const Keyboard = ({ keyboardKeys }: KeyboardProps) => {
  return (
    <Styles.Container>
      {keyboardKeys.map((keyboardKey) => (
        <button key={keyboardKey} type="button">
          {keyboardKey}
        </button>
      ))}
    </Styles.Container>
  );
};

export default Keyboard;
