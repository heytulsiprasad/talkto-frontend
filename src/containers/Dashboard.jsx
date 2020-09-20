import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Layout from "../components/Profile/Layout";
import Navbar from "../components/Profile/Navbar";
import Titlebar from "../components/Profile/Titlebar";
import Infobox from "../components/Profile/Infobox";

import { fetchUserProfile, logoutUser } from "../redux/actions/authActions";

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchUserProfile } = this.props;
    fetchUserProfile();
  }

  render() {
    const { logoutUser } = this.props;

    return (
      <Layout>
        <Navbar onLogout={logoutUser} />
        <Titlebar />
        <Infobox />
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { fetchUserProfile, logoutUser })(Dashboard);
