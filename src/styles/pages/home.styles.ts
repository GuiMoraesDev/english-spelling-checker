import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
  max-width: ${({ theme }) => theme.sizes.common.x96};
  height: ${({ theme }) => theme.sizes.partition["x1/1"]};
  min-height: 100vh;

  margin: auto;
  padding: ${({ theme }) => theme.sizes.common.x6};
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.sizes.common.x4};
`;

export const Steps = styled.span`
  position: absolute;

  top: ${({ theme }) => theme.sizes.common.x2};
  right: ${({ theme }) => theme.sizes.common.x2};

  display: flex;

  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.typography.variants.body2};

  padding: ${({ theme }) =>
    `${theme.sizes.common.x0} ${theme.sizes.common.x1}`};

  border: ${({ theme }) => theme.borders.solid};
  border-radius: ${({ theme }) => theme.rounded.full};
`;

export const InputsWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: ${({ theme }) => theme.sizes.partition["x1/1"]};
`;
