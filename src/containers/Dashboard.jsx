import React from "react";

import Layout from "./../components/Profile/Layout";
import Navbar from "./../components/Profile/Navbar";
import Titlebar from "./../components/Profile/Titlebar";
import Infobox from "./../components/Profile/Infobox";

class Dashboard extends React.Component {
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

export default Dashboard;
