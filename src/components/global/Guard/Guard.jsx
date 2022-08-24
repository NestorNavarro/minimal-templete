import PropTypes                     from "prop-types";
import { shallowEqual, useSelector } from "react-redux";
//acces
import { ac, isValidArray } from "helpers";
import { Navigate }         from "react-router";
import { PATH_ERROR_PAGE }  from "routes/paths";


const Guard = ({
	children,
	attribute,
	permission,
	handlerError,
}) => {

	const { role } = useSelector( state => state.authSlice.user, shallowEqual);

	const isPermissionValid = () => {
		const sources =  permission.split(":");

		if (!isValidArray(sources, 1)) {
			console.error("Error on [Guard]. Your permission formatt is invalid. Example ['foo:create']");
			return false;
		}
		return true;
	};

	const hasPermission = () => {
		try {
			if (!isPermissionValid()) {
				return;
			}

			const [ resource, action  ] = permission.split(":");

	        const ac_permission = ac.can(role).resource(resource)[action]();

			return ac_permission?.granted;

		} catch (error) {
			console.error("Error on [Guard]: ", error);
			return false;
		}
	};

	if (!hasPermission()) {
		return handlerError ?
			<>{handlerError}</>
			:
			<Navigate to={PATH_ERROR_PAGE.page500} />;
	}

	return (<>{children}</>);
};

Guard.propTypes = {
	attribute    : PropTypes.string,
	handlerError : PropTypes.element,
	permission   : PropTypes.string.isRequired,
};


export default Guard;
