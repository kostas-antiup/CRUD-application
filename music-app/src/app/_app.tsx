import "../lib/reflect-metadata";
import '../styles/globals.css';
import { DIProvider } from "@/context/RecordContext";


function MyApp({ Component, pageProps }) {
  return (
    <DIProvider>
      <Component {...pageProps} />
    </DIProvider>
  );
}

export default MyApp;