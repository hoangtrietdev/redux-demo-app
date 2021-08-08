import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

const Header: FC = () => {
  const { current } = useSelector((state: any) => state.user);
  const { id } = current;
  console.log(current);
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://github.com/hoangtrietdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hoang Triet Dev
            </a>
          </Col>
          {!id && (
            <Col xs="auto">
              <NavLink
                exact
                className="header__link"
                to="/sign-in"
                activeClassName="header__link--active"
              >
                Sign In
              </NavLink>
            </Col>
          )}
          {id && (
            <img
              src={current.photoUrl}
              style={{ width: 40, borderRadius: 100 }}
              alt="Generic placeholder image"
            />
          )}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
