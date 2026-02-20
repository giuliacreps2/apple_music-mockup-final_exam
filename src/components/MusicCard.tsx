import Card from "react-bootstrap/Card";
import type { Datum } from "../types";

interface MusicCardProps {
  track: Datum;
  onSelectTrack: (track: Datum) => void;
}

function MusicCard({ track, onSelectTrack }: MusicCardProps) {
  return (
    <>
      <Card className="border-0 h-100 related-card" onClick={() => onSelectTrack(track)} style={{ cursor: "pointer" }}>
        <div className="img-wrapper">
          <Card.Img variant="top" src={track.album.cover_medium} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
        </div>
        <Card.Body className="p-2 text-left d-flex flex-column justify-content-center">
          <Card.Text
            className="small mb- mt-1 fw-bold"
            style={{
              fontSize: "0.85rem",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "2.2rem",
            }}
          >
            {track.title}
          </Card.Text>
          <Card.Text>Rihanna</Card.Text>
        </Card.Body>
      </Card>
      <div>
        <style>{`
        .related-grid-container .overflow-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .related-grid-container .overflow-auto::-webkit-scrollbar {
          display: none;
        }

        .related-card {
          transition: transform 0.3s ease;
          border-radius: 15px;
          min-width: 150px; 
        }
        .related-card:hover {
          transform: translateY(-5px);
        }
        .img-wrapper {
          overflow: hidden;
          border-radius: 15px;
        }
        @media (min-width: 768px) {
          .related-card { min-width: auto; }
        }
      `}</style>
      </div>
    </>
  );
}

export default MusicCard;
