import { useState } from 'react';
import styles from "./index.module.scss";

interface ILayoutMain {
  children?: JSX.Element | JSX.Element[];
}
// "users-cards-wrapper"
function LayoutMain({children}:ILayoutMain) {

	return (
		<main className="main-wrapper">
			<div className="container">
				{children}
			</div>
		</main>
	);
}

export default LayoutMain
