# Internationalization

`TinyVue` uses the official internationalization plug-in of `Vue`. You need to install the `vue-i18n` plug-in.

## Vue 3.0 internationalization configuration

Step 1: You are advised to install the `vue-i18n` plug-in of the `^ 9.1.6' version by running the following command:

```bash
yarn add vue-i18n
# or
npm install vue-i18n
```

Step 2: Add the `src/i18n/index.js` file. The file content is as follows:

```js
import { createI18n } from 'vue-i18n'
import locale from '@opentiny/vue-locale'

export default (i18n) =>
  locale.initI18n({
    i18n,
    createI18n,
    messages: {
      zhCN: {
        test: '中文'
      },
      enUS: {
        test: 'English'
      }
    }
  })
```

Step 3 Modify `src/main.js` and add the highlighted part of the following code:

```js {3,8}
import { createApp } from 'vue'
import App from './App.vue'
import initI18n from './i18n'
import router from './router'

const app = createApp(App)

app.use(initI18n({ locale: 'zhCN' }))

app.use(router).mount('#app')
```

## Vue 2.0 internationalization configuration

Step 1: You are advised to install the `vue-i18n` plug-in of the `8.15. 0` version by running the following command:

```bash
yarn add vue-i18n@8.15.0
# or
npm install vue-i18n@8.15.0
```

Step 2: Add the `src/i18n/index.js` file. The file content is as follows:

```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from '@opentiny/vue-locale'

Vue.use(VueI18n)

export default (i18n) =>
  locale.initI18n({
    i18n,
    VueI18n,
    messages: {
      zhCN: {
        test: 'Chinese'
      },
      enUS: {
        test: 'English'
      }
    }
  })
```

Step 3 Modify `src/main.js` and add the highlighted part of the following code:

```js {3,7}
import Vue from 'vue'
import App from './App.vue'
import initI18n from './i18n'
import router from './router'

new Vue({
  i18n: initI18n({ locale: 'zhCN' }),
  router,
  render: (h) => h(App)
}).$mount('#app')
```

## Adding Other Minority Languages

In the component library, Chinese and English are built in by default. In the `@opentiny/vue@3.22.0` and later versions, the Spanish and Portuguese internationalization language packages are added to the component library. You can use the packages during internationalization configuration.

```js {18-26}
import { createI18n } from 'vue-i18n'
import locale from '@opentiny/vue-locale'

// Importing a Package in a Minority Language
import { esLA, ptBR } from '@opentiny/vue-locale'

const initI18n = (i18n) =>
  locale.initI18n({
    i18n,
    createI18n,
    messages: {
      zhCN: {
        test: '项目自用的国际化内容'
      },
      enUS: {
        test: 'project self-use for English'
      },
      esLA: {
        // mix it with the content used by the project.
        ...esLA,
        test: 'Contenido de los propios proyectos'
      },
      ptBR: {
        ...ptBR,
        test: 'Conteúdo para uso próprio do projeto'
      }
    }
  })

export const i18n = initI18n({ locale: 'esLA' })
```

After the preceding configuration, the Vue3 project supports the internationalization environment of four languages. The method of configuring the Vue2 project is the same. You only need to import the internationalization language package of the minority language and mix the internationalization content of the project.
