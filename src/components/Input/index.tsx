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
  handleOnChange?(value: string): void;
}

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputDefaultProps
> = (
  {
    id,
    error,
    label,
    handleOnChange,
    dimension = "md",
    rounded = "sm",
    className,
    ...props
  },
  ref
) => {
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    handleOnChange?.(value);
  };

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
          onChange={handleChangeValue}
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
