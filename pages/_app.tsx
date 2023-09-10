import "../styles/global.css";
import type { AppProps } from "next/app";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={beVietnamPro.className}>
			<Component {...pageProps} />
		</main>
	);
}
