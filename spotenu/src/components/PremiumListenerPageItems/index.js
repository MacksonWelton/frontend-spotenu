import { Box, Button, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";
import { useStyles } from "./style";

const PremiumListenerHomepageItems = () => {

  const classes = useStyles();
  const history = useHistory();

  const goToCollaborativePlaylists = () => {
    history.push(routes.CollaborativePlaylists)
  }

  const goToMusicsPage = () => {
    history.push(routes.MusicsPage)
  }

  const goToPlaylistsPage = () => {
    history.push(routes.PlaylistsPage)
  }

  return (
    <div className={classes.div}>
      <Grid container className={classes.gridContainer}>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                onClick={goToMusicsPage}
                variant="contained"
                color="primary"
                type="submit">
                Todas as Músicas
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                onClick={goToPlaylistsPage}
                variant="contained"
                color="primary"
                type="submit">
                Minhas Playlists
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className={clsx(classes.gridItemUsers)} item>
          <div className={classes.contentGridItem}>
            <Box className={classes.boxButtons}>
              <Button
                onClick={goToCollaborativePlaylists}
                variant="contained"
                color="primary"
                type="submit">
                Playlists Colaborativas
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  )

}

export default PremiumListenerHomepageItems;