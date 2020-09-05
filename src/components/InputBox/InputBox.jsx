import React from "react";

import styles from "./InputBox.module.css";

const InputBox = ({ type }) => {
	const inputType = type.toLowerCase();
	const placeholder = type.charAt(0).toUpperCase() + type.slice(1);
	const icon =
		inputType === "email" ? "mail" : inputType === "password" ? "https" : null;

	return (
		<div className={styles.InputBox}>
			<label>
				<span className={["material-icons", styles.Icon].join(" ")}>
					{icon}
				</span>
				<input
					className={styles.Input}
					type={inputType}
					placeholder={placeholder}
				/>
			</label>
		</div>
	);
};

export default InputBox;
