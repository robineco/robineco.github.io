import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

// Install
Vue.component(
  CursorFx.name,
  CursorFx
);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        background: '#232830',
        secondary: '#F5D579'
      },
      light: {
        background: '#d0f0c0'
      }
    }
  }
});
