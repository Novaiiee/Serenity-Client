import { SearchIcon } from "@heroicons/react/solid";
import { ChangeEvent, FC } from "react";

export interface SearchBarProps {
	input: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ input, onChange }) => {
	return (
		<div className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg ring-2 ring-gray-300">
			<SearchIcon height={30} width={30} color="gray" />
			<input
				className="outline-none w-full text-black bg-white"
				placeholder="Search"
				value={input}
				onChange={onChange}
			/>
		</div>
	);
};
