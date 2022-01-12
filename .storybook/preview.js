import "../styles/globals.css";
import Layout from "./Layout";
import { QueryClientProvider , QueryClient} from "react-query";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "fullscreen",
};

export const client = new QueryClient();

export const decorators = [
	(Story) => (
		<QueryClientProvider client={client}>
			<Layout>
				<Story />
			</Layout>
		</QueryClientProvider>
	),
];
