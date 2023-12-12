import { $, component$, useOn, useStyles$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import { images } from '~/assets';
// import bootstrap from '~/routes/bootstrap';
import styles from './header.css?inline';
import { parametrosGlobales } from '~/routes/layout';

export default component$(() => {
  // useOn(
  //   'qvisible',
  //   $(() => import('bootstrap'))
  // );
  //
  useStyles$(styles);
  //#region INICIALIZAR
  const navegarA = useNavigate();
  //#endregion INICIALIZAR
  return (
    // <header class={styles.header}>  // <header style={{ display: 'flex', justifyContent: 'space-between', background: 'white' }}>
    <header>
      <img id="logoInicial" src={images.logo} width={150} height={150} />
      {/* <nav class="main-menu"> */}
      {/* <label style={{ border: '1px red solid' }}>fdsf</label> */}
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}
      {/* <div class="collapse navbar-collapse" id="navbarsExample07">   */}
      <div class="nav-container">
        <ul class="nav-items">
          <li class="nav-item">
            <a href="/presentacion">
              <b>Inicio</b>
            </a>
          </li>
          <li class="nav-item">
            <a href="/rutinas">Exploración de Rutinas</a>
          </li>

          <li class="nav-item nav-item-dropdown">
            <a class="dropdown-trigger" href="#">
              Interacción Social
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <a href="/eventos">Eventos</a>
              </li>
              <li class="dropdown-menu-item">
                <a href="/foros">Foros</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* </div> */}
      {/* <img id="logoInicial" src={images.logo} style={{ width: 150, height: 150 }} />
          <img id="logoInicialGYM" src={images.logo} style={{ width: 150, height: 150 }} /> */}
      {/* </nav> */}

      <button
        type="button"
        class="btn btn-secondary"
        onClick$={() => {
          sessionStorage.removeItem('ID');
          sessionStorage.removeItem('NOMBRE');
          navegarA('/');
        }}
      >
        Cerrar Sesion
      </button>
    </header>
  );
});
