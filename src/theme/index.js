import _ from "lodash"
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { softShadows } from "./shadows"
import typography from "./typography"

const baseOptions = {
  direction: "ltr",
  typography,
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden"
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)"
      }
    }
  }
}

const defaultTheme = {
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600]
        }
      }
    }
  },
  palette: {
    type: "light",
    action: {
      active: "#104f67"
    },
    background: {
      default: "#55b17a",
      dark: "#55b17a",
      paper: "#55b17a"
    },
    primary: {
      main: "#56b27b"
    },
    secondary: {
      main: "#104f67"
    },
    text: {
      primary: "#000",
      secondary: "#000"
    }
  },
  shadows: softShadows
}

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      defaultTheme,
      { direction: config.direction }
    )
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
