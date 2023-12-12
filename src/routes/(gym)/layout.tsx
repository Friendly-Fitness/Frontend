import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/gym/header/header';
import Footer from '~/components/starter/footer/footer';
import { parametrosGlobales } from '../layout';
// import Header from '~/components/header/headerAlmacen';
// import Footer from '~/components/footer/footer';
// import { images } from '~/assets';
// import { CaoSLogo } from '../../components/icons/cao-s';

export default component$(() => {
  // parametrosGlobales.dentro = true;

  // const fecha = new Date();
  // const anio = fecha.getFullYear() + 1;
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
