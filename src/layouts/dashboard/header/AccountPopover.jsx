import { useState } from "react";
// @mui
import { alpha }                                             from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem, Avatar } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "routes/paths";
// core
import MenuPopover                   from "core/MenuPopover";
import { IconButtonAnimate }         from "core/animate";
import { shallowEqual, useSelector } from "react-redux";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
	{
		label  : "Inicio",
		linkTo : PATH_DASHBOARD.home,
	},
];

// ----------------------------------------------------------------------

export default function AccountPopover() {

	const { name, email } = useSelector( state => state.authSlice.user, shallowEqual);

	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	return (
		<>
			<IconButtonAnimate
				onClick={handleOpen}
				sx={{
					p : 0,
					...(open && {
						"&:before" : {
							zIndex       : 1,
							content      : "''",
							width        : "100%",
							height       : "100%",
							borderRadius : "50%",
							position     : "absolute",
							bgcolor      : (theme) => alpha(theme.palette.grey[900], 0.8),
						},
					}),
				}}
			>
				<Avatar src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg" alt={name} />
			</IconButtonAnimate>

			<MenuPopover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				sx={{
					p                     : 0,
					mt                    : 1.5,
					ml                    : 0.75,
					"& .MuiMenuItem-root" : {
						typography   : "body2",
						borderRadius : 0.75,
					},
				}}
			>
				<Box sx={{ my : 1.5, px : 2.5 }}>
					<Typography variant="subtitle2" noWrap>
						{name}
					</Typography>
					<Typography variant="body2" sx={{ color : "text.secondary" }} noWrap>
						{email}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle : "dashed" }} />

				<Stack sx={{ p : 1 }}>
					{MENU_OPTIONS.map((option) => (
						<MenuItem key={option.label} to={option.linkTo} onClick={handleClose}>
							{option.label}
						</MenuItem>
					))}
				</Stack>

				<Divider sx={{ borderStyle : "dashed" }} />

				<MenuItem sx={{ m : 1 }}>Cerrar Sesión</MenuItem>
			</MenuPopover>
		</>
	);
}
