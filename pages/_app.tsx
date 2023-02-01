import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import SocketHandler from "../libs/socket";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate
        // loading={<div>Please Wait A momnet</div>}
        persistor={persistor}
      >
        {/* <SessionProvider session={pageProps.session}> */}
        <SocketHandler />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SessionProvider> */}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
