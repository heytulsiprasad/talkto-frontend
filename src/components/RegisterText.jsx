import React from "react";
import styled from "styled-components";

const RegisterTextParent = styled.div`
	margin: 1rem 0;
	padding: 1rem 0;

	h1 {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	p {
		font-weight: 500;
	}
`;

const RegisterText = (props) => {
	return (
		<RegisterTextParent>
			<h1>Talk.to helps you connect and talk with the people in your life.</h1>
			<p>
				Unlike anything you've ever experienced before. A place you'd love to
				hang out with loved ones.
			</p>
		</RegisterTextParent>
	);
};

export default RegisterText;
