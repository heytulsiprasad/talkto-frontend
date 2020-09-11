import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Person from "./../../assets/person.jpg";

const Parent = styled.div`
	grid-row: 3 / 4;
	grid-column: 2 / 5;

	margin: 0 auto;
	border: 1px solid #e0e0e0;
	box-sizing: border-box;
	border-radius: 12px;
	margin-top: 3rem;
	min-width: 50rem;
`;

const Child = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 4rem;

	.header_text {
		h1 {
			font-weight: 400;
			font-size: 25px;
		}

		h2 {
			font-weight: 300;
			font-size: 15px;
			color: #828282;
		}
	}

	.btn_container {
		align-self: center;
	}
`;

const DataContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	align-items: center;
	padding: 2rem 4rem;

	h1 {
		font-size: 13px;
		line-height: 18px;
		color: #bdbdbd;
		text-transform: uppercase;
	}

	p {
		font-size: 18px;
		line-height: 25px;
	}
`;

const Divider = styled.div`
	border: 0.5px solid #e0e0e0;
`;

const Picture = styled.img`
	border-radius: 8px;
	height: 55px;
`;

const Infobox = () => {
	return (
		<Parent>
			<Child>
				<div className="header_text">
					<h1>Profile</h1>
					<h2>Some info may be visible to other people</h2>
				</div>
				<div className="btn_container">
					<Button variant="primary">Edit</Button>
				</div>
			</Child>
			<Infodata title="photo" value={Person} />
			<Infodata title="name" value="Xanthe Neal" />
			<Infodata
				title="bio"
				value="I am a software developer and a big fan of talk.to"
			/>
			<Infodata title="phone" value="908249274292" />
			<Infodata title="email" value="xanthe.neal@gmail.com" />
			<Infodata title="password" value="************" />
		</Parent>
	);
};

const Infodata = ({ title, value }) => {
	let val;

	if (title === "photo") {
		val = <Picture src={value} alt="persons-profile" />;
	} else {
		val = <p>{value}</p>;
	}

	return (
		<React.Fragment>
			<Divider />
			<DataContainer>
				<h1>{title}</h1>
				{val}
			</DataContainer>
		</React.Fragment>
	);
};

export default Infobox;
