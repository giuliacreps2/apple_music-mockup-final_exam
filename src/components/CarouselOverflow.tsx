import { Card, Row, Col } from "react-bootstrap";

function CarouselOverflow() {
  const steps = [
    { t: "./public/images/2a.png", d: "Prologo con Abuelo" },
    { t: "./public/images/2b.png", d: "The Wander" },
    { t: "./public/images/2c.png", d: "Micael Bublè e Carly Pearce" },
    { t: "./public/images/2d.png", d: "Immagine 4" },
    { t: "./public/images/2e.png", d: "Immagine 5" },
    { t: "./public/images/2f.png", d: "Immagine 6" },
  ];

  return (
    <div className="mt-3">
      <h3 className="mb-1 fw-bold p-3">
        Nuovi episodi radio{" "}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </span>
      </h3>

      <div className="related-grid-container">
        <Row className="flex-nowrap flex-md-wrap overflow-auto overflow-md-visible g-2 p-3">
          {steps.map((step, idx) => (
            <Col key={idx} xs={6} md={4} lg={2} className="d-flex">
              <Card className="border-0 h-100 related-card">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={step.t} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                </div>
                <Card.Body className="p-2 text-left d-flex flex-column justify-content-center">
                  <Card.Title
                    className="small mb-1 mt-1 fw-bold"
                    style={{
                      fontSize: "0.85rem",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "2.2rem",
                    }}
                  >
                    {step.d}
                  </Card.Title>
                </Card.Body>
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
