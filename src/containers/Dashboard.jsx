import React from "react";

import Layout from "./../components/Profile/Layout";
import Navbar from "./../components/Profile/Navbar";
import Titlebar from "./../components/Profile/Titlebar";
import Infobox from "./../components/Profile/Infobox";

import { connect } from "react-redux";
import { getUserProfile } from "./../redux/actions/authActions";

class Dashboard extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUserProfile();
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

export default connect(null, { getUserProfile })(Dashboard);
