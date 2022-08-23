import { shallowEqual, useSelector } from "react-redux";
// routes
import { Navigate }        from "react-router";
import { ROOTS_DASHBOARD } from "routes/paths";

const GuestRoute = ({
	component : Component,
	...rest
}) => {
	const { loggedIn } = useSelector(state => state.authSlice, shallowEqual);

	return loggedIn
		? <Navigate to={ROOTS_DASHBOARD} replace={true} />
		: <Component {...rest} />;
};

export default GuestRoute;
