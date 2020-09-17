import React from "react";
import styled from "styled-components";

const ButtonParent = styled.div`
  margin: 20px 0 30px;

  button {
    background: #2f80ed;
    border-radius: 8px;
    border: none;
    outline: none;
    text-align: center;
    color: #fff;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;
  }

  button:hover {
    transition: opacity 0.1s ease-in;
    opacity: 0.9;
  }

  button:active {
    transition: transform 0.1s ease-in;
    transform: scale(0.99);
  }
`;

const Button = ({ children, clickHandler }) => {
  return (
    <ButtonParent>
      <button onClick={clickHandler}>{children}</button>
    </ButtonParent>
  );
};

export default Button;
