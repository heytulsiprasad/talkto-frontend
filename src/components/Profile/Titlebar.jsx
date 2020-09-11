import React from "react";
import styled from "styled-components";

const Container = styled.div`
	grid-row: 2 / 3;
	grid-column: 3 / 4;
	text-align: center;
	margin-top: 1rem;

	h1 {
		font-weight: 400;
		font-size: 36px;
		line-height: 49px;
	}

	h2 {
		font-weight: 300;
		font-size: 18px;
		line-height: 25px;
	}
`;

const Titlebar = () => (
	<Container>
		<h1>Personal Info</h1>
		<h2>Basic info, like your name and photo</h2>
	</Container>
);

export default Titlebar;
