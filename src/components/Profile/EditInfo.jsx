import React from "react";
import styled from "styled-components";
import Button from "./Button";

import { InputFieldImage, InputField } from "./FormElements";

const Container = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 5;

  margin: 0 auto;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 12px;
  margin-top: 3rem;
  min-width: 50rem;
  padding: 2rem 4rem;

  .title {
    h1 {
      font-size: 25px;
      line-height: 33px;
      color: #000;
      font-weight: 400;
    }

    h2 {
      font-size: 15px;
      line-height: 18px;
      font-weight: 300;
      color: #828282;
    }
  }
`;

const FormContainer = styled.form`
  margin: 1rem 0;
`;

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "",
        image: "",
        bio: "",
        phone: "",
        email: "",
        password: "",
      },
    };
  }

  inputChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState((state) => ({
      ...state,
      profile: {
        ...state.profile,
        [name]: value,
      },
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <div className="title">
          <h1>Change Info</h1>
          <h2>Changes will be reflected to every services</h2>
        </div>
        <FormContainer onSubmit={this.submitHandler}>
          <InputFieldImage title="Change Photo" />
          <InputField
            title="Name"
            name="name"
            type="text"
            placeholder="Enter your name..."
            onChange={this.inputChangeHandler}
          />
          <InputField
            title="Bio"
            name="bio"
            type="text"
            placeholder="Enter your bio..."
            onChange={this.inputChangeHandler}
          />
          <InputField
            title="Phone"
            name="phone"
            type="tel"
            pattern="((\+|00)?[0-9]{2}|0)[1-9]([0-9]){8}"
            placeholder="Enter your phone..."
            onChange={this.inputChangeHandler}
          />
          <InputField
            title="Email"
            name="email"
            type="email"
            placeholder="Enter your email..."
            onChange={this.inputChangeHandler}
            required
          />
          <InputField
            title="Password"
            name="password"
            type="password"
            placeholder="Enter your new password..."
            onChange={this.inputChangeHandler}
            required
          />
          <div style={{ marginTop: "23px" }}>
            <Button variant="secondary">Save</Button>
          </div>
        </FormContainer>
      </Container>
    );
  }
}

export default EditInfo;
