import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
`;
