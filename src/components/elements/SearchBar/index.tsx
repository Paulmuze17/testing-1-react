import { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
	onTextChange: (inputText: string) => void;
}

function SearchBar({onTextChange}: SearchBarProps) {
	const [inputText, setInputText] = useState('');
	const [firstLoad, setFirstLoad] = useState(true);
	const [debouncedValue] = useDebounce(inputText, 850);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputText(value);
	}

	useEffect(()=>{
		setFirstLoad(false)
	}, [])
	useEffect(()=>{
		if(!firstLoad)
			onTextChange(debouncedValue);
	}, [debouncedValue])


  return (
    <div className={`home-page__search-bar ${styles["search-bar-wrapper"]}`}>
        <input value={inputText} onChange={handleInputChange} className={styles["search-bar__input"]} type="text" name="" id="" />
        <span  className={styles["search-bar__icon"]} />
    </div>
  );
}

export default SearchBar
