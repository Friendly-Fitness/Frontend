import { $, component$, useContext, useStore } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { logearCliente } from '~/api/usuario.api';
import { images } from '~/assets';
import { parametrosGlobales } from '../layout';
import { PrimeraMayuscula } from '../../functions/comunes';
import { CTX_INDEX_ROUTES } from '~/root';
// import { CTX_INDEX_ROUTES } from '../index';
// import { CTX_INDEX_ROUTES } from '~/root';
// import { CTX_INDEX_ROUTES } from '../../routes';
// import { CTX_INDEX_ROUTES } from '../index';

// export

export default component$(() => {
  //#region CONTEXTO
  // const ctx_index_routes = useContext(CTX_INDEX_ROUTES);
  //#endregion CONTEXTO
  const ctx_index_RR = useContext(CTX_INDEX_ROUTES);

  //#region SESION
  const userSession = useStore<any>({ userId: '', isLoggedIn: false });
  //#endregion SESION

  //#region DEFINICION CTX_USUARIO
  const definicion_CTX_USUARIO = useStore({
    email: '', //'re@re.com',
    contrasena: '', // '123',
  });
  //#endregion DEFINICION CTX_USUARIO

  //#region INICIALIZACION
  const navegarA = useNavigate();
  //#endregion INICIALIZACION

  //#region INGRESAR AL SISTEMA
  const ingresarAlSistema = $(async () => {
    console.log('::::::ingresarAlSistema::::::______');
    if (definicion_CTX_USUARIO.email.trim() === '') {
      alert('Ingrese el email.');
      document.getElementById('in_email_INICIAR')?.focus();
      return;
    }
    if (definicion_CTX_USUARIO.contrasena.trim() === '') {
      alert('Ingrese la contraseña.');
      document.getElementById('in_contrasena_INICIAR')?.focus();
      return;
    }
    console.log('::::::_______PASO -> ingresarAlSistema::::::______');

    let elLogeo = await logearCliente({
      correo: definicion_CTX_USUARIO.email.trim(),
      contrasena: definicion_CTX_USUARIO.contrasena.trim(),
    });
    elLogeo = elLogeo.data;

    console.log('first', elLogeo);
    console.log('first', elLogeo.length);
    if (elLogeo.length === 1) {
      // parametrosGlobales.dentro = true;
      // parametrosGlobales.idCliente = elLogeo[0]._id;
      // // parametrosGlobales.nombre = camelCase(elLogeo[0].nombre + ' ' + elLogeo[0].apellido);
      // parametrosGlobales.nombre = PrimeraMayuscula(elLogeo[0].nombre) + ' ' + PrimeraMayuscula(elLogeo[0].apellido);
      // // userSession.userId
      // ctx_index_RR.estaLogeado = true;
      // ctx_index_RR.idUsuario = elLogeo[0]._id;
      // ctx_index_RR.nombre = PrimeraMayuscula(elLogeo[0].nombre) + ' ' + PrimeraMayuscula(elLogeo[0].apellido);
      // console.log('iniciar - ctx_index_routes', ctx_index_routes);
      // localStorage.setItem('laID_local', '156');
      sessionStorage.setItem('ID', elLogeo[0]._id);
      sessionStorage.setItem('NOMBRE', PrimeraMayuscula(elLogeo[0].nombre) + ' ' + PrimeraMayuscula(elLogeo[0].apellido));
      navegarA('/presentacion');
    } else {
      // parametrosGlobales.dentro = false;
      // parametrosGlobales.idCliente = '';
      // parametrosGlobales.nombre = '';
      // ctx_index_RR.estaLogeado = false;
      // ctx_index_RR.idUsuario = 'ytr';
      // ctx_index_RR.nombre = 'zse';
      sessionStorage.removeItem('ID');
      sessionStorage.removeItem('NOMBRE');
      alert('El correo o la contraseña estan erradas.');
    }

    //
  });
  //#endregion INGRESAR AL SISTEMA

  return (
    <>
      <div class="container w-75 mt-5 rounded">
        <div class="row alig-items-stretch">
          <div class="col p-5 formu">
            <h2 class="fw-bold text-center py-5">Bienvenido</h2>

            <form action="#">
              <div class="mb-4">
                <label for="email" class="form-label">
                  Correo electrónico
                </label>
                <input
                  id="in_email_INICIAR"
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="email"
                  value={definicion_CTX_USUARIO.email}
                  onChange$={(e) => (definicion_CTX_USUARIO.email = (e.target as HTMLInputElement).value)}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('in_contrasena_INICIAR') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>

              <div class="mb-4">
                <label for="contraseña" class="form-label">
                  Contraseña
                </label>
                <input
                  id="in_contrasena_INICIAR"
                  type="password"
                  class="form-control"
                  name="contraseña"
                  placeholder="contraseña"
                  value={definicion_CTX_USUARIO.contrasena}
                  onChange$={(e) => (definicion_CTX_USUARIO.contrasena = (e.target as HTMLInputElement).value)}
                  onKeyPress$={(e) => {
                    if (e.key === 'Enter') {
                      (document.getElementById('btn_ingresarAlSistema_INICIAR') as HTMLInputElement)?.focus();
                    }
                  }}
                />
              </div>

              <div class="mb-4">
                <a href="#">¿Restablecer contraseña?</a>
              </div>

              <div class="col-md-6 offset-md-5">
                <input
                  id="btn_ingresarAlSistema_INICIAR"
                  type="button"
                  value="Logearse"
                  class="btn-centro"
                  onClick$={() => ingresarAlSistema()}
                />
                {/* <button type="submit" class="btn btn-secondary">
                  Iniciar Sesion
                </button> */}
              </div>
            </form>
          </div>

          <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
            <img src={images.iniciarSesion} alt="img-iniciarSesion" width={400} height={500} />
          </div>
        </div>
      </div>
    </>
  );
});
