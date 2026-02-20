import { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import type { Datum } from "../types";

function MobilePlayer({ currentTrack }: { currentTrack: Datum | null }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current?.play();
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current?.play();
    setIsPlaying((prev) => !prev);
  };

  return (
    <Container fluid className="fixed-bottom bg-dark text-white p-2">
      <audio ref={audioRef} src={currentTrack?.preview} />
      <Row className="align-items-center">
        <Col>{currentTrack ? currentTrack.title : "Nessuna traccia selezionata"}</Col>
        <Col xs="auto">
          <Button onClick={togglePlay} disabled={!currentTrack}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            )}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MobilePlayer;
