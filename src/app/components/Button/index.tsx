import * as React from "react";
import "./index.scss";

export interface IButton {
	id: string;
	text: string;
	type: "primary" | "secondary" | "error";
	inline?: boolean;
	onClick?: () => void;
}

const Button = (props: IButton) => {
	const onClick = () => {
		props.onClick && props.onClick();
	};
	return (
		<button
			className={`c-button c-button--${props.type} ${
				props.inline ? "c-button--inline" : ""
			}`}
			id={props.id}
			onClick={onClick}
		>
			{props.text}
		</button>
	);
};

export default Button;
