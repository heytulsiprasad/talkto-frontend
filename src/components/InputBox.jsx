import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
	/* border: 1px solid ${(props) => (props.error ? "#bdbdbd" : "red")}; */
	border-radius: 8px;
	padding: 10px;
	margin-top: 10px;

	label {
		display: flex;
	}

	.icon {
		margin-right: 10px;
		color: #828282;
	}

	input {
		outline: none;
		border: none;
		width: 100%;
	}
`;

const ErrorText = styled.p`
	font-size: 11px;
	margin: 2px 10px;
	color: red;
`;

const InputBox = ({ type, value, error }) => {
	const [inputValue, setInputValue] = React.useState("");

	const inputType = type.toLowerCase();
	const placeholder = type.charAt(0).toUpperCase() + type.slice(1);
	const icon =
		inputType === "email" ? "mail" : inputType === "password" ? "https" : null;

	const updateValue = (e) => {
		setInputValue(e.target.value);
		value(e.target.value);
	};

	return (
		<div>
			<InputContainer
				style={{ border: `1px solid ${error ? "red" : "#bdbdbd"}` }}
			>
				<label>
					<span className="material-icons icon">{icon}</span>
					<input
						type={inputType}
						value={inputValue}
						onChange={(e) => updateValue(e)}
						placeholder={placeholder}
					/>
				</label>
			</InputContainer>
			{error && <ErrorText>{error}</ErrorText>}
		</div>
	);
};

export default InputBox;
