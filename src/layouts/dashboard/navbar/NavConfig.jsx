// components
import { PATH_DASHBOARD } from "routes/paths";
import SvgIconStyle       from "../../../core/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width : 1, height : 1 }} />;

const ICONS = {
	user      : getIcon("ic_user"),
	ecommerce : getIcon("ic_ecommerce"),
	analytics : getIcon("ic_analytics"),
	dashboard : getIcon("ic_dashboard"),
};

const sidebarConfig = [
	// GENERAL
	// ----------------------------------------------------------------------
	{
		items : [
			{ title : "Inicio", path : "/dashboard/home", icon : ICONS.dashboard },
		],
	},

	// MANAGEMENT
	// ----------------------------------------------------------------------
	{
		subheader : "management",
		items     : [
			{
				title    : "user",
				path     : "/dashboard/user",
				icon     : ICONS.user,
				children : [
					{ title : "Perfil", path : PATH_DASHBOARD.users.profile },
					{ title : "Cartas", path : PATH_DASHBOARD.users.cards },
					{ title : "Nuevo",  path : PATH_DASHBOARD.users.new },
				],
			},
		],
	},
];

export default sidebarConfig;
