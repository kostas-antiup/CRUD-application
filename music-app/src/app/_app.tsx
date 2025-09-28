import "../lib/reflect-metadata";
import '../styles/globals.css';
import { DIProvider } from "@/context/RecordContext";


function MyApp({ Component, pageProps }: any) {
  return (
    <DIProvider>
      <Component {...pageProps} />
    </DIProvider>
  );
}

export default MyApp;