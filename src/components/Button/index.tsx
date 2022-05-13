import React, { ButtonHTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

import * as Styles from "./styles.module";

export interface ButtonDefaultPropsThatMakeStyles {
  dimension?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled: boolean;
  isBold?: boolean;
}

interface ButtonDefaultProps
  extends Omit<ButtonDefaultPropsThatMakeStyles, "isDisabled"> {
  label?: string;
  disabled?: boolean;
  onClick?(): void;
}

type ButtonProps = ButtonDefaultProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  label,
  dimension = "md",
  rounded = "sm",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <Styles.Button
      dimension={dimension}
      rounded={rounded}
      onClick={props.onClick}
      isDisabled={Boolean(props.disabled)}
      {...props}
    >
      {label}
    </Styles.Button>
  );
};

export default Button;
