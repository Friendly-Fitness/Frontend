import { $, component$, createContextId, useContextProvider, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { listarMisPublicaciones } from '~/api/usuario.api';
import { images } from '~/assets';
import NewEditPublicacion from '~/components/gym/publicacion/newEditPublicacion';
import { formatoDDMMMMYYYY_PEN } from '~/functions/comunes';

export const CTX_MIS_PUBLICACIONES = createContextId<any>('mis_publicaciones___');

export default component$((props: { idCliente: string }) => {
  //#region DEFINICION_CTX_MIS_PUBLICACIONES
  const definicion_CTX_MIS_PUBLICACIONES = useStore({
    miP: [],
    graboPublicacion: false,
    mostrarPanelNewEditPublicacion: false,
  });
  useContextProvider(CTX_MIS_PUBLICACIONES, definicion_CTX_MIS_PUBLICACIONES);
  //#endregion DEFINICION_CTX_MIS_PUBLICACIONES

  //#region INICIALIZACION
  const ini = useSignal(0);
  const misPublicaciones = useSignal([]);

  const cargarMisPublicaciones = $(async () => {
    console.log('props.idCliente', props.idCliente);
    const misPLE = await listarMisPublicaciones({
      idCliente: sessionStorage.getItem('ID'), // '656cd8d7670cbc46901a1cd4', // props.idCliente,
    });
    console.log('misPLE', misPLE);

    misPublicaciones.value = misPLE.data;
    console.log('misPublicaciones.value', misPublicaciones.value);
  });

  useTask$(async ({ track }) => {
    track(() => ini.value);

    await cargarMisPublicaciones();
  });
  //#endregion INICIALIZACION

  //#region ACTUALIZAR MIS PUBLICACIONES
  useTask$(async ({ track }) => {
    track(() => definicion_CTX_MIS_PUBLICACIONES.graboPublicacion);

    if (definicion_CTX_MIS_PUBLICACIONES.graboPublicacion) {
      await cargarMisPublicaciones();
      definicion_CTX_MIS_PUBLICACIONES.graboPublicacion = false;
    }
  });
  //#endregion ACTUALIZAR MIS PUBLICACIONES

  return (
    <>
      <div class="container mt-5">
        <h3>Mis Publicaciones</h3>
        <div id="seccionMisPublicaciones" class="card mt-4 publicacion">
          {misPublicaciones.value.map((plus: any, index: number) => {
            return (
              <div key={index} id="tarjeta-publicacion" class="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img src={images.perfil} width={100} height={100} class="img-fluid rounded-circle" />
                  <img
                    src={images.tresPuntos}
                    width={16}
                    height={16}
                    onClick$={() => {
                      definicion_CTX_MIS_PUBLICACIONES.miP = plus;
                      definicion_CTX_MIS_PUBLICACIONES.mostrarPanelNewEditPublicacion = true;
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>

                <h5 class="card-title">{plus.nombre}</h5>
                <h5 class="card-title">{plus.titulo}</h5>
                <p class="card-text">{'Fecha publicación: ' + formatoDDMMMMYYYY_PEN(plus.fechaPublicacion)}</p>
                <p class="card-text">{plus.contenido}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>
        {definicion_CTX_MIS_PUBLICACIONES.mostrarPanelNewEditPublicacion && (
          <div
            class="modal"
            style={{
              display: 'block',
              position: 'fixed',
              zIndex: 1,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              background: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <NewEditPublicacion
              idCliente={`${sessionStorage.getItem('ID')}`}
              nombre={`${sessionStorage.getItem('NOMBRE')}`}
              publiSelec={definicion_CTX_MIS_PUBLICACIONES.miP}
              contexto="mis_publicaciones"
            />
          </div>
        )}
      </div>
    </>
  );
});
