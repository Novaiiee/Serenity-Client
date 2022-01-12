import { store } from "@lib/store/globalStore";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
	return (
		<Provider store={store}>
			<div className="font-poppins">
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}

export default MyApp;
