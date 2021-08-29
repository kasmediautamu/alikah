import React from 'react';
// Styles
import s from './SearchField.module.scss';
// Components
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl';

const SearchField: React.FC<FormControlProps> = (props) => {
	return (
		<div className={s.root}>
			<img className={s.icon} src='./icons/search-icon.svg' alt='search' />

			<FormControl className={s.input} type='text' placeholder='Search by Term e.g car' {...props} />
		</div>
	);
};

export default SearchField;
