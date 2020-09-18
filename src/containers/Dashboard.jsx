import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Layout from "../components/Profile/Layout";
import Navbar from "../components/Profile/Navbar";
import Titlebar from "../components/Profile/Titlebar";
import Infobox from "../components/Profile/Infobox";

import { fetchUserProfile } from "../redux/actions/authActions";

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchUserProfile } = this.props;
    fetchUserProfile();
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <Titlebar />
        <Infobox />
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
};

export default connect(null, { fetchUserProfile })(Dashboard);
