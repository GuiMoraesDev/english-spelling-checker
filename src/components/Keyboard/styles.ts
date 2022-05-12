import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);

  flex-wrap: wrap;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};

  margin: ${({ theme }) =>
    css`
      ${theme.sizes.common.x2} ${theme.sizes.common.x0}
    `};

  gap: ${({ theme }) => theme.sizes.common.x2};
`;

export const KeyboardKey = styled.button`
  border: ${({ theme }) => theme.borders.solid};
  border-radius: ${({ theme }) => theme.rounded.sm};

  width: ${({ theme }) => theme.sizes.common.x6};
  height: ${({ theme }) => theme.sizes.common.x6};

  :hover,
  :focus-within,
  :focus {
    border-color: ${({ theme }) => theme.colors.info["600"]};
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutrals[100]};
    border-color: ${({ theme }) => theme.colors.neutrals[300]};
  }
`;
