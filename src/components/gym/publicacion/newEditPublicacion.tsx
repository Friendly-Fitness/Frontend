import { $, component$, useContext, useStore } from '@builder.io/qwik';
import { inUpPublicacion } from '~/api/usuario.api';
import { images } from '~/assets';
import { hoy } from '~/functions/comunes';
import { IPublicacion } from '~/interfaces/iPublicacion';
import { CTX_INDEX_FOROS } from '~/routes/(gym)/foros';
import { CTX_MIS_PUBLICACIONES } from '~/routes/(gym)/misPublicaciones';

export default component$((props: { idCliente: string; nombre: string; publiSelec: any; contexto: string }) => {
  //#region DEFINIR CONTEXTO
  let ctx: any;
  switch (props.contexto) {
    case 'foros':
      ctx = useContext(CTX_INDEX_FOROS);
      break;
    case 'mis_publicaciones':
      ctx = useContext(CTX_MIS_PUBLICACIONES);
      break;
  }
  //#endregion DEFINIR CONTEXTO

  //#region DEFINICION PUBLICACION
  const definicion_PUBLICACION = useStore<IPublicacion>({
    _id: props.publiSelec._id ? props.publiSelec._id : '',
    idCliente: props.publiSelec.idCliente ? props.publiSelec.idCliente : '',
    nombre: props.publiSelec.nombre ? props.publiSelec.nombre : '',
    titulo: props.publiSelec.titulo ? props.publiSelec.titulo : '',
    fechaPublicacion: props.publiSelec.fechaPublicacion ? props.publiSelec.fechaPublicacion.substring(0, 10) : hoy(), //props.publiSelec.fechaPublicacion,
    contenido: props.publiSelec.contenido ? props.publiSelec.contenido : '',
  });
  //#endregion DEFINICION PUBLICACION

  //#region REGISTAR PUBLICACION
  const registrarPublicacion = $(async () => {
    console.log('::::::_______ -> registrarPublicacion::::::______');
    if (definicion_PUBLICACION.titulo.trim() === '') {
      alert('Ingrese el título.');
      document.getElementById('in_Titulo_PUBLICACION')?.focus();
      return;
    }
    if (definicion_PUBLICACION.contenido.trim() === '') {
      alert('Ingrese el contenido.');
      document.getElementById('in_Contenido_PUBLICACION')?.focus();
      return;
    }
    console.log('::::::_______PASO -> registrarPublicacion::::::______');

    const aaPub = await inUpPublicacion({
      idPublicacion: definicion_PUBLICACION._id,
      idCliente: sessionStorage.getItem('ID'), // '656cd8d7670cbc46901a1cd4', //definicion_PUBLICACION.idCliente,
      nombre: sessionStorage.getItem('NOMBRE'), //'Miguel Vizconde', // definicion_PUBLICACION.nombre,
      titulo: definicion_PUBLICACION.titulo,
      fechaPublicacion: definicion_PUBLICACION.fechaPublicacion,
      contenido: definicion_PUBLICACION.contenido,
    });

    ctx.graboPublicacion = true;
    ctx.mostrarPanelNewEditPublicacion = false;
  });
  //#endregion REGISTAR PUBLICACION
  return (
    <div
      // class="container-modal"
      style={{
        width: '500px',
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        // border: '1px solid #888',
        borderRadius: '10px',
        fontSize: 'small',

        // width: 'auto',
        // padding: '2px',
      }}
    >
      {/* BOTONES DEL MARCO */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <img
          src={images.x}
          alt="cerrar"
          width={16}
          height={16}
          title="cerrar"
          onClick$={() => (ctx.mostrarPanelNewEditPublicacion = false)}
          style={{ cursor: 'pointer' }}
        />
        {/* <img
          src={images.x}
          alt="cerrar"
          width={16}
          height={16}
          title="cerrar"
          onClick$={() => console.log('parametrosGlobales', parametrosGlobales)}
        /> */}
      </div>
      {/* FORMULARIO */}
      <div class="add-form">
        <h3 style={{ fontSize: '0.8rem' }}>Publicación</h3>
        {/* ----------------------------------------------------- */}
        {/* GENERALES */}
        <div>
          {/* ----------------------------------------------------- */}
          {/* GENERALES DE IN ALMACÉN */}
          <div>
            {/* TITULO   */}
            <div class="form-control">
              <label>Título</label>
              <div class="form-control form-agrupado">
                <input
                  id="in_Titulo_PUBLICACION"
                  style={{ width: '100%' }}
                  placeholder="Ingrese el título"
                  type="text"
                  autoFocus
                  // disabled
                  value={definicion_PUBLICACION.titulo}
                  onChange$={(e) => (definicion_PUBLICACION.titulo = (e.target as HTMLInputElement).value)}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('in_Contenido_PUBLICACION') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>
            </div>
            {/* Contenido*/}
            <div class="form-control">
              <label>Contenido</label>
              <div class="form-control form-agrupado">
                <textarea
                  id="in_Contenido_PUBLICACION"
                  style={{ maxWidth: '100%' }}
                  // disabled={definicion_CTX_O_S.estado === 'APERTURADO' ? false : true}
                  cols={90}
                  placeholder="Ingrese el contenido"
                  value={definicion_PUBLICACION.contenido}
                  onChange$={(e) => {
                    definicion_PUBLICACION.contenido = (e.target as HTMLTextAreaElement).value;
                  }}
                  onKeyPress$={(e) => {
                    if (e.key === 'Tab') {
                      (document.getElementById('btn_PUBLICACION') as HTMLInputElement)?.focus();
                    }
                  }}
                ></textarea>
              </div>
            </div>

            {/* <hr style={{ margin: '5px 0' }}></hr> */}
          </div>

          {/* ----------------------------------------------------- */}
        </div>

        {/* ----------------------------------------------------- */}
        {/* GRABAR */}
        <input id="btn_PUBLICACION" type="button" value="Publicar" class="btn-centro" onClick$={() => registrarPublicacion()} />
      </div>
    </div>
  );
});
