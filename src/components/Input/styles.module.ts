import { endianness } from "os";
import styled, { css } from "styled-components";

import { AlertProps, InputDefaultPropsThatMakeStyles } from ".";

export const Container = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
`;

export const InputContainer = styled.label<InputDefaultPropsThatMakeStyles>`
  position: relative;

  display: flex;

  align-items: center;

  width: auto;

  gap: ${({ theme }) => theme.sizes.common.x1};

  color: ${({ theme }) => theme.themeColors.text};

  background-color: ${({ theme }) => theme.themeColors.canvasDark};

  border: ${({ theme }) => theme.borders.solid};

  border-color: ${({ theme, isCorrect }) => {
    if (isCorrect !== undefined) {
      return isCorrect
        ? theme.colors.success["700"]
        : theme.colors.error["700"];
    }
  }};

  transition: box-shadow ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast};

  &:hover,
  &:focus-within {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error[700] : theme.themeColors.borderInverted};
    box-shadow: ${({ theme }) => theme.shadows.short};
  }

  ${({ theme, rounded }) => {
    return css`
      border-radius: ${theme.rounded[rounded || "none"]};
    `;
  }}

  ${({ dimension, theme }) => {
    if (dimension === "xs")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x7};
      `;

    if (dimension === "sm")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x8};
      `;

    if (dimension === "md")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x9};
      `;

    if (dimension === "lg")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x10};
      `;

    if (dimension === "xl")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x12};
      `;
  }}

  ${({ theme, isDisabled }) => {
    if (isDisabled)
      return css`
        background-color: ${theme.colors.neutrals[200]};
        color: ${theme.colors.neutrals[500]};
        box-shadow: 0 0 0 1px ${theme.colors.neutrals[200]};

        &:hover {
          background-color: ${theme.colors.neutrals[200]};
          color: ${theme.colors.neutrals[500]};
        }
      `;
  }}
`;

export const InputComponent = styled.input`
  outline: none;

  width: 100%;
  height: 100%;

  padding: ${({ theme }) => `${theme.sizes.common.x0}
    ${theme.sizes.common.x4}`};

  color: inherit;
  background-color: inherit;

  border: none;
  border-radius: inherit;
`;

export const Label = styled.label``;

export const ActionButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.sizes.partition["x1/2"]};
  right: ${({ theme }) => theme.sizes.common.x2};

  display: flex;

  align-items: center;
  justify-content: center;

  margin: ${({ theme }) => theme.sizes.common.x0};
  padding: ${({ theme }) => theme.sizes.common.x0};

  background-color: transparent;

  border: none;

  transform: translateY(-${({ theme }) => theme.sizes.partition["x1/2"]});
  transition: transform ${({ theme }) => theme.transition.fast} ease-in-out;

  > .icon {
    width: ${({ theme }) => theme.sizes.common["x4.5"]};
    height: ${({ theme }) => theme.sizes.common["x4.5"]};

    fill: ${({ theme }) => theme.colors.neutrals["500"]};

    opacity: ${({ theme }) => theme.opacity.mid};

    transition: opacity ${({ theme }) => theme.transition.fast};
  }

  &:hover > .icon {
    opacity: 1;

    fill: ${({ theme }) => theme.colors.neutrals["900"]};
  }
`;

interface AlertMessageProps {
  type: AlertProps["type"];
}

export const AlertMessage = styled.p<AlertMessageProps>`
  ${({ theme }) => theme.typography.variants.body2};

  color: ${({ theme, type }) =>
    type === "success" ? theme.colors.success[800] : theme.colors.error[800]};
`;
