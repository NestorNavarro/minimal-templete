import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled }                                        from "@mui/material/styles";
import { Box, Card, Stack, Link, Container, Typography } from "@mui/material";
// routes
import { PATH_AUTH } from "routes/paths";
// hooks
// import useAuth       from "hooks/useAuth";
import useResponsive from "hooks/useResponsive";
// core
import Page          from "core/Page";
import Logo          from "core/Logo";
import { LoginForm } from "components/Login";
// sections
// import { LoginForm } from "components/Login";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("md")] : {
		display : "flex",
	},
}));

const HeaderStyle = styled("header")(({ theme }) => ({
	top                          : 0,
	zIndex                       : 9,
	lineHeight                   : 0,
	width                        : "100%",
	display                      : "flex",
	alignItems                   : "center",
	position                     : "absolute",
	padding                      : theme.spacing(3),
	justifyContent               : "space-between",
	[theme.breakpoints.up("md")] : {
		alignItems : "flex-start",
		padding    : theme.spacing(7, 5, 0, 7),
	},
}));

const SectionStyle = styled(Card)(({ theme }) => ({
	width          : "100%",
	maxWidth       : 464,
	display        : "flex",
	flexDirection  : "column",
	justifyContent : "center",
	margin         : theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
	maxWidth       : 480,
	margin         : "auto",
	display        : "flex",
	minHeight      : "100vh",
	flexDirection  : "column",
	justifyContent : "center",
	padding        : theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {

	const smUp = useResponsive("up", "sm");

	const mdUp = useResponsive("up", "md");

	return (
		<Page title="Login">
			<RootStyle>
				<HeaderStyle>
					<Logo />
					{smUp && (
						<Typography variant="body2" sx={{ mt : { md : -2 } }}>
							¿No tienes una cuenta? {""}
							<Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
								Iniciar
							</Link>
						</Typography>
					)}
				</HeaderStyle>

				{mdUp && (
					<SectionStyle>
						<Typography variant="h3" sx={{ px : 5, mt : 10, mb : 5 }}>
							¡Hola, Bienvenido!
						</Typography>
					</SectionStyle>
				)}

				<Container maxWidth="sm">
					<ContentStyle>
						<Stack direction="row" alignItems="center" sx={{ mb : 5 }}>
							<Box sx={{ flexGrow : 1 }}>
								<Typography variant="h4" gutterBottom>
									Iniciar Sesión
								</Typography>
								<Typography sx={{ color : "text.secondary" }}>Ingresa tus datos.</Typography>
							</Box>

						</Stack>

						<LoginForm />

						{!smUp && (
							<Typography variant="body2" sx={{ mt : { md : -2 } }}>
								¿No tienes una cuenta? {""}
								<Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
									Iniciar
								</Link>
							</Typography>
						)}
					</ContentStyle>
				</Container>
			</RootStyle>
		</Page>
	);
}
