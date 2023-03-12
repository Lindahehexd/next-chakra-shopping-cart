import { Provider } from "react-redux";
import { store , persistor} from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
