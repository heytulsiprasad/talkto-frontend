import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  padding-top: 1rem;
`;

const FieldTitle = styled.h2`
  font-size: 13px;
  line-height: 18px;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

const FieldInput = styled.input`
  border: 1px solid ${(props) => (props.error ? "red" : "#828282")};
  min-width: 60%;
  /* border: 1px solid #828282; */
  border-radius: 12px;
  padding: 15px 20px;
  outline: none;
`;

const Error = styled.p`
  font-size: 11px;
  margin: 2px 10px;
  color: red;
`;

const InputField = ({ title, children, error, ...rest }) => (
  <FieldContainer>
    <label>
      <FieldTitle>{title}</FieldTitle>
      <FieldInput error={error} {...rest} />
      {error && <Error>{error}</Error>}
    </label>
  </FieldContainer>
);

export default InputField;
