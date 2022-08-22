import { isValidArray } from "helpers";
import React            from "react";

const index = ({ children }) => (
	<div className="max-w-[490px] m-auto flex min-h-screen flex-col justify-center px-5">
		{
			isValidArray(children) ? children.map(element => element) : children
		}
	</div>
);

export default index;
