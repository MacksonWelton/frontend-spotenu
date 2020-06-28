import { Box, Button, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";
import { useStyles } from "./style";

const BandHomePageItems = () => {

  const classes = useStyles();
  const history = useHistory();

  const goToAddAlbumsPage = () => {
    history.push(routes.AddAlbumsPage)
  }

  const goToAddMusicsPage = () => {
    history.push(routes.AddMusicsPage)
  }

  return (
    <div className={classes.div}>
      <Grid container className={classes.gridContainer}>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                className={classes.signupButton}
                onClick={goToAddMusicsPage}
                variant="contained"
                color="primary"
                type="submit">
                Adicionar Música
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                className={classes.signupButton}
                onClick={goToAddAlbumsPage}
                variant="contained"
                color="primary"
                type="submit">
                Adicionar Album
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  )

}

export default BandHomePageItems;