import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layout";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" onError={() => console.error('Google SDK yuklanmadi')}/>
      <Component {...pageProps} />
    </MainLayout>
  );
}
