import { Button, Box, withStyles } from "@material-ui/core";

export const BoxButtons = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px",
  }

})(Box)

export const SignupButtom = withStyles({
  root: {
    width: "250px",
    marginBottom: "10PX"
  }
})(Button)