import { Card, Row, Col } from "react-bootstrap";

function CarouselOverflow() {
  const steps = [
    { t: "./public/images/1a.png", d: "Rilassati. al resto pensiamo noi. Ascolta Apple Music Chill" },
    { t: "./public/images/1b.png", d: "Ecco la nuova casa della musicalatina" },
    { t: "./public/images/1c.png", d: "Ecco2 la nuova casa della musicalatina" },
  ];

  return (
    <div>
      <h3 className="mb-1 fw-bold p-3">NUOVA STAZIONE RADIO </h3>

      {/* Wrapper responsivo */}
      <div className="related-grid-container">
        <Row className="flex-nowrap flex-md-wrap overflow-auto overflow-md-visible g-2 p-3">
          {steps.map((step, idx) => (
            <Col key={idx} xs={8} md={6} lg={4} className="d-flex">
              <Card className="border-0 h-100 related-card">
                <Card.Title
                  className="text-dark mb-2 mt-1 fw-bold"
                  style={{
                    fontSize: "0.92rem",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "2.2rem",
                  }}
                >
                  {step.d}
                </Card.Title>
                <div className="img-wrapper">
                  <Card.Img variant="top" src={step.t} style={{ aspectRatio: "4/3", objectFit: "cover" }} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

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
  );
}

export default CarouselOverflow;
