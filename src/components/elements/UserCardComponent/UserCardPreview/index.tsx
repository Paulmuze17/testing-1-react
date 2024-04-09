import { useEffect, useRef, useState } from 'react';
import styles from "./index.module.scss";
import { IUser } from '../../../../Home';
import React from 'react';

interface UserCardPreviewProps {
	selectedUser: IUser | null;
	onClosed: () => void;
}

function UserCardPreview({ selectedUser, onClosed }: UserCardPreviewProps) {
	const [isActive, setIsActive] = useState(false);
	const bgWrapper = useRef(null);

	useEffect(() => {
		setIsActive(selectedUser ? true : false)
	}, [selectedUser]);

	function closeBtnHandler() {
		setIsActive(false)
	}

	function onWrapperClickHandler(event: React.MouseEvent<HTMLElement>) {
		if (bgWrapper.current === event.target) {
			onClosed();
		}
	}

	if (!isActive || !selectedUser) return (<></>);

	return (
		<div ref={bgWrapper} id="userPreview" onClick={onWrapperClickHandler} className={`${styles["user-card-preview-wrapper"]} ${!isActive ? "is-hidden" : ""}`}>
			<div className={styles["user-card-preview"]}>
				<div className={styles["user-card-preview__top-box"]}>
					<div className="heading-big">{selectedUser.name}</div>
					<button className="btn-close" onClick={closeBtnHandler}></button>
				</div>

				<div className={styles["user-card-preview__middle-box"]}>

					<div className="text-medium">Телефон:</div>
					<div className={`${styles["user-card-preview__middle-box-text"]} text-small text-muted`}>{selectedUser.phone}</div>

					<div className="text-medium">Почта:</div>
					<div className={`${styles["user-card-preview__middle-box-text"]} text-small text-muted`}>{selectedUser.email}</div>

					<div className="text-medium">Дата приема:</div>
					<div className={`${styles["user-card-preview__middle-box-text"]} text-small text-muted`}>{selectedUser.hire_date}</div>

					<div className="text-medium">Должность:</div>
					<div className={`${styles["user-card-preview__middle-box-text"]} text-small text-muted`}>{selectedUser.position_name}</div>

					<div className="text-medium">Подразделение:</div>
					<div className={`${styles["user-card-preview__middle-box-text"]} text-small text-muted`}>{selectedUser.department}</div>

				</div>

				<div className={styles["user-card-preview__bottom-box"]}>
					<div className={`${styles["user-card-preview__bottom-box-heading"]} text-medium`}>Дополнительная информация:</div>
					<p className="text-small text-muted">Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>

				</div>
			</div>
		</div>
	);
}

export default UserCardPreview
