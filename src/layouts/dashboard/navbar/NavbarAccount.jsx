import PropTypes from "prop-types";
// @mui
import { styled }                        from "@mui/material/styles";
import { Box, Link, Typography, Avatar } from "@mui/material";
import { shallowEqual, useSelector }     from "react-redux";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	display         : "flex",
	alignItems      : "center",
	padding         : theme.spacing(2, 2.5),
	borderRadius    : Number(theme.shape.borderRadius) * 1.5,
	backgroundColor : theme.palette.grey[500_12],
	transition      : theme.transitions.create("opacity", {
		duration : theme.transitions.duration.shorter,
	}),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
	isCollapse : PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }) {

	const { name, role } = useSelector( state => state.authSlice.user, shallowEqual);

	return (
		<Link underline="none" color="inherit">
			<RootStyle
				sx={{
					...(isCollapse && {
						bgcolor : "transparent",
					}),
				}}
			>
				<Avatar src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg" alt="Rayan Moran" />

				<Box
					sx={{
						ml         : 2,
						transition : (theme) =>
							theme.transitions.create("width", {
								duration : theme.transitions.duration.shorter,
							}),
						...(isCollapse && {
							ml    : 0,
							width : 0,
						}),
					}}
				>
					<Typography variant="subtitle2" noWrap>
						{name}
					</Typography>
					<Typography variant="body2" noWrap sx={{ color : "text.secondary" }}>
						{role}
					</Typography>
				</Box>
			</RootStyle>
		</Link>
	);
}
