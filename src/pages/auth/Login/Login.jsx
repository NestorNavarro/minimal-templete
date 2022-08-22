import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Stack, Link, Container, Typography } from "@mui/material";
// routes
import { PATH_AUTH } from "routes/paths";
import useResponsive from "hooks/useResponsive";
// core
import Page from "core/Page";
import Logo from "core/Logo";
// components
import { ContentWrap, Header, LoginForm, Section } from "components/auth";

// ----------------------------------------------------------------------

export default function Login() {

	const smUp = useResponsive("up", "sm");

	const mdUp = useResponsive("up", "md");

	return (
		<Page title="Login">
			<div className="md:flex">
				<Header>
					<Logo />
					{smUp && (
						<Typography variant="body2" sx={{ mt : { md : -2 } }}>
							¿No tienes una cuenta? {""}
							<Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
								Iniciar
							</Link>
						</Typography>
					)}
				</Header>

				{mdUp && (
					<Section>
						<Typography variant="h3" sx={{ px : 5, mt : 10, mb : 5 }}>
							¡Hola, Bienvenido!
						</Typography>
					</Section>
				)}

				<Container maxWidth="sm">
					<ContentWrap>
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
					</ContentWrap>
				</Container>
			</div>
		</Page>
	);
}
