import { $, component$, useContext, useStore } from '@builder.io/qwik';
import { inUpEvento } from '~/api/usuario.api';
import { images } from '~/assets';
import { hoy } from '../../../functions/comunes';
import { IEvento } from '~/interfaces/iEvento';
import { CTX_INDEX_EVENTO } from '~/routes/(gym)/eventos';
import { CTX_MIS_EVENTO } from '~/routes/(gym)/misEventos';

export default component$((props: { idCliente: string; nombre: string; eventoSelec: any; contexto: string }) => {
  //#region DEFINIR CONTEXTO
  let ctx: any;
  switch (props.contexto) {
    case 'evento':
      ctx = useContext(CTX_INDEX_EVENTO);
      break;
    case 'mis_eventos':
      ctx = useContext(CTX_MIS_EVENTO);
      break;
  }
  //#endregion DEFINIR CONTEXTO

  //#region DEFINICION CTX_EVENTO
  const definicion_CTX_EVENTO = useStore<IEvento>({
    _id: props.eventoSelec._id ? props.eventoSelec._id : '',
    titulo: props.eventoSelec.titulo ? props.eventoSelec.titulo : '',
    fechaInicio: props.eventoSelec.fechaInicio ? props.eventoSelec.fechaInicio.substring(0, 10) : hoy(),
    contenido: props.eventoSelec.contenido ? props.eventoSelec.contenido : '',
    link: props.eventoSelec.link ? props.eventoSelec.link : 'https://www.google.com',
  });
  //#endregion DEFINICION CTX_EVENTO

  //#region REGISTRAR EVENTO
  const registrarEvento = $(async () => {
    console.log('::::::_______ -> registrarEvento::::::______');
    if (definicion_CTX_EVENTO.titulo.trim() === '') {
      alert('Ingrese el titulo.');
      document.getElementById('in_Titulo_EVENTO')?.focus();
      return;
    }
    if (definicion_CTX_EVENTO.fechaInicio.trim() === '') {
      alert('Ingrese el fechaInicio.');
      document.getElementById('in_FechaInicio_EVENTO')?.focus();
      return;
    }
    if (definicion_CTX_EVENTO.contenido.trim() === '') {
      alert('Ingrese el contenido.');
      document.getElementById('in_Contenido_EVENTO')?.focus();
      return;
    }
    if (definicion_CTX_EVENTO.link.trim() === '') {
      alert('Ingrese la link.');
      document.getElementById('in_link_EVENTO')?.focus();
      return;
    }
    console.log('::::::_______PASO -> registrarEvento::::::______');

    const elEvento = await inUpEvento({
      idEvento: definicion_CTX_EVENTO._id,
      idCliente: sessionStorage.getItem('ID'), // '656cd8d7670cbc46901a1cd4', //props.idCliente,
      nombre: sessionStorage.getItem('NOMBRE'), // 'Miguel Vizconde', //props.nombre,
      titulo: definicion_CTX_EVENTO.titulo.trim(),
      fechaInicio: definicion_CTX_EVENTO.fechaInicio.trim(),
      contenido: definicion_CTX_EVENTO.contenido.trim(),
      link: definicion_CTX_EVENTO.link.trim(),
    });

    ctx.graboEvento = true;
    ctx.mostrarPanelNewEditEvento = false;
  });
  //#endregion REGISTRAR EVENTO
  return (
    <div class="container-modal">
      {/* BOTONES DEL MARCO */}
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <img
          src={images.x}
          alt="cerrar"
          width={16}
          height={16}
          title="cerrar"
          onClick$={() => (ctx.mostrarPanelNewEditEvento = false)}
          style={{ cursor: 'pointer' }}
        />
        {/* <img
          src={images.x}
          alt="cerrar"
          width={16}
          height={16}
          title="cerrar"
          onClick$={() => console.log('eventoSelec', props.eventoSelec)}
          style={{ cursor: 'pointer' }}
        /> */}
      </div>
      {/* TITULO */}
      <h3 style={{ fontSize: '0.8rem' }}>Evento</h3>
      {/* FORMULARIO */}
      <div class="add-form">
        {/* GENERALES */}
        <div>
          {/* ----------------------------------------------------- */}
          {/* GENERALES DEL EVENTO */}
          <div>
            {/* ----------------------------------------------------- */}
            {/* TITULO */}
            <div class="form-control">
              <label>Titulo</label>
              <div class="form-control form-agrupado">
                <input
                  id="in_Titulo_EVENTO"
                  style={{ width: '100%' }}
                  type="text"
                  autoFocus
                  placeholder="Título"
                  value={definicion_CTX_EVENTO.titulo}
                  onChange$={(e) => (definicion_CTX_EVENTO.titulo = (e.target as HTMLInputElement).value)}
                  // onFocus$={() => document.getElementById('in_apellido_REGISTRO')?.focus()}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('in_FechaInicio_EVENTO') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>
            </div>
            {/* Fecha */}
            <div class="form-control">
              <label>Fecha de inicio</label>
              <div class="form-control form-agrupado">
                <input
                  id="in_FechaInicio_EVENTO"
                  style={{ width: '100%' }}
                  type="date"
                  placeholder="Add fecha de inicio"
                  //   max={ultimoDiaDelPeriodoX(props.addPeriodo.periodo)}
                  value={definicion_CTX_EVENTO.fechaInicio}
                  onInput$={(e) => {
                    definicion_CTX_EVENTO.fechaInicio = (e.target as HTMLInputElement).value.trim().toUpperCase();
                  }}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('in_Contenido_EVENTO') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>
            </div>
            {/* CONTENIDO */}
            <div class="form-control">
              <label>Contenido</label>
              <div class="form-control form-agrupado">
                <textarea
                  id="in_Contenido_EVENTO"
                  style={{ maxWidth: '100%' }}
                  cols={63}
                  placeholder="Contenido"
                  value={definicion_CTX_EVENTO.contenido}
                  onChange$={(e) => {
                    definicion_CTX_EVENTO.contenido = (e.target as HTMLTextAreaElement).value;
                  }}
                  onKeyPress$={(e) => {
                    if (e.key === 'Tab') {
                      (document.getElementById('in_Link_EVENTO') as HTMLInputElement)?.focus();
                    }
                  }}
                ></textarea>
              </div>
            </div>
            {/* Link */}
            <div class="form-control">
              <label>Link</label>
              <div class="form-control form-agrupado">
                <input
                  id="in_Link_EVENTO"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="Link"
                  value={definicion_CTX_EVENTO.link}
                  onChange$={(e) => (definicion_CTX_EVENTO.link = (e.target as HTMLInputElement).value)}
                  // onFocus$={() => document.getElementById('in_apellido_REGISTRO')?.focus()}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('btn_RegistrarEvento_EVENTO') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>
            </div>
            {/* <hr style={{ margin: '5px 0' }}></hr> */}
          </div>
          {/* ----------------------------------------------------- */}
        </div>

        {/* GRABAR   onClick={(e) => onSubmit(e)}*/}
        <input
          id="btn_RegistrarEvento_EVENTO"
          type="button"
          value={'Registrar'}
          class="btn-centro"
          onClick$={() => registrarEvento()}
        />
      </div>
    </div>
  );
});
