import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Layout = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 2fr minmax(400px, 5fr) 2fr 0.5fr;
`;

const Profile = () => {
	return (
		<Layout>
			<Navbar />
		</Layout>
	);
};

export default Profile;
