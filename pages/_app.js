import '../styles.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
