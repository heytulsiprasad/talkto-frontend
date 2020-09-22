import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  padding-top: 1rem;
`;

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

const InputFieldImage = ({ title, id, value, ...rest }) => (
  // Make an action
  // Store image on Redux

  <FieldContainer>
    <ImageFieldContainer>
      <img className="upload-image" src={value} alt="Person Profile" />
      <span className="material-icons input-icon">camera_alt</span>
      <input id={id} {...rest} />
      <label htmlFor={id}>{title}</label>
    </ImageFieldContainer>
  </FieldContainer>
);
export default InputFieldImage;
