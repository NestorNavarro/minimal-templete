import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled }                             from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";
// layouts
import LogoOnlyLayout from "layouts/LogoOnlyLayout";
// routes
import { PATH_AUTH } from "routes/paths";
// core
import Page    from "core/Page";
import Iconify from "core/Iconify";
// components
// import { VerifyCodeForm } from "../../sections/auth/verify-code";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	display    : "flex",
	height     : "100%",
	alignItems : "center",
	padding    : theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
	return (
		<Page title="Verify" sx={{ height : 1 }}>
			<RootStyle>
				<LogoOnlyLayout />

				<Container>
					<Box sx={{ maxWidth : 480, mx : "auto" }}>
						<Button
							size="small"
							component={RouterLink}
							to={PATH_AUTH.login}
							startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} width={20} height={20} />}
							sx={{ mb : 3 }}
						>
							Volver
						</Button>

						<Typography variant="h3" paragraph>
							¡Favor de revisar tu correo electrónico!
						</Typography>
						<Typography sx={{ color : "text.secondary" }}>
							Hemo enviado un código de confirmación de 6 dígitos a {<b>{"acb@domain"}</b>}, favor de introducir el código para poder hacer la validación.
						</Typography>

						<Box sx={{ mt : 5, mb : 3 }}>
							{/* <VerifyCodeForm /> */}
						</Box>

						<Typography variant="body2" align="center">
							¿No tienes recibiste un código? &nbsp;
							<Button size="small" onClick={() => {}}>
								Reenviar
							</Button>
						</Typography>
					</Box>
				</Container>
			</RootStyle>
		</Page>
	);
}
