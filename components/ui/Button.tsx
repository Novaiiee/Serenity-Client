import classnames from "clsx";
import { FC, ReactNode } from "react";

export interface ButtonProps {
	color?: string;
	children: ReactNode;
	px?: number;
	py?: number;
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, color, px, py, className, type, onClick }) => {
	const normalColor = color === "black" || color == "white" ? color : color;

	const styles = classnames(
		`ring-2 ring-${normalColor} rounded-md bg-${normalColor} text-white px-${px ?? "4"} py-${
			py ?? "3"
		} shadow-md font-medium`,
		`transition ease-in-out duration-125 hover:bg-transparent hover:text-${normalColor}`,
		className
	);

	return (
		<button className={styles} type={type} onClick={onClick}>
			{children}
		</button>
	);
};
