import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
  }

  h2 {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
  }
`;

const Child = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  text-align: center;
`;

const Back = styled.div`
  margin-top: 1rem;
  line-height: 25px;
  color: #2d9cdb;
  cursor: pointer;

  .back-icon {
    font-size: 15px;
    margin-right: 2.5px;
  }

  .back-text {
    text-decoration: none;
    color: #2d9cdb;
    font-size: 15px;
  }
`;

const FourOhFour = (props) => {
  const letsGoBack = () => props.history.goBack();

  return (
    <Container>
      <Child>
        <h1>Four Oh Four</h1>
        <h2>Seems like, you are lost just like me</h2>
        <Back>
          <div className="back-text" onClick={letsGoBack}>
            Back
          </div>
        </Back>
      </Child>
    </Container>
  );
};

export default FourOhFour;
