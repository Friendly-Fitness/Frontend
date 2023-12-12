import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
export const CTX_INDEX_ROUTES = createContextId<any>('index_routes____');

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  //#region DEFINICION_CTX_INDEX_ROUTES
  const definicion_CTX_INDEX_ROUTES = useStore({
    estaLogeado: false,
    idUsuario: '',
    nombre: '',
  });
  useContextProvider(CTX_INDEX_ROUTES, definicion_CTX_INDEX_ROUTES);
  //#endregion DEFINICION_CTX_INDEX_ROUTES

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
