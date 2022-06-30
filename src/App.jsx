import { useLocation } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import { persistor }        from "./store";
import LoadingScreen        from "core/LoadingScreen";
import Settings             from "./core/settings";
import RtlLayout            from "./core/RtlLayout";
import ScrollToTop          from "./core/ScrollToTop";
import { ProgressBarStyle } from "./core/ProgressBar";
import ThemeColorPresets    from "./core/ThemeColorPresets";
import MotionLazyContainer  from "./core/animate/MotionLazyContainer";

// ----------------------------------------------------------------------

export default function App() {

	const { pathname } = useLocation();

	return (
		<PersistGate loading={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />} persistor={persistor}>
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
		</PersistGate>
	);
}
