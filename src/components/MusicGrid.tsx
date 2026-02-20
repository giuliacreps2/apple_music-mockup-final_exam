import { Col, Row } from "react-bootstrap";
import MusicCard from "./MusicCard";
import type { Datum } from "../types";

interface MusicGridProps {
  tracks: Datum[];
  onSelectTrack: (track: Datum) => void;
}

const MusicGrid = ({ tracks, onSelectTrack }: MusicGridProps) => {
  return (
    <div>
      <h3 className="mb-1 fw-bold p-3">
        Tutto Rihanna
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </span>
      </h3>
      <div className="related-grid-container"></div>
      <Row className="flex-nowrap flex-md-wrap overflow-auto overflow-md-visible g-2 p-3">
        {tracks.slice(0, 12).map((track) => (
          <Col xs={6} md={4} lg={2} className="d-flex" key={track.id}>
            <MusicCard track={track} onSelectTrack={onSelectTrack} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MusicGrid;
