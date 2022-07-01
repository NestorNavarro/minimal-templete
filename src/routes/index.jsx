import { Suspense, lazy }                   from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout  from "../layouts/LogoOnlyLayout";
// components
import LoadingScreen from "../core/LoadingScreen";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { pathname } = useLocation();

	return (
		<Suspense fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}>
			<Component {...props} />
		</Suspense>
	);
};

//Auth
const Login = Loadable(lazy(() => import("pages/auth/Login")));

// Dashboard
const Home   = Loadable(lazy(() => import("pages/dashboard/Home")));

//users
const UserProfile  = Loadable(lazy(() => import("pages/dashboard/UserProfile")));
const UserCards    = Loadable(lazy(() => import("pages/dashboard/UserCards")));
const UserCreate   = Loadable(lazy(() => import("pages/dashboard/UserCreate")));

//Erros
const NotFound  = Loadable(lazy(() => import("pages/Page404")));


export default function Router() {
	return useRoutes([
		//Auth Routes
		{
			path     : "auth",
			// element  : <Navigate to={"auth/login"} replace />,
			children : [
			  {
					path    : "login",
					element : (
						// <GuestGuard>
						<Login />
						// </GuestGuard>
					),
			  },
			//   {
			// 		path    : "register",
			// 		element : (
			// 			<GuestGuard>
			// 				<Register />
			// 			</GuestGuard>
			// 		),
			//   },
			//   { path : "reset-password", element : <ResetPassword /> },
			//   { path : "verify", element : <VerifyCode /> },
			],
		},
		//Auth DashBoard
		{
			path     : "dashboard",
			element  : <DashboardLayout />,
			children : [
				{ element : <Navigate to="/dashboard/home" replace />, index : true },
				{ path : "home", element : <Home /> },
				{
					path     : "user",
					children : [
						{ element : <Navigate to="/dashboard/user/profile" replace />, index : true },
						{ path : "profile", element : <UserProfile /> },
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
		{ path : "*", element : <Navigate to="/404" replace /> },
	]);
}
