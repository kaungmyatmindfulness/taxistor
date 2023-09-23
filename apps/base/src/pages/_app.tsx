import type { AppProps } from "next/app";
import Head from "next/head";

import "ui/styles.css";
import "../styles/global.css";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Siam Taxistor</title>
				<meta
					content="minimum-scale=1, initial-scale=1, width=device-width"
					name="viewport"
				/>
				<link href="/favicon.svg" rel="icon" />
			</Head>

			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
