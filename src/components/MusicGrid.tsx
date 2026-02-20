import { Col, Row } from "react-bootstrap";
import MusicCard from "./MusicCard";
import type { Datum } from "../types";

interface MusicGridProps {
  tracks: Datum[];
  onSelectTrack: (track: Datum) => void;
}

const MusicGrid = ({ tracks, onSelectTrack }: MusicGridProps) => {
  return (
    <Row className="g-2">
      {tracks.map((track) => (
        <Col xs={12} md={4} key={track.id}>
          <MusicCard track={track} onSelectTrack={onSelectTrack} />
        </Col>
      ))}
    </Row>
  );
};

export default MusicGrid;
