// @mui
import { Container, Typography } from "@mui/material";
// hooks
import useSettings from "hooks/useSettings";
// components
import Page from "core/Page";
// ----------------------------------------------------------------------

export default function PageFour() {
	const { themeStretch } = useSettings();

	return (
		<Page title="Profile">
			<Container maxWidth={themeStretch ? false : "xl"}>
				<Typography variant="h3" component="h1" paragraph>
					Profile
				</Typography>
			</Container>
		</Page>
	);
}
