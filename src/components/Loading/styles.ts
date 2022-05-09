import styled, { css } from 'styled-components';

import { LoadingProps } from '.';

interface LoadingComponentProps extends LoadingProps {
  shouldRotate?: boolean;
}

export const LoadingComponent = styled.div<LoadingComponentProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  margin: auto;

  > svg {
    width: ${({ theme }) => theme.sizes.partition['x1/1']};
    height: ${({ theme }) => theme.sizes.partition['x1/1']};

    ${({ status, theme }) => {
      if (status === 'loading') {
        return css`
          fill: ${theme.colors.neutrals[600]};
        `;
      }

      if (status === 'error') {
        return css`
          fill: ${theme.colors.alert[900]};
        `;
      }
    }}
  }

  ${({ dimension, theme }) => {
    if (dimension === 'sm') {
      return css`
        width: ${theme.sizes.common.x4};
        height: ${theme.sizes.common.x4};
      `;
    }

    if (dimension === 'md') {
      return css`
        width: ${theme.sizes.common.x6};
        height: ${theme.sizes.common.x6};
      `;
    }

    if (dimension === 'lg') {
      return css`
        width: ${theme.sizes.common.x8};
        height: ${theme.sizes.common.x8};
      `;
    }
  }}

  ${({ shouldRotate }) => {
    if (shouldRotate) {
      return css`
        animation-name: rotate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `;
    }
  }}
`;
