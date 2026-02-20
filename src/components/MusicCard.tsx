import Card from "react-bootstrap/Card";
import type { Datum } from "../types";

interface MusicCardProps {
  track: Datum;
  onSelectTrack: (track: Datum) => void;
}

function MusicCard({ track, onSelectTrack }: MusicCardProps) {
  return (
    <Card onClick={() => onSelectTrack(track)} style={{ cursor: "pointer", width: "18rem" }}>
      <Card.Img variant="top" src={track.album.cover_medium} />
      <Card.Body>
        <Card.Text>{track.title}</Card.Text>
        <Card.Text>Rihanna</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MusicCard;
