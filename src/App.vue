<template>
    <div id="app">
        <my-app-header></my-app-header>
        <router-view name="header"></router-view>
        <vue-progress-bar></vue-progress-bar>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <my-app-footer></my-app-footer>
        <ScrollTopComponent>
          <fade-transition origin="center" mode="out-in" :duration="250">
              <icon name="ni ni-bold-up" size="md" class="bg-gradient-primary" color="white" shadow
                  rounded></icon>
          </fade-transition>
      </ScrollTopComponent>
    </div>
</template>
<script>

import ScrollTopComponent from './views/components/ScrollTop'
import { FadeTransition } from "vue2-transitions";

import MyAppHeader from "./layout/MyAppHeader"
import MyAppFooter from "./layout/MyAppFooter";
export default {
  components: {
    FadeTransition,
    MyAppHeader,
    MyAppFooter,
    ScrollTopComponent
  },
  
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  computed: {
    isI18nLoaded() {
      return this.$store.getters.isI18nLoaded;
    },
    isI18nErrored() {
      return this.$store.getters.isI18nErrored;
    }
  }
};
</script>
