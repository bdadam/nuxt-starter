# nuxt-starter

![Sample Application Icon](src/static/icon256.png 'Sample Application Icon')

## Local setup

```sh
yarn
```

## Local start

```sh
yarn dev
```

## Setting up from scratch

### Init

We can use `yarn` to create a package.json with some default values

```sh
yarn init -y
```

### Installing dependencies

```sh
# For the app
yarn add nuxt @nuxtjs/pwa sass-loader node-sass

# For development (linting, etc)
yarn add --dev eslint eslint-config-prettier eslint-plugin-vue eslint-plugin-prettier prettier babel-eslint
```

### Development configuration

- Configure eslint
- Configure prettier

### Configure Nuxt.js

Create a file named `nuxt.config.js` in the project root.

Example content:

```js
export default {
  srcDir: 'src/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
};
```

### Set up first page

Create an `index.vue` file in `src/pages`. This will be the home page.

```html
<template>
  <h1>Hello World!</h1>
</template>
```

### Start in development mode

```sh
npx nuxt
```

### Adding default styles

- Install [minireset.css](https://jgthms.com/minireset.css/)
- Create `defaults.scss` in `src/assets`
- Add these to `next.config.js`

```sh
yarn add minireset.css
```

```js
// next.config.js
export default {
  //...
  css: ['minireset.css', '~/assets/defaults.scss'],
};
```

### Progressive Web App

- Install [@nuxt/pwa](https://pwa.nuxtjs.org/)
- Add an icon to `src/static/icon.png`
- Configure PWA see [@nuxt/pwa](https://pwa.nuxtjs.org/)

```sh
yarn add @nuxt/pwa
```

```js
// next.config.js
export default {
  // ...
  modules: ['@nuxtjs/pwa'],

  manifest: {
    name: 'My Awesome App',
    lang: 'en',
  },

  icon: {
    iconSrc: 'src/static/icon.png',
  },
};
```
