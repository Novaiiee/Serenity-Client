import { Menu } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/solid";
import { FC } from "react";

interface DropdownProps {}

export const Dropdown: FC<DropdownProps> = ({}) => {
	return (
			<div className="z-30 text-red-500">
		<Menu>
				<Menu.Button>
					<CogIcon height={30} />
				</Menu.Button>
				<Menu.Items className="items-end flex flex-col">
					<Menu.Item>
						{({ active }) => (
							<a className={`${active && "bg-blue-500"}`} href="/account-settings">
								Account settings
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a className={`${active && "bg-blue-500"}`} href="/account-settings">
								Documentation
							</a>
						)}
					</Menu.Item>
				</Menu.Items>
		</Menu>
			</div>
	);
};
