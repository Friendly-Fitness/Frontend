const API = import.meta.env.VITE_URL + '/api/cliente';
// const API = 'https://backendalmacen-production.up.railway.app/api/usuario';
// backendalmacen02 - production.up.railway.app;

export const inUpCliente = async (parametros) => {
  console.log('//////api////////******************obtener a inUpCliente');
  console.log('parametros inUpCliente', parametros);
  const res = await fetch(API + '/inUpCliente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const logearCliente = async (parametros) => {
  console.log('//////api////////******************obtener a logearCliente');
  console.log('parametros logearCliente', parametros);
  const res = await fetch(API + '/logearCliente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const cargarCliente = async (parametros) => {
  console.log('//////api////////******************obtener a cargarCliente');
  console.log('parametros cargarCliente', parametros);
  const res = await fetch(API + '/cargarCliente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const inUpEvento = async (parametros) => {
  console.log('//////api////////******************obtener a inUpEvento');
  console.log('parametros inUpEvento', parametros);
  const res = await fetch(API + '/inUpEvento', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const listarEventos = async () => {
  console.log('//////api////////******************obtener a listarEventos');
  // console.log('parametros listarEventos', parametros);
  const res = await fetch(API + '/listarEventos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(parametros),
  });
  return res.json();
};

export const listarMisEventos = async (parametros) => {
  console.log('//////api////////******************obtener a listarMisEventos');
  console.log('parametros listarMisEventos', parametros);
  const res = await fetch(API + '/listarMisEventos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const getListarMisEventos = async (parametros) => {
  console.log('//////api////////******************obtener a getListarMisEventos');
  console.log('parametros getListarMisEventos', parametros);
  const res = await fetch(API + '/getListarMisEventos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const listarPublicaciones = async () => {
  console.log('//////api////////******************obtener a listarPublicaciones');
  // console.log('parametros listarPublicaciones', parametros);
  const res = await fetch(API + '/listarPublicaciones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(parametros),
  });
  return res.json();
};

export const inUpPublicacion = async (parametros) => {
  console.log('//////api////////******************obtener a inUpPublicacion');
  console.log('parametros inUpPublicacion', parametros);
  const res = await fetch(API + '/inUpPublicacion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};

export const listarMisPublicaciones = async (parametros) => {
  console.log('//////api////////******************obtener a listarMisPublicaciones');
  console.log('parametros listarMisPublicaciones', parametros);
  const res = await fetch(API + '/listarMisPublicaciones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  });
  return res.json();
};
