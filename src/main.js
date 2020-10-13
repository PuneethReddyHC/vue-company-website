/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './registerServiceWorker';
import VueProgressBar from 'vue-progressbar'
import CKEditor from '@ckeditor/ckeditor5-vue';
import store from './store';
import buildLocale from './lib/buildLocale';
import VueMeta from 'vue-meta';
import '@/assets/js/jquery.slicknav.min.js';
import '@/assets/js/slick.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate';
require('script-loader!raven-js/dist/vue/raven.js');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Argon from "./plugins/argon-kit";
// Raven loaded through script tag
const Raven = window['Raven'] || {
    context(startApp) {
        startApp()
    },
    config() {
        return {
            install() {

            }
        }
    }
};
Raven.config('https://6a956b3aff1f40bb9d75b5f9496b801e@o377184.ingest.sentry.io/5448402').install();

Vue.config.productionTip = false;

const options = {
  color: '#FFCC00',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Raven.context(function () {
  // Install BootstrapVue
  Vue.use(BootstrapVue);
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin);
  Vue.use(VueProgressBar, options);
  Vue.use(Argon);
  Vue.use( CKEditor );
  Vue.use(VueMeta);
  Vue.use(VeeValidate);
  const i18n = buildLocale(store);
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount("#app");
});