import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import Facebook from "./../../assets/svg/Facebook";
import GitHub from "./../../assets/svg/GitHub";
import Google from "./../../assets/svg/Google";
import Twitter from "./../../assets/svg/Twitter";

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<h2>or continue with these social profiles</h2>
			<div className={styles.FooterIcons}>
				<Facebook />
				<GitHub />
				<Google />
				<Twitter />
			</div>
			<h2>
				Already a member?<Link to="/login">Login</Link>
			</h2>
		</div>
	);
};

export default Footer;
