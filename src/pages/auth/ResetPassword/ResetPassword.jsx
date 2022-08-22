import { useState }           from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Button, Container, Typography } from "@mui/material";
// layouts
import LogoOnlyLayout from "layouts/LogoOnlyLayout";
// routes
import { PATH_AUTH } from "routes/paths";
// core
import Page from "core/Page";
// components
import { ResetPasswordForm } from "components/auth";
// assets
import { SentIcon } from "assets";

// ----------------------------------------------------------------------


export default function ResetPassword() {

	const [sent, setSent]   = useState(false);
	const [email, setEmail] = useState("");

	const handleSetSent = () => setSent(true);

	const handleSetEmail = (email) => setEmail(email);

	return (
		<Page title="Reset Password" sx={{ height : 1 }}>
			<div className="flex min-h-full items-center justify-center px-6">
				<LogoOnlyLayout />

				<Container>
					<Box sx={{ maxWidth : 480, mx : "auto" }}>
						{!sent ? (
							<>
								<Typography variant="h3" paragraph>
									¿Olvidaste tu contraseña?
								</Typography>
								<Typography sx={{ color : "text.secondary", mb : 5 }}>
									Por favor ingresa tu correo electrónico asiciado con tu cuenta y Te enviaremos un enlace para restablecer tu contraseña.
								</Typography>

								<ResetPasswordForm onSent={handleSetSent} onGetEmail={handleSetEmail} />

								<Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt : 1 }}>
									Volver
								</Button>
							</>
						) : (
							<Box sx={{ textAlign : "center" }}>
								<SentIcon sx={{ mb : 5, mx : "auto", height : 160 }} />

								<Typography variant="h3" gutterBottom>
									La petción se envió con exito
								</Typography>
								<Typography>
									Hemos enviado un correo de confirmación a &nbsp;
									<strong>{email}</strong>
									<br />
									Por favor revisa tu correo electrónico.
								</Typography>

								<Button size="large" variant="contained" component={RouterLink} to={PATH_AUTH.login} sx={{ mt : 5 }}>
									Volver
								</Button>
							</Box>
						)}
					</Box>
				</Container>
			</div>
		</Page>
	);
}
