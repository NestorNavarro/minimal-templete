// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import Settings             from "./core/settings";
import RtlLayout            from "./core/RtlLayout";
import ScrollToTop          from "./core/ScrollToTop";
import { ProgressBarStyle } from "./core/ProgressBar";
import ThemeColorPresets    from "./core/ThemeColorPresets";
import MotionLazyContainer  from "./core/animate/MotionLazyContainer";

// ----------------------------------------------------------------------

export default function App() {
	return (
		<ThemeProvider>
			<ThemeColorPresets>
				<RtlLayout>
					<MotionLazyContainer>
						<ProgressBarStyle />

						<Settings />
						<ScrollToTop />
						<Router />
					</MotionLazyContainer>
				</RtlLayout>
			</ThemeColorPresets>
		</ThemeProvider>
	);
}
