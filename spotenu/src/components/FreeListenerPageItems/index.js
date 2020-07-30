import { Box, Button, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";
import { useStyles } from "./style";

const FreeListenerHomepageItems = () => {

  const classes = useStyles();
  const history = useHistory();

  const goToMusicsPage = () => {
    history.push(routes.MusicsPage)
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
      </Grid>
    </div>
  )

}

export default FreeListenerHomepageItems;