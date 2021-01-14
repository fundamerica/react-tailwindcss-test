import React from 'react';
import { Submit, Login } from './styles/Buttons';

const Button = ({ children, ...restProps }) => {
	return <></>;
};

Button.Submit = function SubmitButton({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

Button.Login = function LoginButton({ children, ...restProps }) {
	return <Login {...restProps}>{children}</Login>;
};

export default Button;
