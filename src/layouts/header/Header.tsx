import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [active, setActive] = useState("");
  const [offset, setOffset] = useState(0);

  const handleClick = (e: any) => {
    setActive(e.target.id);
  };
  const onScroll = () => setOffset(window.pageYOffset);
  window.onscroll = () => {
    setOffset(window.pageYOffset);
  };

  return (
    <div className="MainHeaderDiv">
      <Navbar
        collapseOnSelect
        expand="lg"
        className={offset === 0 ? "dark" : "transparent"}
        variant="dark"
        style={{ transition: "all 500ms" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/img/logo/mainLogo.png"
              alt="karmadhi logo"
              className="DesktopLogo"
              width={160}
            />
            <img
              src="/img/logo/mainLogo.png"
              alt="karmadhi logo"
              className="MediaScreenLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className={active === "1" ? "activeTab" : "text-white default"}
                id="1"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                to="/ourservice"
                className={active === "2" ? "activeTab" : "text-white default"}
                id="2"
                onClick={handleClick}
              >
                SERVICES
              </Link>
              <Link
                to="/job"
                className={active === "3" ? "activeTab" : "text-white default"}
                id="3"
                onClick={handleClick}
              >
                JOBS
              </Link>
              <Link
                to="/ourfamily"
                className={active === "4" ? "activeTab" : "text-white default"}
                id="4"
                onClick={handleClick}
              >
                TEAM
              </Link>

              <Link
                to="/technology"
                className={active === "5" ? "activeTab" : "text-white default"}
                id="5"
                onClick={handleClick}
              >
                Technology
              </Link>
              <Link
                to="/ourproject"
                className={active === "6" ? "activeTab" : "text-white default"}
                id="6"
                onClick={handleClick}
              >
                PROJECTS
              </Link>
              <Link
                to="/blog"
                className={active === "7" ? "activeTab" : "text-white default"}
                id="7"
                onClick={handleClick}
              >
                BLOG
              </Link>
              <Link
                to="/contactus"
                className={active === "8" ? "activeTab" : "text-white default"}
                id="8"
                onClick={handleClick}
              >
                CONTACT
              </Link>

              <a href="mailto:info@karmadhisolutions.com" className="email-us-btn" style={{ color: "#1ab999" }}>
                <img src="./img/icone/mail.png" alt="" className="img" /> Email US
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
