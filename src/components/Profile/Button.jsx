import React from "react";
import styled from "styled-components";

const BtnContainer = styled.button`
  padding: 5px 25px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 22px;
  cursor: pointer;

  border: ${(props) =>
    props.variant === "primary" ? "1px solid #828282" : "none"};
  background-color: ${(props) =>
    props.variant === "primary" ? "#fff" : "#2f80ed"};
  color: ${(props) => (props.variant === "primary" ? "#828282" : "#fff")};

  &:hover,
  &:active {
    background: ${(props) =>
      props.variant === "primary" ? "#e6e6e6" : "#2f80ede3"};
  }
`;

// const BtnContainer = styled.button`
// 	padding: 5px 25px;
// 	border-radius: 12px;
// 	font-size: 13px;
// 	line-height: 22px;
// 	cursor: pointer;

// 	border: none;
// 	background: #2f80ed;
// 	color: #fff;

// 	&:hover,
// 	&:active {
// 		background: #2f80ede3;
// 	}
// `;

const Button = ({ children, variant, clickHandler }) => (
  <BtnContainer variant={variant} onClick={clickHandler}>
    {children}
  </BtnContainer>
);

export default Button;
