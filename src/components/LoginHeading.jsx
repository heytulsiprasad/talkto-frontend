import React from "react";
import styled from "styled-components";

const LoginHeadingParent = styled.div`
  margin: 10px 0;
  padding: 10px 0;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const LoginHeading = () => {
  return (
    <LoginHeadingParent>
      <h1>Login</h1>
    </LoginHeadingParent>
  );
};

export default LoginHeading;
