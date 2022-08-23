import { shallowEqual, useSelector } from "react-redux";
import { Navigate }                  from "react-router";

const GuestRoute = ({
	component : Component,
	...rest
}) => {
	const { loggedIn } = useSelector(state => state.authSlice, shallowEqual);

	return loggedIn
		? <Navigate to="/dashboard" replace={true} />
		: <Component {...rest} />;
};

export default GuestRoute;
