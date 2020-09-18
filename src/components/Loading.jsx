import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  &,
  &::before,
  &::after {
    background: #ffffff;
    animation: load1 1s infinite ease-in-out;
    width: 15px;
    height: 4em;
  }

  & {
    color: #000;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 15px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 1.5em;
  }

  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

const Loading = () => (
  <Parent>
    <Loader />
  </Parent>
);

export default Loading;
