import { createMuiTheme } from "@material-ui/core";
import { ptBR } from "@material-ui/core/locale";

export default createMuiTheme({
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "default": "rgba(255, 255, 255, 1)"
    },
    "primary": {
      "light": "#7986cb",
      "main": "#3f51b5",
      "dark": "#303f9f",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(250, 141, 72, 1)",
      "main": "rgba(245, 116, 35, 1)",
      "dark": "rgba(190, 74, 2, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)",
      "white": "rgba(255, 255, 255, 1)"
    }
  }
}, ptBR)