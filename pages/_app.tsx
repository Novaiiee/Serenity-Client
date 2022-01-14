import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

export const client = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
	return (
		<QueryClientProvider client={client}>
			<div className="font-poppins">
				<Component {...pageProps} />
			</div>
		</QueryClientProvider>
	);
}

export default MyApp;
