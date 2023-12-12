import { component$, useContext, useSignal, useStyles$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { videos } from '~/assets';
import styles from './styles.css?inline';
// import { inherits } from 'util';
// import { parametrosGlobales } from '~/routes/layout';
// import { CTX_INDEX_ROUTES } from '~/root';
// import { CTX_ROOT } from '~/routes';

export default component$(() => {
  //#region CONTEXTO
  // const ctx_root_rutinas = useContext(CTX_INDEX_ROUTES);
  //#endregion CONTEXTO

  useStyles$(styles);
  //#region INICIALIZACION
  const navegarA = useNavigate();
  const ini = useSignal(0);
  const anchoVideo = 302;
  const rutinaDesafio = useSignal(true);
  const rutinas = useSignal('Nivel Principiante');
  const desafios = useSignal('Nivel Principiante');
  //#endregion INICIALIZACION
  return (
    <>
      <div class="container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div class="btn-group" role="group" aria-label="Basic example">
            <input type="button" value="Rutinas" onClick$={() => (rutinaDesafio.value = true)} />
            <input type="button" value="Desafios" onClick$={() => (rutinaDesafio.value = false)} />
            {/* <button onClick$={() => (rutinaDesafio.value = true)}>Rutinas</button>
            <button onClick$={() => (rutinaDesafio.value = false)}>Desafios</button> */}
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <input type="button" value="Perfil" onClick$={() => navegarA('/perfil')} />
          </div>
        </div>

        <div class="dropdown">
          <select
            name="rutinas"
            id="rutinas"
            hidden={!rutinaDesafio.value}
            onChange$={(e) => (rutinas.value = (e.target as HTMLSelectElement).value)}
          >
            <option value="Nivel Principiante">Nivel Principiante</option>
            <option value="Nivel Intermedio">Nivel Intermedio</option>
            <option value="Nivel Avanzado">Nivel Avanzado</option>
          </select>
          <select
            name="desafios"
            id="desafios"
            hidden={rutinaDesafio.value}
            onChange$={(e) => (desafios.value = (e.target as HTMLSelectElement).value)}
          >
            <option value="Nivel Principiante">Nivel Principiante</option>
            <option value="Nivel Intermedio">Nivel Intermedio</option>
            <option value="Nivel Avanzado">Nivel Avanzado</option>
          </select>
        </div>

        {/* <input type="button" value="ver" onClick$={() => alert('rutinas ' + rutinas.value)} /> */}
        {/* <button onClick$={() => console.log('paraGLOO', parametrosGlobales)}>pGlo</button>
        <button onClick$={() => console.log('ctx_root_rutinas', ctx_root_rutinas)}>ctx_root_rutinas</button> */}
      </div>
      <section class="container">
        <div id="seccionRutinas" hidden={!rutinaDesafio.value}>
          <h3 style={{ textAlign: 'center' }}>RUTINA - {rutinas.value.toUpperCase()}</h3>
          <div style={rutinas.value === 'Nivel Principiante' ? { display: 'flex' } : { display: 'none' }}>
            {/* <div class="card"> */}
            <div class="card">
              {/* <video id="fm-video" src={videos.video1} controls style={{ width: 'inherit' }}></video> */}
              <video id="fm-video" src={videos.video1} controls width={anchoVideo}></video>
              <h4>Calentamiento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video2} controls width={anchoVideo}></video>
              <h4>Brazos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video3} controls width={anchoVideo}></video>
              <h4>Espalda</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video4} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
          <div style={rutinas.value === 'Nivel Intermedio' ? { display: 'flex' } : { display: 'none' }}>
            <div class="card">
              <video id="fm-video" src={videos.video5} controls width={anchoVideo}></video>
              <h4>Calentamiento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video6} controls width={anchoVideo}></video>
              <h4>Brazos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video7} controls width={anchoVideo}></video>
              <h4>Espalda</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video8} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
          <div style={rutinas.value === 'Nivel Avanzado' ? { display: 'flex' } : { display: 'none' }}>
            <div class="card">
              <video id="fm-video" src={videos.video9} controls width={anchoVideo}></video>
              <h4>Calentamiento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video10} controls width={anchoVideo}></video>
              <h4>Brazos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video11} controls width={anchoVideo}></video>
              <h4>Espalda</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video12} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
        </div>
        {/************************** DESAFIOS  ***************************************************************/}
        {/************************** DESAFIOS  ***************************************************************/}
        {/************************** DESAFIOS  ***************************************************************/}
        <div id="seccionDesafios" hidden={rutinaDesafio.value}>
          <h3 style={{ textAlign: 'center' }}>DESAFIOS - {desafios.value.toUpperCase()}</h3>
          <div style={desafios.value === 'Nivel Principiante' ? { display: 'flex' } : { display: 'none' }}>
            <div class="card">
              <video id="fm-video" src={videos.video13} controls width={anchoVideo}></video>
              <h4>Calentamiento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video14} controls width={anchoVideo}></video>
              <h4>Brazos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video15} controls width={anchoVideo}></video>
              <h4>Espalda</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video16} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
          <div style={desafios.value === 'Nivel Intermedio' ? { display: 'flex' } : { display: 'none' }}>
            <div class="card">
              <video id="fm-video" src={videos.video17} controls width={anchoVideo}></video>
              <h4>Calentamiento</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video18} controls width={anchoVideo}></video>
              <h4>Brazos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video19} controls width={anchoVideo}></video>
              <h4>Espalda</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video20} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
          <div style={desafios.value === 'Nivel Avanzado' ? { display: 'flex' } : { display: 'none' }}>
            <div class="card">
              <video id="fm-video" src={videos.video21} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video22} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video23} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
            <div class="card">
              <video id="fm-video" src={videos.video24} controls width={anchoVideo}></video>
              <h4>Trapecio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolores excepturi delectus velit sed
                nemo tempora praesentium dicta aspernatur earum neque, impedit dolorum totam quod libero. Ullam, velit in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
