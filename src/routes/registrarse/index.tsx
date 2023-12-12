import { $, component$, useStore } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { inUpCliente } from '~/api/usuario.api';
import { images } from '~/assets';

export default component$(() => {
  //#region DEFINICION CTX_CLIENTE
  const definicion_CTX_CLIENTE = useStore({
    nombre: '',
    apellido: '',
    correo: '',
    edad: '',
    contrasena: '',
  });
  //#endregion DEFINICION CTX_CLIENTE

  //#region INICIALIZACION
  const navegarA = useNavigate();
  //#endregion INICIALIZACION

  //#region REGISTRAR
  const registrarAlCliente = $(async () => {
    console.log('::::::_______registrarAlCliente__::::::______');
    if (definicion_CTX_CLIENTE.nombre.trim() === '') {
      alert('Ingrese el nombre.');
      document.getElementById('in_nombre_REGISTRO')?.focus();
      return;
    }
    if (definicion_CTX_CLIENTE.apellido.trim() === '') {
      alert('Ingrese el apellido.');
      document.getElementById('in_apellido_REGISTRO')?.focus();
      return;
    }
    if (definicion_CTX_CLIENTE.correo.trim() === '') {
      alert('Ingrese el correo.');
      document.getElementById('in_correo_REGISTRO')?.focus();
      return;
    }
    if (definicion_CTX_CLIENTE.edad.trim() === '') {
      alert('Ingrese la edad.');
      document.getElementById('in_edad_REGISTRO')?.focus();
      return;
    }
    if (definicion_CTX_CLIENTE.contrasena.trim() === '') {
      alert('Ingrese la contraseña.');
      document.getElementById('in_contrasena_REGISTRO')?.focus();
      return;
    }
    console.log('::::::_______PASO -> registrarAlCliente__::::::______');
    // idCliente:'',
    await inUpCliente({
      nombre: definicion_CTX_CLIENTE.nombre,
      apellido: definicion_CTX_CLIENTE.apellido,
      correo: definicion_CTX_CLIENTE.correo,
      edad: definicion_CTX_CLIENTE.edad,
      contrasena: definicion_CTX_CLIENTE.contrasena,
    });

    navegarA('/');
  });
  //#endregion REGISTRAR
  return (
    <div class="container w-75 mt-5 rounded">
      <div class="row alig-items-stretch">
        <div class="col p-5 formu">
          <h2 class="fw-bold text-center py-5">REGISTRO</h2>
          <form action="#">
            <div class="mb-4">
              <input
                id="in_nombre_REGISTRO"
                type="text"
                autoFocus
                class="form-control"
                placeholder="Ingresa tu nombre*"
                value={definicion_CTX_CLIENTE.nombre.toUpperCase()}
                onChange$={(e) => (definicion_CTX_CLIENTE.nombre = (e.target as HTMLInputElement).value)}
                // onFocus$={() => document.getElementById('in_apellido_REGISTRO')?.focus()}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_apellido_REGISTRO') as HTMLInputElement)?.focus();
                  }
                }}
              />
            </div>

            <div class="mb-4">
              <input
                id="in_apellido_REGISTRO"
                type="text"
                class="form-control"
                placeholder="Ingresa tu apellido*"
                value={definicion_CTX_CLIENTE.apellido.toUpperCase()}
                onChange$={(e) => (definicion_CTX_CLIENTE.apellido = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_correo_REGISTRO') as HTMLInputElement)?.focus();
                  }
                }}
              />
            </div>

            <div class="mb-4">
              <input
                id="in_correo_REGISTRO"
                type="email"
                class="form-control"
                placeholder="Ingresa tu correo*"
                value={definicion_CTX_CLIENTE.correo}
                onChange$={(e) => (definicion_CTX_CLIENTE.correo = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_edad_REGISTRO') as HTMLInputElement)?.focus();
                  }
                }}
              />
            </div>

            <div class="mb-4">
              <input
                id="in_edad_REGISTRO"
                type="text"
                class="form-control"
                placeholder="Ingresa tu edad*"
                value={definicion_CTX_CLIENTE.edad}
                onChange$={(e) => (definicion_CTX_CLIENTE.edad = (e.target as HTMLInputElement).value.toUpperCase())}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_contrasena_REGISTRO') as HTMLInputElement)?.focus();
                  }
                }}
              />
            </div>

            <div class="mb-4">
              <input
                id="in_contrasena_REGISTRO"
                type="password"
                class="form-control"
                placeholder="Ingresa una contraseña*"
                value={definicion_CTX_CLIENTE.contrasena}
                onChange$={(e) => (definicion_CTX_CLIENTE.contrasena = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('btn_registrarAlCliente') as HTMLInputElement)?.focus();
                  }
                }}
              />
            </div>

            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                He leído todos los términos y condiciones y la politica de los datos personales
              </label>
            </div>

            <div class="col-md-6 offset-md-5">
              <input
                id="btn_registrarAlCliente"
                type="button"
                value="Grabar"
                class="btn-centro"
                onClick$={() => registrarAlCliente()}
              />
              {/* <button id="btn_registrarAlCliente" class="btn btn-secondary" onClick$={() => registrarAlCliente()}>
                Registrarse
              </button> */}
            </div>
          </form>
        </div>

        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          <img src={images.registro} alt="img-registro" width={250} height={250} />
        </div>
      </div>
    </div>
  );
});
