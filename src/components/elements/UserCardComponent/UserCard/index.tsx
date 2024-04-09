import { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import { IUser } from '../../../../Home';
import React from 'react';


interface IUserCardProps {
	userProp: IUser;
	onCardClick: (userId: string) => void;
}

function InitUserCard({ userProp, onCardClick }: IUserCardProps) {
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		setUser(userProp);
	}, [setUser]);

	function onCardClickHandler() {
		if (!user) return;
		onCardClick(user.email);
	}
	if (!user) return;

	return (
		<article onClick={onCardClickHandler} className={styles["user-card"]}>
			<h2 className={`${styles["heading-big"]} ${styles["user-card__name"]}`}>{user.name}</h2>

			<ul className={styles["user-card-info-wrapper"]}>
				<li className={`${styles["user-card-info"]} ${styles["user-card-info__phone"]} ${styles["text-smallest"]} ${styles["text-muted"]}`}>{user.phone}</li>
				<li className={`${styles["user-card-info"]} ${styles["user-card-info__email"]} ${styles["text-smallest"]} ${styles["text-muted"]}`}>{user.email}</li>
			</ul>
		</article>
	);
}

export const UserCard = React.memo(InitUserCard)
