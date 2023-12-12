import { $, component$, createContextId, useContextProvider, useSignal, useStore, useStyles$, useTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { listarEventos } from '~/api/usuario.api';
import { images } from '~/assets';
import NewEditEvento from '~/components/gym/evento/newEditEvento';
import { formatoDDMMMMYYYY_PEN } from '~/functions/comunes';
import styles from './index.css?inline';

export const CTX_INDEX_EVENTO = createContextId<any>('index_evento');

export default component$(() => {
  useStyles$(styles);
  //#region DEFINIR CTX_INDEX_EVENTO
  const definicion_CTX_INDEX_EVENTO = useStore({
    eE: [],
    graboEvento: false,
    mostrarPanelNewEditEvento: false,
    // losEventos: [],
  });
  useContextProvider(CTX_INDEX_EVENTO, definicion_CTX_INDEX_EVENTO);
  //#endregion DEFINIR CTX_INDEX_EVENTO

  //#region INICIALIZACION
  const navegarA = useNavigate();
  const ini = useSignal(0);
  // console.log('ini.value ini.value ini.value   ▒', ini.value);
  // const losEventos = useSignal([]);
  const losEventos = useSignal([]);
  //#endregion INICIALIZACION

  //#region CARGAR EVENTOS
  const cargarEventos = $(async () => {
    console.log('EVENTOS...', ini.value);
    const cEEE = await listarEventos();
    console.log('cEEE', cEEE);
    losEventos.value = cEEE.data;
    console.log('cE.data -->>  losEventos.value', losEventos.value);
    console.log(' losEventos.value.length ôôô', losEventos.value.length);
    // if (definicion_CTX_INDEX_EVENTO.losEventos.length === 0) {
    //   console.log('⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂');
    // } else {
    //   console.log('└└└└¥¥¥¥└└└└¥¥¥¥└└└└¥¥¥¥└└└└¥¥¥¥└└└└¥¥¥¥');
    // }
  });

  useTask$(async ({ track }) => {
    track(() => ini.value);
    console.log('ini.value ini.value ini.value ini.value ini.value ini.value  ▒');
    // if (ini.value === 0) {
    //   console.log('ini.value  === 0');
    await cargarEventos();
    // }
  });

  //#endregion CARGAR EVENTOS

  //#region ACTUALIZAR EVENTOS
  useTask$(async ({ track }) => {
    track(() => definicion_CTX_INDEX_EVENTO.graboEvento);
    console.log('definicion_CTX_INDEX_EVENTO.graboEvento  ');
    if (definicion_CTX_INDEX_EVENTO.graboEvento) {
      //actualizar EVENTOS
      console.log('definicion_CTX_INDEX_EVENTO.graboEvento -->>  TRUE');
      await cargarEventos();
      definicion_CTX_INDEX_EVENTO.graboEvento = false;
    }
  });
  //#endregion ACTUALIZAR EVENTOS
  return (
    <>
      <div class="container mt-5">
        <h3 class="mb-4">Eventos</h3>
        <button onClick$={() => (definicion_CTX_INDEX_EVENTO.mostrarPanelNewEditEvento = true)}>Crear Evento</button>
        <button onClick$={() => navegarA('/misEventos')}>Mis Eventos</button>

        {definicion_CTX_INDEX_EVENTO.mostrarPanelNewEditEvento && (
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
            <NewEditEvento
              // addPeriodo={periodo}
              idCliente={`${sessionStorage.getItem('ID')}`}
              nombre={`${sessionStorage.getItem('NOMBRE')}`}
              eventoSelec={definicion_CTX_INDEX_EVENTO.eE}
              contexto="evento"
              // igv={igv.value}
            />
          </div>
        )}
        <div id="seccionEventos" class="card mt-4 publicacion">
          {/* {definicion_CTX_INDEX_EVENTO.losEventos.length > 0 ? 'siiiiiiiii' : 'nooooooooo'} */}
          {losEventos.value.map((evt: any, index: any) => {
            return (
              <div key={index} id="tarjeta-evento" class="card-body">
                <img src={images.perfil} width={100} height={100} class="img-fluid rounded-circle" />
                <h5 style={{ fontSize: '1.2rem' }} class="card-title">
                  {evt.nombre}
                </h5>
                <p style={{ fontSize: '1.2rem' }} class="card-text">
                  {evt.titulo}
                </p>
                <p class="card-text">{'Fecha Inicio: ' + formatoDDMMMMYYYY_PEN(evt.fechaInicio)}</p>
                <p class="card-text">{evt.contenido}</p>
                <a href={evt.link}>{'Link: ' + evt.link}</a>
                {/* <p class="card-text">
                  <label for="">Link:</label>
                  <span>{' ' + evt.link}</span>
                </p>*/}
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});
