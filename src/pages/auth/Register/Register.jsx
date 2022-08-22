import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Link, Container, Typography } from "@mui/material";
// hooks
import useResponsive from "hooks/useResponsive";
// routes
import { PATH_AUTH } from "routes/paths";
// components
import Page from "core/Page";
import Logo from "core/Logo";
// sections
import { RegisterForm, Header, Section, ContentWrap } from "components/auth";

// ----------------------------------------------------------------------

export default function Register() {

	const smUp = useResponsive("up", "sm");

	const mdUp = useResponsive("up", "md");

	return (
		<Page title="Register">
			<div className="md:flex">
				<Header>
					<Logo />
					{smUp && <AlredyHaveAccount /> }
				</Header>

				{mdUp && (
					<Section>
						<Typography variant="h3" sx={{ px : 5, mt : 10, mb : 5 }}>
							Se más productivo usando la aplicación.
						</Typography>
					</Section>
				)}

				<Container>
					<ContentWrap>
						<Box sx={{ mb : 5, display : "flex", alignItems : "center" }}>
							<Box sx={{ flexGrow : 1 }}>
								<Typography variant="h4" gutterBottom>
									Registro
								</Typography>
								<Typography sx={{ color : "text.secondary" }}>Favor de llenar el siguiente formulario.</Typography>
							</Box>
						</Box>

						<RegisterForm />

						<Typography variant="body2" align="center" sx={{ color : "text.secondary", mt : 3 }}>
							Para el registro, estoy de aceurdo con los{" "}&nbsp;
							<Link underline="always" color="text.primary" href="#">
								Terminos y Condiciones
							</Link>
							y las{" "}&nbsp;
							<Link underline="always" color="text.primary" href="#">
								Politicas de Privacidad
							</Link>
							.
						</Typography>

						{!smUp && <AlredyHaveAccount /> }
					</ContentWrap>
				</Container>
			</div>
		</Page>
	);
}

const AlredyHaveAccount = () => (
	<Typography variant="body2" sx={{ mt : { md : -2 } }}>
		¿Ya tienes una cuenta?{" "}
		<Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
			Iniciar Sesión
		</Link>
	</Typography>
);
