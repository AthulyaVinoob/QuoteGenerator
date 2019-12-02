import React from 'react';

const Button = ({buttonText, clickHandler}) =>(
	<button onClick={clickHandler}>{buttonText}</button>
);

export default Button;