const { ROLES } = require("helpers/ac");

const ALL_ROLES = Object.values(ROLES).map(role => role);

export const USERS_PERMISSION = {
	cards : ALL_ROLES,
	new   : [ROLES.administrator],
	edit  : ALL_ROLES.filter(role => role !== "cliente"),
};
