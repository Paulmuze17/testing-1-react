import { useCallback, useEffect, useMemo, useState } from 'react'
import SearchBar from './components/elements/SearchBar'
import LayoutWrapper from './components/layouts/LayoutWrapper'
import LayoutMain from './components/layouts/LayoutMain';
import UserCardsList from './components/elements/UserCardComponent/UserCardsList';

export interface IUser {
	name: string;
	phone: string;
	email: string;
	address: string;
	position_name: string;
	department: string;
	hire_date: string;
}


function Home() {
	const [users, setUsers] = useState<IUser[] | null>(null);

	async function loadData(inputText?: string) {
		await getData(inputText);
	}

	async function getData(searchText?: string) {
		return await fetch((searchText && searchText !== "") ? "http://localhost:3000/?term=" + searchText : "http://localhost:3000/", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setUsers(data.sort((a: IUser, b: IUser) => a.name.localeCompare(b.name)))
			})
			.catch((error) => console.log(error));
	}

	function onSearchBarChangeHandler(inputText: string) {
		loadData(inputText);
	}

	useEffect(() => {
		loadData();
	}, []);


	return (
		<LayoutMain>
			<SearchBar onTextChange={onSearchBarChangeHandler} />

			<LayoutWrapper className="users-cards-wrapper">
				{users ? <UserCardsList users={users} /> : <></>}
			</LayoutWrapper>

		</LayoutMain>
	);
}

export default Home;
