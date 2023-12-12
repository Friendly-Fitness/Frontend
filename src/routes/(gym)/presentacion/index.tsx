import { component$, useContext, useSignal, useStyles$ } from '@builder.io/qwik';
import { images } from '~/assets';
import { CTX_INDEX_ROUTES } from '~/root';
import styles from './index.css?inline';
// import { CTX_ROOT } from '~/routes';

import { parametrosGlobales } from '~/routes/layout';

export default component$(() => {
  useStyles$(styles);
  //#region CONTEXTO
  const ctx_index_routes = useContext(CTX_INDEX_ROUTES);
  //#endregion CONTEXTO

  //#region INICIALIZACION
  const ini = useSignal(0);
  parametrosGlobales.dentro = true;
  //#endregion INICIALIZACION

  //#region ARRANQUE
  // useTask$(({ track }) => {
  //   track(() => ini.value);
  //   console.log('######################################first/////////////////////////');
  //   parametrosGlobales.dentro = true;
  // });
  //#endregion ARRANQUE

  return (
    <>
      <header class=" text-white text-center py-5 position-relative" style="width: 100%;">
        <div class="container">
          {/* <!-- Título superpuesto sobre la Imagen --> */}
          <h1 class="display-4 mt-3 position-absolute top-50 start-50 translate-middle text-center titulo">Friendly Fitness</h1>
          {/* <!-- Imagen que ocupa todo el ancho de la pantalla de manera responsiva --> */}
          <img src={images.presentacion} alt="Imagen Fitness" class="img-fluid mx-auto d-block" width={1296} height={864} />
        </div>
      </header>
      <div class="container my-5">
        <div class="row">
          {/* <!-- Párrafo a la Izquierda --> */}
          <div class="col-md-6">
            <p>
              Bienvenido a Friendly Fitness, tu destino para un estilo de vida activo y saludable. Nos dedicamos a brindarte la
              mejor experiencia de fitness, donde la amabilidad y el bienestar se encuentran.
            </p>
            <p>
              Nuestros programas están diseñados para adaptarse a todas las edades y niveles de condición física. Ya sea que estés
              buscando mejorar tu fuerza, perder peso o simplemente disfrutar de un ambiente amigable, ¡estás en el lugar
              correcto!
            </p>
          </div>

          {/* <!-- Imagen a la Derecha --> */}
          <div class="col-md-6">
            <img src={images.presentacion_2} alt="Otra Imagen Fitness" class="img-fluid" width={636} height={357.75} />
          </div>
        </div>
      </div>
    </>
  );
});
