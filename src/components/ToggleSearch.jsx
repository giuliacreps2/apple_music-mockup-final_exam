import { Accordion, Row, Col } from "react-bootstrap";

function ToggleSearch() {
  const steps = [
    { d: "Esplora per genere" },
    { d: "Decenni" },
    { d: "Attività e stati d'animo" },
    { d: "Worldwide" },
    { d: "Classifiche" },
    { d: "Audio spaziale" },
    { d: "Video Musicali" },
    { d: "Nuovi artisti" },
    { d: "Hit del passato" },
  ];

  return (
    <div className="mt-3">
      <h3 className="mb-1 fw-bold p-3">Altro da esplorare </h3>

      <div className="related-grid-container">
        <Row className="flex-nowrap flex-md-wrap overflow-auto overflow-md-visible g-2 p-3">
          {steps.map((step, idx) => (
            <Col key={idx} xs={12} md={4} className="d-flex">
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                </Accordion.Item>
              </Accordion>
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

export default ToggleSearch;
