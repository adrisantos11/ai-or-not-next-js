import "../styles/global.css";

interface IApp {
	Component: any;
	pageProps: any;
}

export default function App({ Component, pageProps }: IApp) {
	return <Component {...pageProps} />;
}
