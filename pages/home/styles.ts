import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: space-between;
  justify-content: center;


  max-width: ${({theme}) => theme.sizes.common.x96};

  margin: auto;
  padding: ${({theme}) => theme.sizes.common.x4};
`;

export const Header = styled.header``;

export const InputsWrapper = styled.div``;
