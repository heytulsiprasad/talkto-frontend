import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Layout from "../components/Profile/Layout";
import Navbar from "../components/Profile/Navbar";
import Titlebar from "../components/Profile/Titlebar";
import Infobox from "../components/Profile/Infobox";

import {
  fetchUserProfile,
  logoutUser,
  deleteUser,
} from "../redux/actions/authActions";

class Dashboard extends React.Component {
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
    const { logoutUser, user, deleteUser } = this.props;
    const { isLoading } = this.state;

    return (
      <Layout>
        <Navbar
          username={user.name}
          onLogout={logoutUser}
          onDelete={deleteUser}
          image={user.image}
        />
        <Titlebar />
        <Infobox user={user} isLoading={isLoading} />
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  fetchUserProfile,
  logoutUser,
  deleteUser,
})(Dashboard);
