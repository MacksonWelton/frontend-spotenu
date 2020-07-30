import { Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import MusicCard from "../../components/MusicCard";
import { useStyles } from "./style";

const MusicDetailsPage = () => {

  const classes = useStyles();

  const musicDetails = useSelector((state) => state.musics.musicDetails);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <MusicCard
        musicName={musicDetails.music_name}
        bandName={musicDetails.name}
      />
    </Container>
  )
}

export default MusicDetailsPage;