import { Card }         from "@mui/material";
import { isValidArray } from "helpers";

const Section = ({ children }) => {
	return (
		<Card className="w-full max-w-[464px] flex flex-col justify-center m-4 mr-0">
			{
				isValidArray(children) ? children.map(element => element) : children
			}
		</Card>
	);
};

export default Section;
