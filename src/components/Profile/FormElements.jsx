import React from "react";
import styled from "styled-components";

import Person from "../../assets/person.jpg";

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

const FieldLabel = styled.label``;

const ImageFieldContainer = styled.div`
  display: flex;
  max-width: 13rem;
  position: relative;
  justify-content: space-between;
  align-items: center;

  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  label {
    text-transform: uppercase;
    font-size: 13px;
    line-height: 18px;
    color: #828282;
    cursor: pointer;
  }

  img.upload-image {
    height: 72px;
    border-radius: 8px;
    position: relative;
    z-index: -1;
    cursor: pointer;

    &:hover + span.input-icon {
      opacity: 1;
    }
  }

  span.input-icon {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 12.5%;
    transform: translate(-50%, -50%);
    color: #000;
    /* mix-blend-mode: difference; */

    &:hover {
      opacity: 1;
    }
  }
`;

const Error = styled.p`
  font-size: 11px;
  margin: 2px 10px;
  color: red;
`;

export const InputField = ({ title, children, error, ...rest }) => (
  <FieldContainer>
    {children || (
      <FieldLabel>
        <FieldTitle>{title}</FieldTitle>
        <FieldInput error={error} {...rest} />
        {error && <Error>{error}</Error>}
      </FieldLabel>
    )}
  </FieldContainer>
);

export const InputFieldImage = ({ title }) => (
  <InputField>
    <ImageFieldContainer>
      <img className="upload-image" src={Person} alt="Person staring at wall" />
      <span className="material-icons input-icon">camera_alt</span>
      <input id="upload-photo" type="file" accept="image/png, image/jpeg" />
      <label htmlFor="upload-photo">{title}</label>
    </ImageFieldContainer>
  </InputField>
);
