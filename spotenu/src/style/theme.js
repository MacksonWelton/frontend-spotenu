import { createMuiTheme } from "@material-ui/core";
import { ptBR } from "@material-ui/core/locale";

export default createMuiTheme({
  "palette":{
    "common":{
      "black":"#000",
      "white":"#fff"
    },
    "background":{
      "paper":"#fff",
      "default":"#fafafa"
    },
    "primary":{
      "light":"rgba(255, 158, 110, 1)",
      "main":"rgba(255, 81, 0, 1)",
      "dark":"rgba(216, 83, 21, 1)",
      "contrastText":"#fff"
    },"secondary":{
      "light":"rgba(248, 231, 28, 1)",
      "main":"rgba(248, 166, 28, 1)",
      "dark":"rgba(245, 152, 35, 1)",
      "contrastText":"#fff"
    },"error":{
      "light":"#e57373",
      "main":"rgba(255, 17, 0, 1)",
      "dark":"#d32f2f",
      "contrastText":"#fff"
    },"text":{
      "primary":"rgba(0, 0, 0, 1)",
      "secondary":"rgba(255, 81, 0, 1)",
      "disabled":"rgba(0, 0, 0, 0.38)",
      "hint":"rgba(255, 255, 255, 100)",
    }
  }
}, ptBR)