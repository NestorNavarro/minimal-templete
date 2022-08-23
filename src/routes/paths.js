
const path = (root, sublink) =>  `${root}${sublink}`;

const ROOTS_AUTH      = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

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
