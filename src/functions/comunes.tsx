export const hoy = () => {
  const hoy = new Date();
  const al = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2);
  return al;
};

export const PrimeraMayuscula = (str: string) => {
  // converting all characters to lowercase
  let ans = str.toLowerCase();

  // Returning string to camelcase
  // return ans.split(' ').reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
  // return ans.reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
  return ans.charAt(0).toUpperCase() + ans.slice(1);
};

export const formatoDDMMYYYY_PEN = (fecha: any) => {
  // console.log('fecha ingresada', fecha);
  let fechaSalida = '';
  if (!isNaN(Date.parse(fecha))) {
    // console.log('fecha ingresada -> ingreso al parseo');
    fechaSalida = fecha.substr(8, 2) + '/' + fecha.substr(5, 2) + '/' + fecha.substr(0, 4);
    // console.log('fecha ingresada -> fechaSalida', fechaSalida);
  }
  return fechaSalida;
};

export const formatoDDMMMMYYYY_PEN = (fecha: any) => {
  // console.log('fecha ingresada', fecha);
  let fechaSalida = '';
  // const mesActual = new Date();
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  // console.log(meses[mesActual.getMonth()]);
  if (!isNaN(Date.parse(fecha))) {
    // console.log('fecha ingresada -> ingreso al parseo');
    fechaSalida = fecha.substr(8, 2) + ' de ' + meses[fecha.substr(5, 2) - 1] + ' de ' + fecha.substr(0, 4);
    // console.log('fecha ingresada -> fechaSalida', fechaSalida);
  }
  return fechaSalida;
};
