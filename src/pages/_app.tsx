import "../styles/global.scss";
import { Analytics } from "@vercel/analytics/react";
import { Be_Vietnam_Pro } from "next/font/google";
import Head from "next/head";

// https://shipsaas.com/blog/how-to-add-font-in-nextjs
const beVietnamPro = Be_Vietnam_Pro({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export default function App({ Component, pageProps }: any) {
	return (
		<main className={beVietnamPro.className}>
			<Component {...pageProps} />
			<Analytics />
		</main>
		// <>
		// 	<style jsx global>{`
		// 		html {
		// 			font-family: ${beVietnamPro.style.fontFamily};
		// 		}
		// 	`}</style>
		// 	<Component {...pageProps} />
		// </>
	);
}
