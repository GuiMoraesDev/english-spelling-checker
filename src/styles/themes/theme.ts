import { DefaultTheme } from "styled-components";

import breakpoints from "./breakpoints";
import { colors, themeColors } from "./colors";
import sizes from "./sizes";
import typography from "./typography";

const appTheme: DefaultTheme = {
  breakpoints,
  transition: {
    slow: "0.4s ease-in-out",
    normal: "0.3s",
    fast: "0.2s",
  },
  opacity: {
    low: "0.8",
    mid: "0.6",
    high: "0.4",
    full: "1",
  },
  colors,
  themeColors,
  sizes,
  borders: {
    none: "none",
    solid: `${sizes.common.xpx} solid ${themeColors.border}`,
    solidDarker: `${sizes.common.xpx} solid ${themeColors.borderInverted}`,
  },
  typography,
  rounded: {
    none: "none",
    sm: sizes.common.x1,
    md: sizes.common["x2.5"],
    lg: sizes.common.x4,
    full: "10000px",
  },
  shadows: {
    none: "none",
    regular: "0px 3px 6px 1px rgba(0, 0, 0, 0.16)",
    short: `1px 0px 3px 0px ${colors.neutrals["200"]}`,
  },
};

export default appTheme;
