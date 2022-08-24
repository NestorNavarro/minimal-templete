import { m }                  from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled }                             from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// core
import Page                           from "core/Page";
import { MotionContainer, varBounce } from "core/animate";
// assets
import { PageNotFoundIllustration } from "assets";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	display       : "flex",
	minHeight     : "100%",
	alignItems    : "center",
	paddingTop    : theme.spacing(15),
	paddingBottom : theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page404() {
	return (
		<Page title="404 Page Not Found" sx={{ height : 1 }}>
			<RootStyle>
				<Container component={MotionContainer}>
					<Box sx={{ maxWidth : 480, margin : "auto", textAlign : "center" }}>
						<m.div variants={varBounce().in}>
							<Typography variant="h3" paragraph>
								¡Lo sentimos, la página no fue encontrada!
							</Typography>
						</m.div>
						<Typography sx={{ color : "text.secondary" }}>
							Lo sentimos, no pudimos encontrar la página que estabas buscando. ¿Tal vez ingresaste una URL incorrecta? Asegurate que
							este bien escrita.
						</Typography>

						<m.div variants={varBounce().in}>
							<PageNotFoundIllustration sx={{ height : 260, my : { xs : 5, sm : 10 } }} />
						</m.div>

						<Button to="/" size="large" variant="contained" component={RouterLink}>
							Regreas al Inicio
						</Button>
					</Box>
				</Container>
			</RootStyle>
		</Page>
	);
}
