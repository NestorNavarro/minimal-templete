
const path = (root, sublink) =>  `${root}${sublink}`;

export const ROOTS_AUTH      = "/auth";
export const ROOTS_DASHBOARD = "/dashboard";

export const PATH_ERROR_PAGE = {
	page404 : "/404",
	page500 : "/500",
};

export const PATH_AUTH = {
	root          : ROOTS_AUTH,
	login         : path(ROOTS_AUTH, "/login"),
	register      : path(ROOTS_AUTH, "/register"),
	verify        : path(ROOTS_AUTH, "/verify"),
	resetPassword : path(ROOTS_AUTH, "/reset-password"),
};

export const PATH_DASHBOARD = {
	root  : ROOTS_DASHBOARD,
	home  : path(ROOTS_DASHBOARD, "/home"),
	users : {
		root  : path(ROOTS_DASHBOARD, "/user"),
		new   : path(ROOTS_DASHBOARD, "/user/new"),
		cards : path(ROOTS_DASHBOARD, "/user/cards"),
		edit  : (id) => path(ROOTS_DASHBOARD, `/user/edit/${id}`),
	},
};
