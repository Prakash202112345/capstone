import Header from '@/component/Header';
import '@/styles/globals.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer theme="dark" position="top-center" pauseOnHover style={{ maxWidth: "2000px", width: "auto" }} />
    </SessionProvider>
  )
}
