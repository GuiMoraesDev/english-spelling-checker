import { css } from "styled-components";

const typography = {
  fontFamily: {
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
  },
  variants: {
    display1: css`
      font-size: ${({ theme }) => theme.sizes.common.x6};
      font-weight: 600;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x7};
    `,
    heading1: css`
      font-size: ${({ theme }) => theme.sizes.common["x4.5"]};
      font-weight: 600;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x5};
    `,
    heading2: css`
      font-size: ${({ theme }) => theme.sizes.common.x4};
      font-weight: 600;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common["x4.5"]};
    `,
    heading3: css`
      font-size: ${({ theme }) => theme.sizes.common["x3.5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x4};
    `,
    heading4: css`
      font-size: ${({ theme }) => theme.sizes.common["x2.5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x3};
    `,
    heading5: css`
      font-size: ${({ theme }) => theme.sizes.common.x2};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common["x2.5"]};
    `,
    body1: css`
      font-size: ${({ theme }) => theme.sizes.common["x2.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x3};
    `,
    body2: css`
      font-size: ${({ theme }) => theme.sizes.common.x2};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common["x2.5"]};
    `,
    body3: css`
      font-size: ${({ theme }) => theme.sizes.common["x1.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x2};
    `,
  },
};

export default typography;
