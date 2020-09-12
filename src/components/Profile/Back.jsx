import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	grid-row: 2 / 3;
	grid-column: 3 / 4;
	margin-top: 1rem;

	line-height: 25px;
	color: #2d9cdb;
	cursor: pointer;

	.back-icon {
		font-size: 15px;
		margin-right: 2.5px;
	}

	.back-text {
		text-decoration: none;
		color: #2d9cdb;
		font-size: 15px;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Back = () => (
	<Container>
		<StyledLink className="back-text" to="/dash">
			<span className="material-icons back-icon">arrow_back_ios</span>
			Back
		</StyledLink>
	</Container>
);

export default Back;
