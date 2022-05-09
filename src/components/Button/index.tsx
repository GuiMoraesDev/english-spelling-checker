import React, { ButtonHTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

import * as Styles from "./styles";

export interface ButtonDefaultPropsThatMakeStyles {
  dimension?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  variant?: "primary" | "secondary" | "outline" | "neutral" | "alert";
  isDisabled: boolean;
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
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  const handleClick = React.useCallback(() => {
    return props.onClick?.();
  }, [props]);

  return (
    <Styles.Button
      dimension={dimension}
      rounded={rounded}
      variant={variant}
      onClick={handleClick}
      isDisabled={Boolean(props.disabled)}
      {...props}
    >
      {label}
    </Styles.Button>
  );
};

export default Button;
