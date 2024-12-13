import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Add Bootstrap (optional)
import Header from "../components/Header"; // Header component
import Footer from "../components/footer"; // Footer component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
