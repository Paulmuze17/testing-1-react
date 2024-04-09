// import styles from "./index.module.scss";
import { useCallback, useState } from 'react';
import { IUser } from '../../../../Home';
import UserCardPreview from '../UserCardPreview';
import { UserCard } from '../UserCard';

interface UserCardsListProps {
	users: IUser[] | null;
}

function UserCardsList({ users }: UserCardsListProps) {
	const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

	const onSelectCardhandler = useCallback((userId: string) => {
		if (userId !== "" && users) {
			setSelectedUser(users.find(x => x.email === userId) ?? null);
		}
	}, [])

	const onClosedHandler = () => {
		setSelectedUser(() => null);
	}

	return (
		<>
			{users ? users.map((element) => (<UserCard userProp={element} key={element.email} onCardClick={onSelectCardhandler} />)) : <div>LOADING</div>}

			<UserCardPreview onClosed={onClosedHandler} selectedUser={selectedUser} />
		</>
	);
}

export default UserCardsList
