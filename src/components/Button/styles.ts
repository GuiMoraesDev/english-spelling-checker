import styled, { css } from "styled-components";

import { ButtonDefaultPropsThatMakeStyles } from ".";

export const Button = styled.button<ButtonDefaultPropsThatMakeStyles>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.themeColors.text};

  background-color: ${({ theme }) => theme.themeColors.brandPrimary};
  border: ${({ theme }) => theme.borders.solid};

  border: ${({ theme }) => theme.borders.solid};
  border-color: transparent;

  padding: 0;
  margin: 0;

  cursor: pointer;

  box-sizing: border-box;

  transition: background-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  svg.left-icon:not(.no-label) {
    margin-right: ${({ theme }) => theme.sizes.common.x1};
  }

  svg.right-icon:not(.no-label) {
    margin-left: ${({ theme }) => theme.sizes.common.x1};
  }

  .load-component {
    position: absolute;

    right: ${({ theme }) => theme.sizes.common.x2};

    width: ${({ theme }) => theme.sizes.common.x4};
    height: ${({ theme }) => theme.sizes.common.x4};
  }

  :hover,
  :focus-within,
  :focus {
    background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};
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

        padding: 0 ${theme.sizes.common.x3};
      `;

    if (dimension === "sm")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x8};

        padding: 0 ${theme.sizes.common.x3};
      `;

    if (dimension === "md")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x9};

        padding: 0 ${theme.sizes.common["x3.5"]};
      `;

    if (dimension === "lg")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x10};

        padding: 0 ${theme.sizes.common.x4};
      `;

    if (dimension === "xl")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x12};

        padding: 0 ${theme.sizes.common.x5};
      `;
  }}

  ${({ theme, isDisabled }) => {
    if (isDisabled)
      return css`
        background-color: ${theme.colors.neutrals[200]};
        color: ${theme.colors.neutrals[500]};
        box-shadow: 0 0 0 1px ${theme.colors.neutrals[200]};
        border: ${theme.borders.none};

        &:hover {
          background-color: ${theme.colors.neutrals[200]};
          color: ${theme.colors.neutrals[500]};
        }
      `;
  }}

  ${({ isBold }) => {
    if (isBold)
      return css`
        font-weight: bold;
      `;
  }}
`;
