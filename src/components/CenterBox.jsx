import React from "react";
import styled from "styled-components";

const CenterBoxParent = styled.div`
		/* Positioning */
		grid-row: 2 / 3;
		grid-column: 4 / 5;
		height: fit-content;
		align-self: center;

		/* Box decorations */
		border: 1px solid #bdbdbd;
		border-radius: 1.5rem;

		/* Spacing */
		padding: 3rem;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;

const CenterBox = ({ children }) => {
  return <CenterBoxParent>{children}</CenterBoxParent>;
};

export default CenterBox;
