import { Row, Col, Container } from "react-bootstrap";

function ToggleSearchMusic() {
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
    <Container fluid className="min-vh-100 p-4">
      <div className="mt-2">
        <h3 className="mb-4 fw-bold text-white">Altro da esplorare</h3>

        <Row className="g-3">
          {steps.map((step, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded-3"
                style={{
                  backgroundColor: "#202020",
                }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: "#ff3198",
                    fontWeight: "500",
                  }}
                >
                  {step.d}
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff3198" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ToggleSearchMusic;
