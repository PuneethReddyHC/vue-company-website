import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import MyHeader from "./layout/MyAppHeader"
import MyAppFooter from "./layout/MyAppFooter";
import ContactUs from "./views/ContactUs";
Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: MyHeader,
        default: Components,
        footer: MyAppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: MyHeader,
        default: Landing,
        footer: AppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: MyHeader,
        default: Login,
        footer: AppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: MyHeader,
        default: Register,
        footer: AppFooter
      },
      meta: {
        showProgressBar: false
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: MyHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact-us",
      components: {
        header: MyHeader,
        default: ContactUs,
        footer: MyAppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



export default router