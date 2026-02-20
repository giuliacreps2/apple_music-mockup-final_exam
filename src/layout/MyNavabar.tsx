import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MobilePlayer from "../components/MobilePlayer";
import type { Datum } from "../types";

function MyNavbar({ currentTrack }: { currentTrack: Datum | null }) {
  return (
    <>
      <Navbar expand="lg" className="border-bottom border-secondary py-2" data-bs-theme="dark">
        <Container fluid className="px-4">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src="./public/images/music.svg" alt="logo" style={{ width: "30px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>

            {/* PLAYER DESKTOP */}
            {currentTrack && (
              <div
                className="d-none d-lg-flex align-items-center bg-dark rounded-pill px-3 py-1 mx-auto border border-secondary shadow-sm"
                style={{ minWidth: "300px" }}
              >
                <img src={currentTrack.album.cover_small} className="rounded-circle me-2" style={{ width: "30px", height: "30px" }} alt="cover" />
                <div className="me-3 overflow-hidden" style={{ maxWidth: "150px" }}>
                  <div className="text-white small text-truncate fw-bold" style={{ fontSize: "0.8rem" }}>
                    {currentTrack.title}
                  </div>
                </div>
                {/* Qui potresti spostare la logica dei tasti o semplicemente mostrare cosa suona */}
                <span className="badge rounded-pill bg-danger small">In riproduzione</span>
              </div>
            )}

            <Nav className="ms-auto">
              <NavDropdown title="Account" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="#action/3.1">Profilo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* PLAYER MOBILE*/}
      <div className="d-lg-none">
        <MobilePlayer currentTrack={currentTrack} />
      </div>
    </>
  );
}

export default MyNavbar;
