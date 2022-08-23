import { Suspense, lazy }                           from "react";
import { Navigate, useRoutes, useLocation, Outlet } from "react-router-dom";
// layouts
import DashboardLayout from "layouts/dashboard";
import LogoOnlyLayout  from "layouts/LogoOnlyLayout";
// components
import LoadingScreen from "core/LoadingScreen";
import GuestGuard    from "components/global/GuestRoute";
import PrivateRoute  from "components/global/PrivateRoute";

// ----------------------------------------------------------------------
const Loadable = (Component) => (props) => {
	const { pathname } = useLocation();
	return (
		<Suspense fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}>
			<Component {...props} />
		</Suspense>
	);
};

//Auth
const Login         = Loadable(lazy(() => import("pages/auth/Login")));
const Register      = Loadable(lazy(() => import("pages/auth/Register")));
const ResetPassword = Loadable(lazy(() => import("pages/auth/ResetPassword")));
const VerifyCode    = Loadable(lazy(() => import("pages/auth/VerifyCode")));
// Dashboard
const Home = Loadable(lazy(() => import("pages/dashboard/Home")));
//users
const UserCards   = Loadable(lazy(() => import("pages/dashboard/UserCards")));
const UserCreate  = Loadable(lazy(() => import("pages/dashboard/UserCreate")));
//Erros
const NotFound = Loadable(lazy(() => import("pages/Page404")));

export default function Router() {
	return useRoutes([
		//Auth Routes
		{
			path     : "auth",
			element  : <GuestGuard component={Outlet} />,
			children : [
				{
					index   : true,
					element : <Navigate to="/auth/login" replace />,
				},
				{
					path    : "login",
					element : <Login />,
				},
				{
					path    : "register",
					element : <Register />,
				},
				{
					path    : "reset-password",
					element : <ResetPassword />,
				},
				{
					path    : "verify",
					element : <GuestGuard component={VerifyCode} />,
				},
				{ path : "*", element : <Navigate to="/auth/login" replace />},
			],
		},
		//Auth DashBoard
		{
			path     : "dashboard",
			element  : <PrivateRoute component={DashboardLayout} />,
			children : [
				{ element : <Navigate to="/dashboard/home" replace />, index : true },
				{ path : "home", element : <Home /> },
				{
					path     : "user",
					children : [
						{ element : <Navigate to="/dashboard/user/cards" replace />, index : true },
						{ path : "cards", element : <UserCards /> },
						{ path : "new", element : <UserCreate /> },
						{ path : "edit/:id", element : <UserCreate /> },
					],
				},
			],
		},
		//Redirect
		{
			path    : "/",
			element : <Navigate to={"dashboard/home"} replace />,
		},
		{
			path     : "*",
			element  : <LogoOnlyLayout />,
			children : [
				{ path : "404", element : <NotFound /> },
				{ path : "*", element : <Navigate to="/404" replace /> },
			],
		},
	]);
}
