const colors = {
  transparent: "transparent",
  neutrals: {
    "000": "#FFFFFF",
    "050": "#F2F2F1",
    "100": "#E4E5E3",
    "150": "#D7D7D6",
    "200": "#C9CAC8",
    "300": "#AFB0AC",
    "400": "#949591",
    "500": "#797B75",
    "600": "#61625E",
    "700": "#30312F",
    "800": "#242523",
    "850": "#181917",
    "900": "#0C0C0C",
    "999": "#000000",
  },
  success: {
    "050": "#E8EEE9",
    "100": "#D7E2D9",
    "150": "#C6D5C9",
    "200": "#B5C8B9",
    "300": "#94AF99",
    "400": "#729579",
    "500": "#507C59",
    "600": "#406347",
    "700": "#304A35",
    "800": "#203224",
    "850": "#18251B",
    "900": "#101912",
    "950": "#080C09",
  },
  warning: {
    "050": "#FFFAF0",
    "100": "#FFF6E0",
    "150": "#FFF1D1",
    "200": "#FFEDC2",
    "300": "#FFE3A3",
    "400": "#FFDA85",
    "500": "#FFD166",
    "600": "#D8B052",
    "700": "#B18F3D",
    "800": "#8B6D29",
    "850": "#775D1F",
    "900": "#644C14",
    "950": "#503C0A",
  },
  error: {
    "050": "#FCEEE9",
    "100": "#F9DCD4",
    "150": "#F7CBBE",
    "200": "#F4BAA8",
    "300": "#EE977D",
    "400": "#E97551",
    "500": "#E35226",
    "600": "#B6421E",
    "700": "#883117",
    "800": "#5B210F",
    "850": "#44190B",
    "900": "#2D1008",
    "950": "#170804",
  },
  info: {
    "050": "#CADBEB",
    "100": "#B8CDE0",
    "150": "#A5BED5",
    "200": "#93AFCA",
    "300": "#6D92B5",
    "400": "#48749F",
    "500": "#235789",
    "600": "#1C466E",
    "700": "#153452",
    "800": "#0E2337",
    "850": "#0B1A29",
    "900": "#07111B",
    "950": "#04090E",
  },
};

const themeColors = {
  canvas: colors.neutrals["000"],
  canvasDark: colors.neutrals["050"],
  canvasDarker: colors.neutrals["100"],
  canvasDarkest: colors.neutrals["200"],
  canvasInvertedLight: colors.neutrals["800"],
  canvasInverted: colors.neutrals["999"],

  textLighter: colors.neutrals["400"],
  textLight: colors.neutrals["500"],
  text: colors.neutrals["900"],
  textInvertedLight: colors.neutrals["100"],
  textInverted: colors.neutrals["000"],

  border: colors.neutrals["200"],
  borderInverted: colors.neutrals["500"],

  brandPrimaryLight: colors.success["400"],
  brandPrimary: colors.success["500"],
};

export { colors, themeColors };
