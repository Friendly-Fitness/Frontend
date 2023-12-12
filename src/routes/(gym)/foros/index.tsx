import { $, component$, createContextId, useContextProvider, useSignal, useStore, useStyles$, useTask$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import { listarPublicaciones } from '~/api/usuario.api';
import { images } from '~/assets';
import NewEditPublicacion from '~/components/gym/publicacion/newEditPublicacion';
import { formatoDDMMMMYYYY_PEN } from '~/functions/comunes';
import styles from '../eventos/index.css?inline';
// import MisPublicaciones from '../misPublicaciones';

export const CTX_INDEX_FOROS = createContextId<any>('index_foros__');

export default component$(() => {
  useStyles$(styles);

  //#region DEFINICION_CTX_INDEX_FOROS
  const definicion_CTX_INDEX_FOROS = useStore({
    pP: [],
    graboPublicacion: false,
    mostrarPanelNewEditPublicacion: false,
  });
  useContextProvider(CTX_INDEX_FOROS, definicion_CTX_INDEX_FOROS);
  //#endregion DEFINICION_CTX_INDEX_FOROS

  //#region INICIALIZACION
  const navegarA = useNavigate();
  const ini = useSignal(0);
  const lasPublicaciones = useSignal([]);

  const cargarPublicaciones = $(async () => {
    console.log('FOROS...', ini.value);
    const lasPPP = await listarPublicaciones();
    // alert('cargarPublicaciones');
    console.log('lasPPP', lasPPP);

    lasPublicaciones.value = lasPPP.data;
    console.log('lasPublicaciones.value', lasPublicaciones.value);
  });

  useTask$(async ({ track }) => {
    track(() => ini.value);

    await cargarPublicaciones();
  });

  //#endregion INICIALIZACION

  //#region ACTUALIZAR PUBLICACIONES
  useTask$(({ track }) => {
    track(() => definicion_CTX_INDEX_FOROS.graboPublicacion);
    if (definicion_CTX_INDEX_FOROS.graboPublicacion) {
      cargarPublicaciones();
      definicion_CTX_INDEX_FOROS.graboPublicacion = false;
    }
  });
  //#endregion ACTUALIZAR PUBLICACIONES

  return (
    <>
      <div class="container mt-5">
        <h3 class="mb-4">Foro de Discusión</h3>
        <button
          onClick$={() => {
            definicion_CTX_INDEX_FOROS.mostrarPanelNewEditPublicacion = true;
          }}
        >
          Crear Publicación
        </button>
        <button
          onClick$={() => {
            navegarA('/misPublicaciones');
            // MisPublicaciones(props:{'idCliente':"656cd8d7670cbc46901a1cd4"});
            // <MisPublicaciones idCliente="656cd8d7670cbc46901a1cd4" />;
          }}
        >
          Mis Publicaciones
        </button>
        {/* <Link href="/misPublicaciones" props={{ idCliente: '656cd8d7670cbc46901a1cd4' }}>
        <img src={images.x} />
      </Link> */}
        <div id="seccionPublicaciones" class="card mt-4 publicacion">
          {lasPublicaciones.value.map((pubb: any, index: number) => {
            return (
              <div key={index} id="tarjeta-publicacion" class="card-body">
                <img src={images.perfil} width={100} height={100} class="img-fluid rounded-circle" />
                {/* <label>PPPPPPPPPPPPPPPP</label> */}
                <h5 class="card-title">{pubb.nombre}</h5>
                <h5 class="card-title">{pubb.titulo}</h5>
                <p class="card-text">{'Fecha publicación: ' + formatoDDMMMMYYYY_PEN(pubb.fechaPublicacion)}</p>
                <p class="card-text">{pubb.contenido}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>
        {definicion_CTX_INDEX_FOROS.mostrarPanelNewEditPublicacion && (
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
              publiSelec={definicion_CTX_INDEX_FOROS.pP}
              contexto="foros"
            />
          </div>
        )}
      </div>
    </>
  );
});
