import React from 'react';
// Components
import BootstrapButton from 'react-bootstrap/Button';
// Styles
import s from './Button.module.scss';
// Utils
import classnames from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'success';
	variant?: 'contained' | 'outline';
}

const Button: React.FC<IButtonProps> = ({
	color = 'primary',
	variant = 'contained',
	className,
	children,
	...props
}) => {
	return (
		<BootstrapButton
			className={classnames(s.root, className)}
			data-color={color}
			data-variant={variant}
			{...props}
		>
			{children}
		</BootstrapButton>
	);
};

export default Button;
