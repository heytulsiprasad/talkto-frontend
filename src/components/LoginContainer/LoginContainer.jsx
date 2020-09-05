import React from "react";

import styles from "./LoginContainer.module.css";
import CenterBox from "../CenterBox/CenterBox";
import LogoBox from "../LogoBox/LogoBox";
import RegisterText from "../RegisterText/RegisterText";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const LoginContainer = () => {
	return (
		<div className={styles.LoginContainer}>
			<CenterBox>
				<LogoBox />
				<InputBox type="email" />
				<InputBox type="password" />
				<Button>Start talking now</Button>
				<Footer />
			</CenterBox>
		</div>
	);
};

export default LoginContainer;
