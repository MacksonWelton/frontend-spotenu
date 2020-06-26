import { Box, Button, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";
import { useStyles } from "./style";

const AdmHomepageItems = () => {

  const classes = useStyles();
  const history = useHistory();

  const goToMusicGenrePage = () => {
    history.push(routes.MusicGenrePage)
  }

  const goToAllBandsPage = () => {
    history.push(routes.AllBandsPage)
  }

  return (
    <div className={classes.div}>
      <Grid container className={classes.gridContainer}>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                className={classes.signupButton}
                onClick={goToAllBandsPage}
                variant="contained"
                color="primary"
                type="submit">
                Aprovar Bandas
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                className={classes.signupButton}
                onClick={goToMusicGenrePage}
                variant="contained"
                color="primary"
                type="submit">
                Adicionar Gênero
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  )

}

export default AdmHomepageItems;