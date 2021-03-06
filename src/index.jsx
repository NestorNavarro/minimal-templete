// scroll bar
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM           from "react-dom";
import { Provider }       from "react-redux";
import { BrowserRouter }  from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// contexts
import store                      from "./store";
import { SettingsProvider }       from "./contexts/SettingsContext";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";
//
import App from "./App";
import "./index.css";

// ----------------------------------------------------------------------

ReactDOM.render(
	<Provider store={store}>
		<HelmetProvider>
			<SettingsProvider>
				<CollapseDrawerProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</CollapseDrawerProvider>
			</SettingsProvider>
		</HelmetProvider>
	</Provider>,
	document.getElementById("root")
);
