import styled from "styled-components";

export const Container = styled.div`
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

export const InputsWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: ${({ theme }) => theme.sizes.partition["x1/1"]};
`;
