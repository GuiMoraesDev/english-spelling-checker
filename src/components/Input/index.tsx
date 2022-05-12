import React, { InputHTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

import * as Styles from "./styles";

export interface InputDefaultPropsThatMakeStyles {
  dimension?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled?: boolean;
  isCorrect?: boolean;
  error?: string;
}

export interface AlertProps {
  text: string;
  type: "success" | "error";
}

interface InputDefaultProps
  extends InputDefaultPropsThatMakeStyles,
    InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  alert?: AlertProps;
}

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputDefaultProps
> = (
  {
    id,
    error,
    label,
    dimension = "md",
    rounded = "sm",
    isCorrect,
    className,
    alert,
    ...props
  },
  ref
) => {
  return (
    <Styles.Container className={className}>
      {label && (
        <Styles.Label id={id}>
          <p>{label}</p>
        </Styles.Label>
      )}

      <Styles.InputContainer
        dimension={dimension}
        rounded={rounded}
        isCorrect={isCorrect}
      >
        <Styles.InputComponent
          placeholder={props.placeholder || "Type here..."}
          ref={ref}
          id={id}
          disabled={props.isDisabled}
          {...props}
        />
      </Styles.InputContainer>

      {alert && (
        <Styles.AlertMessage type={alert?.type}>
          {alert.text}
        </Styles.AlertMessage>
      )}
    </Styles.Container>
  );
};

export default React.forwardRef(Input);
