import { $, component$, createContextId, useContextProvider, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { listarMisEventos } from '~/api/usuario.api';
import { images } from '~/assets';
import { formatoDDMMMMYYYY_PEN } from '../../../functions/comunes';
import NewEditEvento from '~/components/gym/evento/newEditEvento';

export const CTX_MIS_EVENTO = createContextId<any>('mis_evento');

export default component$((props: { idCliente: string }) => {
  //#region DEFINIR CTX_INDEX_EVENTO
  const definicion_CTX_MIS_EVENTO = useStore({
    miE: [],
    graboEvento: false,
    mostrarPanelNewEditEvento: false,
    // losEventos: [],
  });
  useContextProvider(CTX_MIS_EVENTO, definicion_CTX_MIS_EVENTO);
  //#endregion DEFINIR CTX_INDEX_EVENTO

  //#region INICIALIZACION
  const misEV = useSignal([]);
  const ini = useSignal(0);
  //#endregion INICIALIZACION

  //#region CARGAR MIS EVENTOS
  const cargarMisEventos = $(async () => {
    // const carME = await listarMisEventos({ idCliente: props.idCliente });'656cd8d7670cbc46901a1cd4'
    const carME = await listarMisEventos({ idCliente: sessionStorage.getItem('ID') });
    console.log('carME', carME);
    misEV.value = carME.data;
    console.log(' misEV.value', misEV.value);
  });

  useTask$(async ({ track }) => {
    track(() => ini.value);

    await cargarMisEventos();
  });
  //#endregion CARGAR MIS EVENTOS

  //#region ACTUALIZAR MIS EVENTOS
  useTask$(async ({ track }) => {
    track(() => definicion_CTX_MIS_EVENTO.graboEvento);

    if (definicion_CTX_MIS_EVENTO.graboEvento) {
      await cargarMisEventos();
      definicion_CTX_MIS_EVENTO.graboEvento = false;
    }
  });
  //#endregion ACTUALIZAR MIS EVENTOS
  return (
    <>
      <div class="container mt-5">
        <h3>Mis Eventos</h3>
        <div id="seccionEventos" class="card mt-4 publicacion">
          {misEV.value.map((regis: any, index: any) => {
            return (
              <div key={index} id="tarjeta-evento" class="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img src={images.perfil} width={100} height={100} class="img-fluid rounded-circle" />
                  <img
                    src={images.tresPuntos}
                    width={16}
                    height={16}
                    onClick$={() => {
                      definicion_CTX_MIS_EVENTO.miE = regis;
                      definicion_CTX_MIS_EVENTO.mostrarPanelNewEditEvento = true;
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>

                <h4 style={{ fontSize: '1.2rem' }} class="card-title">
                  {regis.nombre}
                </h4>
                <p style={{ fontSize: '1.2rem' }} class="card-text">
                  {regis.titulo}
                </p>
                <p class="card-text">{'Fecha Inicio: ' + formatoDDMMMMYYYY_PEN(regis.fechaInicio)}</p>
                <p class="card-text">{regis.contenido}</p>
                <a href={regis.link}>{'Link: ' + regis.link}</a>
                {/* <p class="card-text">
                  <label for="">Link:</label>
                  <span>{' ' + regis.link}</span>
                </p> */}
                <hr></hr>
              </div>
            );
          })}
        </div>
        {definicion_CTX_MIS_EVENTO.mostrarPanelNewEditEvento && (
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
              eventoSelec={definicion_CTX_MIS_EVENTO.miE}
              contexto="mis_eventos"
              // igv={igv.value}
            />
          </div>
        )}
      </div>
    </>
  );
});
