import React from 'react';
import { Submit, Login, Reset } from './styles/Buttons';

const Button = ({ children, ...restProps }) => {
	return <></>;
};

Button.Submit = function SubmitButton({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

Button.Login = function LoginButton({ children, ...restProps }) {
	return <Login {...restProps}>{children}</Login>;
};

Button.Reset = function ResetButton({ children, ...restProps }) {
	return <Reset {...restProps}>{children}</Reset>;
};

export default Button;
