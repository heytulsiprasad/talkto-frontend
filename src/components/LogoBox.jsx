import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo-talk.png";

const LogoParent = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 35px;
  }

  h1 {
    margin-left: 1rem;
    align-self: center;
    font-weight: 700;
    font-size: 20px;
    text-transform: lowercase;
  }
`;

const LogoBox = () => {
  return (
    <LogoParent>
      <img src={Logo} alt="Brand Logo" />
      <h1>Talk.To</h1>
    </LogoParent>
  );
};

export default LogoBox;
