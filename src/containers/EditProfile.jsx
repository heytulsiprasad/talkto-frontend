import React from "react";

import Layout from "./../components/Profile/Layout";
import Navbar from "./../components/Profile/Navbar";
import Back from "./../components/Profile/Back";
import EditInfo from "./../components/Profile/EditInfo";

class EditProfile extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Back />
        <EditInfo />
      </Layout>
    );
  }
}

export default EditProfile;
