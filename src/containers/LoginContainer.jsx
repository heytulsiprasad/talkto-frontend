import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import CenterBox from "../components/CenterBox";
import LogoBox from "../components/LogoBox";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import LoginHeading from "../components/LoginHeading";

import { loginUser, clearErrors } from "../redux/actions/authActions";

const LoginContainerParent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) minmax(400px, 2.7fr) repeat(3, 1fr);
  grid-template-rows: 1fr minmax(600px, 3fr) 1fr;
`;

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Check and fill the errors
    if (props.errors) return { ...state, errors: props.errors };
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

    this.props.loginUser(userInput, this.props.history);
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <LoginContainerParent>
        <CenterBox>
          <LogoBox />
          <LoginHeading />
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
            <Button clickHandler={this.clickHandler}>Start talking now</Button>
          </form>
          <Footer type="login" />
        </CenterBox>
      </LoginContainerParent>
    );
  }
}

LoginContainer.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, clearErrors })(
  LoginContainer
);
