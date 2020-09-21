import React from "react";
import { connect } from "react-redux";

import Layout from "../components/Profile/Layout";
import Navbar from "../components/Profile/Navbar";
import Back from "../components/Profile/Back";
import EditInfo from "../components/Profile/EditInfo";
import { logoutUser, fetchUserProfile } from "../redux/actions/authActions";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { fetchUserProfile } = this.props;
    fetchUserProfile(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { logoutUser, user } = this.props;
    const { isLoading } = this.state;

    return (
      <Layout>
        <Navbar username={user.name} onLogout={logoutUser} />
        <Back />
        <EditInfo isLoading={isLoading} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  logoutUser,
  fetchUserProfile,
})(EditProfile);
