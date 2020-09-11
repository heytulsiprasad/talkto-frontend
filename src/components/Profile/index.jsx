import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Titlebar from "./Titlebar";
import Infobox from "./Infobox";

const Layout = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 2fr minmax(400px, 5fr) 2fr 0.5fr;
`;

const Profile = () => {
	return (
		<Layout>
			<Navbar />
			<Titlebar />
			<Infobox />
		</Layout>
	);
};

export default Profile;
