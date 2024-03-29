import type { AppProps } from "next/app";
import Script from "next/script";

import "../sass/App.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Script
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4288512793572771"
				crossOrigin="anonymous"
			/>
		</>
	);
}
export default MyApp;
