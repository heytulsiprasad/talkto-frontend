import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Facebook from "../assets/svg/Facebook";
import GitHub from "../assets/svg/GitHub";
import Google from "../assets/svg/Google";
import Twitter from "../assets/svg/Twitter";

const FooterParent = styled.div`
  color: #828282;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    color: #2f80ed;
    margin-left: 5px;
    text-decoration: none;
  }

  .FooterIcons {
    display: flex;
    margin: 1rem;
  }

  .FooterIcons svg:hover {
    cursor: pointer;
    filter: brightness(0.5);
  }

  .FooterIcons a:not(:last-of-type) {
    margin-right: 1.2rem;
  }
`;

const Footer = ({ type }) => {
  let bottomText;

  if (type === "login") {
    bottomText = (
      <h2>
        Don't have an account yet?<Link to="/signup">Register</Link>
      </h2>
    );
  } else if (type === "signup") {
    bottomText = (
      <h2>
        Already a member?<Link to="/login">Login</Link>
      </h2>
    );
  }

  const baseURL = "http://localhost:5000";

  return (
    <FooterParent>
      <h2>or continue with these social profiles</h2>
      <div className="FooterIcons">
        <a href={`${baseURL}/auth/facebook`}>
          <Facebook />
        </a>
        <a href={`${baseURL}/auth/github`}>
          <GitHub />
        </a>
        <a href={`${baseURL}/auth/google`}>
          <Google />
        </a>
        <a href={`${baseURL}/auth/twitter`}>
          <Twitter />
        </a>
      </div>
      {bottomText}
    </FooterParent>
  );
};

export default Footer;
