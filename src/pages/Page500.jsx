import { Link as RouterLink } from "react-router-dom";
import { styled }             from "@mui/material/styles";
// @mui
import { Box, Button, Typography, Container } from "@mui/material";
// core
import Page from "core/Page";
// assets
import { SeverErrorIllustration } from "assets";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
	display       : "flex",
	height        : "100%",
	alignItems    : "center",
	paddingTop    : theme.spacing(15),
	paddingBottom : theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page500() {
	return (
		<Page title="500 Internal Server Error" sx={{ height : 1 }}>
			<RootStyle>
				<Container>
					<Box sx={{ maxWidth : 480, margin : "auto", textAlign : "center" }}>
						<Typography variant="h3" paragraph>
							500 Error Interno del Servidor
						</Typography>
						<Typography sx={{ color : "text.secondary" }}>Hubo un errro, favor de intentarlo de nuevo.</Typography>

						<SeverErrorIllustration sx={{ height : 260, my : { xs : 5, sm : 10 } }} />

						<Button to="/" size="large" variant="contained" component={RouterLink}>
							Regreas al Inicio
						</Button>
					</Box>
				</Container>
			</RootStyle>
		</Page>
	);
}
