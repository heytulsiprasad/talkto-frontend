import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import CenterBox from "../components/CenterBox";
import LogoBox from "../components/LogoBox";
import RegisterText from "../components/RegisterText";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";

import { registerUser, clearErrors } from "../redux/actions/authActions";

const SignupContainerParent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) minmax(400px, 2.7fr) repeat(3, 1fr);
  grid-template-rows: 1fr minmax(600px, 3fr) 1fr;
`;

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Add errors to local state
    if (props.errors) return { ...state, errors: props.errors };
    return null;
  }

  inputValue = (name, val) => {
    this.setState((state) => ({
      ...state,
      [name]: val,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userInput = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(userInput, this.props.history);
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <SignupContainerParent>
        <CenterBox>
          <LogoBox />
          <RegisterText />
          <form noValidate onSubmit={this.onSubmit}>
            <InputBox
              type="email"
              error={this.state.errors.email}
              value={(val) => this.inputValue("email", val)}
            />
            <InputBox
              type="password"
              error={this.state.errors.password}
              value={(val) => this.inputValue("password", val)}
            />
            <Button clickHandler={this.onSubmit}>Start talking now</Button>
          </form>
          <Footer type="signup" />
        </CenterBox>
      </SignupContainerParent>
    );
  }
}

SignupContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser, clearErrors })(
  SignupContainer
);
