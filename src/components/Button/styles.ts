import styled, { css } from "styled-components";

import { ButtonDefaultPropsThatMakeStyles } from ".";

export const Button = styled.button<ButtonDefaultPropsThatMakeStyles>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

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

  ${({ theme, rounded }) => {
    return css`
      border-radius: ${theme.rounded[rounded || "none"]};
    `;
  }}

  ${({ dimension, theme }) => {
    if (dimension === "xs")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x9};

        padding: 0 ${theme.sizes.common.x3};
      `;

    if (dimension === "sm")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x10};

        padding: 0 ${theme.sizes.common.x3};
      `;

    if (dimension === "md")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x11};

        padding: 0 ${theme.sizes.common["x3.5"]};
      `;

    if (dimension === "lg")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x12};

        padding: 0 ${theme.sizes.common.x4};
      `;

    if (dimension === "xl")
      return css`
        ${theme.typography.variants.body1};

        height: ${theme.sizes.common.x14};

        padding: 0 ${theme.sizes.common.x5};
      `;
  }}

  ${({ variant, theme }) => {
    if (variant === "primary")
      return css`
        color: ${theme.colors.neutrals[700]};

        background-color: ${theme.themeColors.brandPrimary};
        border: ${theme.sizes.common["x0.5"]} solid
          ${theme.colors.primary["600"]};

        &:hover {
          background-color: ${theme.themeColors.brandPrimaryLight};
        }
      `;

    if (variant === "secondary")
      return css`
        color: ${theme.themeColors.textInverted};
        background-color: ${theme.themeColors.canvasInverted};

        &:hover {
          background-color: ${theme.themeColors.canvasInverted};
        }
      `;

    if (variant === "outline")
      return css`
        color: ${theme.themeColors.canvasInverted};
        background-color: ${theme.themeColors.canvas};

        border: 1px solid ${theme.themeColors.canvasInverted};

        &:hover {
          background-color: ${theme.themeColors.canvasInverted};
          color: ${theme.themeColors.textInverted};
        }
      `;

    if (variant === "neutral")
      return css`
        color: ${theme.themeColors.text};
        background-color: ${theme.colors.transparent};

        &:hover {
          text-decoration: underline;
        }
      `;

    if (variant === "alert")
      return css`
        color: ${theme.colors.neutrals[700]};

        background-color: ${theme.colors.alert[700]};
        border: ${theme.sizes.common["x0.5"]} solid ${theme.colors.alert["800"]};

        &:hover {
          background-color: ${theme.colors.alert[600]};
        }
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
`;
