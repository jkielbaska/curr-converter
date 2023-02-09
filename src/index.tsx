import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./routes/Home";
import { Error } from "./routes/Error";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./theme/GlobalStyle";
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
} from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { ChooseCurrencies } from "./routes/ChooseCurrencies";
import { Converted } from "./routes/Converted";
import { ColorModeContextProvider } from "./theme/ColorModeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  PersistQueryClientProvider,
  removeOldestQuery,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { Routes } from "./routes/Routes";
// import { compress, decompress } from "lz-string";
import { currenciesLoader } from "./routes/ChooseCurrencies";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  retry: removeOldestQuery,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,

    children: [
      {
        path: Routes.CHOOSE_CURRENCIES,
        element: <ChooseCurrencies />,
        loader: () => {
          currenciesLoader(queryClient);
        },
      },
      { path: Routes.CONVERTED, element: <Converted /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyle />
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </PersistQueryClientProvider>
    </ColorModeContextProvider>
  </React.StrictMode>
);

reportWebVitals();

//funkcja "lazy" w react
//"suspense" react
