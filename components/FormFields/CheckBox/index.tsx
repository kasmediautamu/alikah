import React from 'react';
// Styles
import s from './CheckBox.module.scss';
// Components
import Form from 'react-bootstrap/Form';
// Interfaces
import { FormControlProps } from 'react-bootstrap/FormControl';
// Utils
import classnames from 'classnames';

interface ICheckBoxProps {
	id?: string;
	className?: string;
	formControlProps?: FormControlProps;
	label?: string;
	/**
	 * A message error
	 */
	error?: string;
	type?: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
	id = '',
	className,
	formControlProps,
	label,
	error,
	type
}) => {
	return (
		<Form.Group
			className={classnames(s.root, className)}
			controlId={id}
			data-error={Boolean(error)}
		>
			{/* {label && <Form.Label className={s.label}>{label}</Form.Label>} */}

			{/* <Form.Control
				{...formControlProps}
				type = 'checkbox'
				className={classnames(s.input, formControlProps ? formControlProps.className : '')}
			/> */}
             <Form.Check type="checkbox" label={label} />

			{error && <Form.Text className={s.errorMessage}>{error}</Form.Text>}
		</Form.Group>
	);
};

export default CheckBox;
