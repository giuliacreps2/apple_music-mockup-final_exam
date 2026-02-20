import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import MyNavbar from "./layout/MyNavabar";
import MusicGrid from "./components/MusicGrid";
import MobilePlayer from "./components/MobilePlayer";
import type { Welcome, Datum } from "./types";

function App() {
  const urlAPI = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rihanna";
  const [tracks, setTracks] = useState<Datum[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Datum | null>(null);

  const getAlbumData = () => {
    fetch(urlAPI)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Problema nella chiamata dei dati");
      })
      .then((deezerAlbum: Welcome) => {
        console.log(deezerAlbum);
        setTracks(deezerAlbum.data ?? []);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbumData();
  }, []);

  return (
    <>
      <MyNavbar />
      <MusicGrid tracks={tracks} onSelectTrack={setCurrentTrack} />
      <MobilePlayer currentTrack={currentTrack} />
    </>
  );
}

export default App;
