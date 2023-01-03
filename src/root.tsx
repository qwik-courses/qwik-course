import { component$, createContext, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';
import { Course } from "~/models/course";
import { APP_STATE_CONTEXT_ID, AppState } from "~/store/app-state";


export const appContext = createContext<AppState>(APP_STATE_CONTEXT_ID);

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  const store = useStore<AppState>({
      courses: []
    },
    {
      recursive: true
    });

  useContextProvider(
    appContext,
    store
  );

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
