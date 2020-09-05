import React from "react";

import Logo from "./../../assets/logo-talk.png";
import styles from "./LogoBox.module.css";

const LogoBox = () => {
	return (
		<div className={styles.LogoBox}>
			<img src={Logo} alt="Brand Logo" />
			<h1>Talk.To</h1>
		</div>
	);
};

export default LogoBox;
