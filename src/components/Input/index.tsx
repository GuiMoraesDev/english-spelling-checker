import React, { InputHTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

import * as Styles from "./styles";

export interface InputDefaultPropsThatMakeStyles {
  dimension?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled?: boolean;
  error?: string;
}

interface InputDefaultProps
  extends InputDefaultPropsThatMakeStyles,
    InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
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
    className,
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
      >
        <Styles.InputComponent
          placeholder={props.placeholder || "Type here..."}
          ref={ref}
          id={id}
          disabled={props.isDisabled}
          {...props}
        />
      </Styles.InputContainer>
    </Styles.Container>
  );
};

export default React.forwardRef(Input);
