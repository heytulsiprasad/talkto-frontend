import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "./Button";
import InputField from "./InputField";
import InputFieldImage from "./InputFieldImage";
import Loading from "../Loading";
import { editUserProfile } from "../../redux/actions/authActions";
import imageUpload from "../../utils/imageUpload";

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
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoading !== this.props.isLoading) {
      const { name, email, phone, bio, image } = prevProps.user;

      this.setState((state) => ({
        ...state,
        profile: {
          ...state.profile,
          name,
          email,
          phone,
          image,
          bio,
        },
      }));
    }
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

  imageChangeHandler = async (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile) {
      this.setState({ imageError: "Please select image. " });
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      this.setState({ imageError: "Please select a valid image." });
      return false;
    }

    // Utils function
    imageUpload(imageFile, (url) => {
      this.setState((state) => ({
        ...state,
        profile: {
          ...state.profile,
          image: url,
        },
      }));
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const userdata = this.state.profile;

    this.props.editUserProfile(userdata, this.props.history);
  };

  render() {
    const { name, email, phone, bio, image } = this.state.profile;
    const error = this.props.errors;

    return (
      <Container>
        <div className="title">
          <h1>Change Info</h1>
          <h2>Changes will be reflected to every services</h2>
        </div>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <>
            <FormContainer onSubmit={this.submitHandler}>
              <InputFieldImage
                title="Change Photo"
                value={image}
                id="upload-photo"
                type="file"
                accept="image/png, image/jpeg"
                onChange={this.imageChangeHandler}
              />
              <InputField
                title="Name"
                name="name"
                type="text"
                value={name || ""}
                error={error.name}
                placeholder="Enter your name..."
                onChange={this.inputChangeHandler}
              />
              <InputField
                title="Bio"
                name="bio"
                type="text"
                value={bio || ""}
                placeholder="Enter your bio..."
                error={error.bio}
                onChange={this.inputChangeHandler}
              />
              <InputField
                title="Phone"
                name="phone"
                type="tel"
                pattern="((\+|00)?[0-9]{2}|0)[1-9]([0-9]){8}"
                value={phone || ""}
                error={error.phone}
                placeholder="Enter your phone..."
                onChange={this.inputChangeHandler}
              />
              <InputField
                readOnly
                title="Email"
                name="email"
                type="email"
                placeholder="Enter your email..."
                value={email || ""}
                error={error.error}
              />
              <div style={{ marginTop: "23px" }}>
                <Button variant="secondary" clickHandler={this.submitHandler}>
                  Save
                </Button>
              </div>
            </FormContainer>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  errors: state.errors,
});

export default connect(mapStateToProps, { editUserProfile })(
  withRouter(EditInfo)
);
