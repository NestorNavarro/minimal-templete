import { shallowEqual, useSelector } from "react-redux";
// routes
import { Navigate }   from "react-router";
import { ROOTS_AUTH } from "routes/paths";

const PrivateRoute = ({
	component : Component,
	...rest
}) => {
	const { loggedIn } = useSelector(state => state.authSlice, shallowEqual);

	return loggedIn
		? <Component {...rest} />
		: <Navigate to={ROOTS_AUTH} replace={true} />;
};

export default PrivateRoute;
