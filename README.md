# Bienvenido a Friendly Fitness - ¡Tu Comunidad Fitness en línea!

¡Gracias por unirte a Friendly Fitness, la plataforma revolucionaria que está transformando la manera en que te conectas con la comunidad fitness! Este README te guiará a través de las increíbles características que te esperan en nuestra plataforma diseñada para inspirar, motivar y conectar a entusiastas del fitness como tú.

Descripción General
Friendly Fitness es mucho más que una aplicación de rutinas y desafíos de ejercicios. Es una experiencia social completa, donde puedes compartir, inspirarte y conectarte con personas que comparten tu pasión por el fitness. Desde eventos emocionantes hasta publicaciones motivadoras, Friendly Fitness es tu destino único para todo lo relacionado con el mundo del bienestar.

Características Principales
1. Interacción Social Fitness
Con Friendly Fitness, rompemos barreras y creamos puentes entre los amantes del fitness de todo el mundo. Comparte tus logros, motivaciones y consejos con una comunidad dedicada que está lista para apoyarte en tu viaje.

2. Eventos Exclusivos
Organizamos eventos en línea y presenciales que van desde desafíos de 30 días hasta maratones virtuales. Únete a la emoción, compite amigablemente y celebra tus victorias con nuestra comunidad.

3. Publicaciones Motivadoras
Inspírate con publicaciones de expertos en fitness, entrenadores reconocidos y compañeros apasionados. Publica tus propios logros, comparte tus trucos favoritos y motiva a otros a alcanzar sus metas.

4. Rutinas Personalizadas
Descubre rutinas de ejercicios adaptadas a tus necesidades y metas. Desde principiantes hasta avanzados, Friendly Fitness tiene algo para todos. ¡Transforma tu rutina diaria con entrenamientos emocionantes y efectivos!

5. Desafíos Semanales
Desafía a tus amigos o únete a desafíos semanales para mantenerte en forma y motivado. ¡Cada semana es una nueva oportunidad para superarte a ti mismo y celebrar tus éxitos!

Cómo Empezar
Registro Rápido:

Crea tu cuenta en minutos para acceder a todas las funciones de Friendly Fitness.
Completa tu Perfil:

Agrega información sobre tus objetivos, nivel de fitness y preferencias para personalizar tu experiencia.
Explora y Participa:

Sumérgete en la plataforma, descubre eventos, únete a desafíos y conecta con otros entusiastas del fitness.
Comparte y Celebra:

<<<<<<< HEAD
```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## Cloudflare Pages

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
npm run serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)

### Deployments

[Cloudflare Pages](https://pages.cloudflare.com/) are deployable through their [Git provider integrations](https://developers.cloudflare.com/pages/platform/git-integration/).

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages). Next go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

Within the projects "Settings" for "Build and deployments", the "Build command" should be `npm run build`, and the "Build output directory" should be set to `dist`.

### Function Invocation Routes

Cloudflare Page's [function-invocation-routes config](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes) can be used to include, or exclude, certain paths to be used by the worker functions. Having a `_routes.json` file gives developers more granular control over when your Function is invoked.
This is useful to determine if a page response should be Server-Side Rendered (SSR) or if the response should use a static-site generated (SSG) `index.html` file.

By default, the Cloudflare pages adaptor _does not_ include a `public/_routes.json` config, but rather it is auto-generated from the build by the Cloudflare adaptor. An example of an auto-generate `dist/_routes.json` would be:

```
{
  "include": [
    "/*"
  ],
  "exclude": [
    "/_headers",
    "/_redirects",
    "/build/*",
    "/favicon.ico",
    "/manifest.json",
    "/service-worker.js",
    "/about"
  ],
  "version": 1
}
```

In the above example, it's saying _all_ pages should be SSR'd. However, the root static files such as `/favicon.ico` and any static assets in `/build/*` should be excluded from the Functions, and instead treated as a static file.

In most cases the generated `dist/_routes.json` file is ideal. However, if you need more granular control over each path, you can instead provide you're own `public/_routes.json` file. When the project provides its own `public/_routes.json` file, then the Cloudflare adaptor will not auto-generate the routes config and instead use the committed one within the `public` directory.
=======
Publica tus logros, comparte tus experiencias y celebra tus éxitos con la comunidad Friendly Fitness.
¡Bienvenido a una nueva era de fitness en línea! Friendly Fitness es más que una aplicación; es tu espacio para crecer, conectar y prosperar en tu viaje hacia una vida más saludable y activa. ¡Únete hoy y haz del fitness una experiencia social inolvidable!
>>>>>>> ae0aae7e007bb37a17482ebbe58686c08d6e3956
