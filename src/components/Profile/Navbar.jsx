import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Dropdown from "./Dropdown";
import Icon from "../../assets/logo-talk.png";

const NavbarContainer = styled.nav`
  grid-column: 2 / 5;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Logo = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;

  img {
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 20px;
    text-transform: lowercase;
    align-self: center;
  }

  &:active {
    color: inherit;
  }
`;

const Navbar = ({ onLogout, username, image }) => (
  <NavbarContainer>
    <Logo to="/">
      <img src={Icon} alt="product-logo" />
      <h1>Talk.to</h1>
    </Logo>
    <Dropdown username={username} image={image} onLogout={onLogout} />
  </NavbarContainer>
);

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
