import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";

// Cria servidor miragejs se for ambiente de desenvolvimento
if(process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </QueryClientProvider>
    </>
  )

}

