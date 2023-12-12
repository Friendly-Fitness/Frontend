import { $, component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';
import { images } from '~/assets';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const navegarA = useNavigate();

  const ingresar = $(() => {
    alert('ingresando...');
  });
  return (
    <header class={styles.header}>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'white' }}>
          <img id="logoInicial" src={images.logo} width={150} height={150} />
          <button
            type="button"
            class="btn btn-secondary"
            onClick$={() => {
              // ingresar();
              navegarA('/iniciar');
            }}
          >
            Iniciar Sesion
          </button>
        </div>
      </nav>
      {/* <div class={["container", styles.wrapper]}>   justifyContent: 'space-between', 
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
});
