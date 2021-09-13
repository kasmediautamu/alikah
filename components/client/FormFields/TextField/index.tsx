import React from 'react';
// Styles
import s from './TextField.module.scss';
// Components
import Form from 'react-bootstrap/Form';
// Interfaces
import { FormControlProps } from 'react-bootstrap/FormControl';
// Utils
import classnames from 'classnames';

interface ITextFieldProps {
	id?: string;
	className?: string;
	formControlProps?: FormControlProps;
	label?: string;
  fieldname?: string
	/**
	 * A message error
	 */
	error?: string;
	type?: string;
  changefunction:any
}

const TextField: React.FC<ITextFieldProps> = ({
	id = '',
	className,
	formControlProps,
	label,
	error,
	type,
  fieldname,
  changefunction
}) => {
	return (
		<Form.Group
			className={classnames(s.root, className)}
			controlId={id}
			data-error={Boolean(error)}
		>
			{label && <Form.Label className={s.label}>{label}</Form.Label>}

			<Form.Control
				{...formControlProps}
				type = {type}
				className={classnames(s.input, formControlProps ? formControlProps.className : '')}
        name = {fieldname}
        onChange ={changefunction}
			/>

			{error && <Form.Text className={s.errorMessage}>{error}</Form.Text>}
		</Form.Group>
	);
};

export default TextField;
