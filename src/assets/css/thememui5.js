import { createTheme } from "@mui/material/styles";

const Palette = {
  primary: {
    dark2: "#077907",
    dark: "#0a950a",
    main: "#0aad0a",
    light: "#87ff87",
    light2: "#76f976",
    light3: "#c3ffc3",
  },
  info: {
    dark: "#01579b",
    main: "#0288d1",
    light: "#03a9f4",
  },
  background: {
    paper: "#FAFCFD",
    default: "#FFFFFF"
  },
  text: {
    primary: "#343538",
    secondary: "#077907",
    dark: "#343538",
    disabled: "#B4B9BE",
    red: "#E24763",
    white: "#FFFFFF",
    lightGrey: "#B4B9BE",
    grey: "#6D7781"
  },
};

const ThemeFonts = {
  screenxl: {
    h1: 36,
    h2: 32,
    h3: 26,
    h4: 24,
    h5: 20,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 20,
    chip: 16,
    tag: 12
  },
  screenlg: {
    h1: 38,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 18,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 18,
    chip: 16,
    tag: 12
  },
  screenmd: {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    subtitle1: 18,
    subtitle2: 15,
    body1: 17,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 15,
    button: 15,
    buttonsm: 13,
    buttonlg: 18,
    inputLabel: 12,
    inputText: 15,
    helperText: 11,
    tooltip: 13,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  },
  screensm: {
    h1: 23,
    h2: 21,
    h3: 20,
    h4: 19,
    h5: 18,
    h6: 16,
    subtitle1: 17,
    subtitle2: 14,
    body1: 16,
    body2: 14,
    caption: 12,
    overline: 12,
    numericText: 14,
    button: 14,
    buttonsm: 13,
    buttonlg: 16,
    inputLabel: 12,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  }
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 960,
    lg: 1280,
    xl: 1600
  }
};

const theme = createTheme({
  spacing: 8,
  breakpoints,
  palette: {
    primary: {
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3,
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,    
      dark: Palette.text.dark,
      disabled: Palette.text.disabled,
      red: Palette.text.red,
      white: Palette.text.white,
      lightGrey: Palette.text.lightGrey,
      grey: Palette.text.grey
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + "px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + "px",
      },
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + "px",
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + "px",
        fontWeight: "500",
      },
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + "px",
      fontWeight: "600",
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + "px",
        fontWeight: "500",
      },
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + "px",
      fontWeight: "500",
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + "px",
        fontWeight: "500",
      },
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + "px",
      fontWeight: "500",
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + "px",
        fontWeight: "500",
      },
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + "px",
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + "px",
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + "px",
        fontWeight: "500",
      },
    },
    subtitle1: {
      fontSize: ThemeFonts.screenxl.subtitle1 + "px",
      fontWeight: "300",
      lineHeight: "120%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle1 + "px",
      },
    },
    subtitle2: {
      fontSize: ThemeFonts.screenxl.subtitle2 + "px",
      fontWeight: "500",
      lineHeight: "150%",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle2 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle2 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle2 + "px",
      },
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + "px",
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + "px",
      },
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + "px",
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + "px",
      },
    },
    caption: {
      lineHeight: "144%",
      fontSize: ThemeFonts.screenxl.caption + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.caption + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.caption + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.caption + "px",
      },
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      letterSpacing: "0.01em",
      fontSize: ThemeFonts.screenxl.overline + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + "px",
      },
    },
    button: {
      //Numeric Text Style
      lineHeight: "120%",
      fontWeight: "norxsmal",
      textTransform: "none",
      fontSize: ThemeFonts.screenxl.overline + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + "px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + "px",
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`
          }
        },
        sizeLarge: {
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`
          }
        },
        sizeSmall: {
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`
          }
        },
        containedPrimary: {
        },
        textPrimary: {
          backgroundColor: "transparent",
          border: `1px solid transparent`,
          color: Palette.info.main,
          "&:hover, &:focus, &:active": {
            backgroundColor: "transparent",
            color: Palette.info.dark,
          },
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.background.paper + '!important', 
          padding: 5,
          borderRadius: 8,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ".cardBox": {
            position: "relative",
              ".MuiButton-root": {
                position: "absolute",
                top: 15,
                right: 15,
                borderRadius: 50,
              }
          }
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          objectFit: "contain",
          padding: "20px 0",
          mixBlendMode: "multiply",
          position: "relative"
        }
      }
    },
    MuiCardActions: {
      styleOverrides:{
        root: {
          justifyContent: "space-between",
          padding: "16px",
          paddingTop: 0,
        }
      }
    }
  }
});

export default theme;
