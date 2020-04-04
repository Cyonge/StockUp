import 'bootstrap/dist/css/bootstrap.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-brands-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
export default function MyApp({ Component, pageProps }) {
  // library.add(fas, faUserCircle)
    return (
    <Component {...pageProps} />)
  }