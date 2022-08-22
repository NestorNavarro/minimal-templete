import { isValidArray } from "helpers";
import React            from "react";

const Header = ({ children }) => (
	<header className="top-0 z-10 leading-[0] w-full flex absolute justify-between md:items-start items-center p-6 md:pt-10 md:pr-5 md:pb-0 md:pl-10 ">
		{
			isValidArray(children) ? children.map(element => element) : children
		}
	</header>
);

export default Header;
