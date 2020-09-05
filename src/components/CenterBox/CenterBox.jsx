import React from "react";

import styles from "./CenterBox.module.css";

const CenterBox = ({ children }) => {
	return <div className={styles.CenterBox}>{children}</div>;
};

export default CenterBox;
