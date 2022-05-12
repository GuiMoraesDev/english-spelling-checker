import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
  max-width: ${({ theme }) => theme.sizes.common.x96};

  margin: auto;
  padding: ${({ theme }) => theme.sizes.common.x4};
`;

export const Header = styled.header``;

export const InputsWrapper = styled.div``;
