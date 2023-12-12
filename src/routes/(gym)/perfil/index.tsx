import { $, component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { cargarCliente, inUpCliente } from '~/api/usuario.api';
import { images } from '~/assets';
import { PrimeraMayuscula } from '~/functions/comunes';

export default component$(() => {
  //#region INICIALIZACION
  const ini = useSignal(0);
  const navegarA = useNavigate();

  const cliente = useStore({
    _id: '',
    nombre: '',
    apellido: '',
    correo: '',
    edad: '',
    contrasena: '',
  });

  const cargarElCliente = $(async () => {
    let elCli = await cargarCliente({
      idCliente: sessionStorage.getItem('ID'),
    });
    elCli = elCli.data;
    console.log('elCli', elCli);

    cliente._id = elCli[0]._id;
    cliente.nombre = elCli[0].nombre;
    cliente.apellido = elCli[0].apellido;
    cliente.correo = elCli[0].correo;
    cliente.edad = elCli[0].edad;
    cliente.contrasena = elCli[0].contrasena;
  });

  useTask$(async ({ track }) => {
    track(() => ini.value);

    await cargarElCliente();
  });
  //#endregion INICIALIZACION

  //#region REGISTAR CLIENTE
  const registrarCliente = $(async () => {
    console.log('::::::_______ -> registrarCliente::::::______');
    if (cliente.nombre.trim() === '') {
      alert('Ingrese el nombre.');
      document.getElementById('in_Nombre_CLIENTE')?.focus();
      return;
    }
    if (cliente.apellido.trim() === '') {
      alert('Ingrese el apellido.');
      document.getElementById('in_Apellido_CLIENTE')?.focus();
      return;
    }
    if (cliente.correo.trim() === '') {
      alert('Ingrese el correo.');
      document.getElementById('in_Correo_CLIENTE')?.focus();
      return;
    }
    if (cliente.edad.trim() === '') {
      alert('Ingrese la edad.');
      document.getElementById('in_Edad_CLIENTE')?.focus();
      return;
    }
    if (cliente.contrasena.trim() === '') {
      alert('Ingrese la contraseña.');
      document.getElementById('in_Contrasena_CLIENTE')?.focus();
      return;
    }
    console.log('::::::_______PASO -> registrarCliente::::::______');

    const regCliente = await inUpCliente({
      // idCliente: sessionStorage.getItem('ID'), // '656cd8d7670cbc46901a1cd4', //props.idCliente,
      // nombre: sessionStorage.getItem('NOMBRE'), // 'Miguel Vizconde', //props.nombre,
      // titulo: definicion_CTX_EVENTO.titulo.trim(),
      // fechaInicio: definicion_CTX_EVENTO.fechaInicio.trim(),
      // contenido: definicion_CTX_EVENTO.contenido.trim(),
      // link: definicion_CTX_EVENTO.link.trim(),
      idCliente: sessionStorage.getItem('ID'),
      nombre: cliente.nombre.trim().toUpperCase(),
      apellido: cliente.apellido.trim().toUpperCase(),
      correo: cliente.correo.trim(),
      edad: cliente.edad.trim(),
      contrasena: cliente.contrasena.trim(),
    });

    sessionStorage.removeItem('NOMBRE');
    sessionStorage.setItem('NOMBRE', PrimeraMayuscula(cliente.nombre) + ' ' + PrimeraMayuscula(cliente.apellido));
    navegarA('/rutinas');
    // ctx.graboCliente = true;
    // ctx.mostrarPanelNewEditEvento = false;
  });
  //#endregion REGISTAR CLIENTE
  return (
    <>
      <div class="container my-5">
        <div class="row">
          <div class="col-4">
            <img class="img-thumbnail" src={images.perfil} width={100} height={100} />
          </div>

          <div class="col-8">
            <div class="form-group row">
              <h1 class="col-2">PERFIL</h1>
            </div>

            <div class="form-group row">
              <h1 class="col-12">{sessionStorage.getItem('NOMBRE')}</h1>
            </div>

            <div class="form-group row">
              <input
                id="in_Nombre_CLIENTE"
                type="text"
                placeholder="Ingresar nombre"
                value={cliente.nombre}
                onChange$={(e) => (cliente.nombre = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_Apellido_CLIENTE') as HTMLInputElement)?.focus();
                  }
                }}
              ></input>
            </div>
            <div class="form-group row">
              <input
                id="in_Apellido_CLIENTE"
                type="text"
                placeholder="Ingresar apellido"
                value={cliente.apellido}
                onChange$={(e) => (cliente.apellido = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_Correo_CLIENTE') as HTMLInputElement)?.focus();
                  }
                }}
              ></input>
            </div>
            <div class="form-group row">
              <input
                id="in_Correo_CLIENTE"
                type="email"
                placeholder="Ingresar correo"
                value={cliente.correo}
                onChange$={(e) => (cliente.correo = (e.target as HTMLInputElement).value)}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_Edad_CLIENTE') as HTMLInputElement)?.focus();
                  }
                }}
              ></input>
            </div>
            <div class="form-group row">
              <input
                id="in_Edad_CLIENTE"
                type="text"
                placeholder="Ingresar edad"
                value={cliente.edad}
                onChange$={(e) => (cliente.edad = (e.target as HTMLInputElement).value)}
                // onFocus$={() => document.getElementById('in_apellido_REGISTRO')?.focus()}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('in_Contrasena_CLIENTE') as HTMLInputElement)?.focus();
                  }
                }}
              ></input>
            </div>
            <div class="form-group row">
              <input
                id="in_Contrasena_CLIENTE"
                type="password"
                placeholder="Ingresar contraseña"
                value={cliente.contrasena}
                onChange$={(e) => (cliente.contrasena = (e.target as HTMLInputElement).value)}
                // onFocus$={() => document.getElementById('in_apellido_REGISTRO')?.focus()}
                onKeyPress$={(e) => {
                  if (e.key === 'Enter') {
                    (document.getElementById('btn_Resgistrar_Cliente') as HTMLInputElement)?.focus();
                  }
                }}
              ></input>
            </div>

            {/* <div class="form-group row">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Descripcion
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>
          </div> */}

            <div class="form-group text-cent">
              <button id="btn_Resgistrar_Cliente" class="btn boton" onClick$={() => registrarCliente()}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
