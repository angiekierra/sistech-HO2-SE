import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google";

const raleway = Raleway({
  subsets: ['latin'],
  weight : ['400','500','600','700','800'],
  variable: '--font-raleway',
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={` ${raleway.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
