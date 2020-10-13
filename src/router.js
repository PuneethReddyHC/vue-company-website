import Vue from "vue";
import Router from "vue-router";
import home from "./views/home/home.vue";

const contactUs = () => import('./views/contact/contact_us');
const aboutUs = () => import('./views/about/about_us');
const blogs = () => import('./views/blogs/blogs');
const blogdetails = () => import('./views/BlogDetails');
const portfolio = () => import('./views/portfolio/portfolio');
const careers = () => import('./views/careers/careers');
const profile = () => import('./views/Profile.vue');
const login = () => import('./views/login/Login.vue');
const register = () => import('./views/register/Register.vue');
const landing = () => import('./views/Landing.vue');

import i18next from 'i18next';
import store from './store';
const locale = require('browser-locale')();
const supportedLocales = ['en', 'de', 'es', 'fr', 'hu', 'it', 'nl', 'pt-br', 'sv', 'tr'];
import root from './views/root.vue';
const browserLang = (locale || 'en-US').substring(0, 2);

Vue.use(Router);
const getLocalizedTitle = key => {
  return (i18next.t(`common:meta.${key}`) + ' | Agrowdev') || 'Agrowdev';
};
const router = new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: '*',
      redirect: `/${browserLang}/home`,
      
    },
    
    {
        path: '/home',
        redirect: `/${browserLang}/home`
    },
    {
      path: '/contact-us',
      redirect: `/${browserLang}/contact-us`
    },
    {
        path: '/about-us',
        redirect: `/${browserLang}/about-us`
    },
    {
        path: '/blogs',
        redirect: `/${browserLang}/blogs`
    },
    {
        path: '/portfolio',
        redirect: `/${browserLang}/portfolio`
    },
    {
        path: '/blogdetails',
        redirect: `/${browserLang}/blogdetails`
    },
    {
      path: '/careers',
      redirect: `/${browserLang}/careers`
    },
    
    {
      path: '/:locale',
      component: root,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
            path: 'about-us',
            name: 'about-us',
            component: aboutUs
        },
        {
            path: 'contact-us',
            name: 'contact-us',
            component: contactUs
        },
        {
            path: 'blogs',
            name: 'blogs',
            component: blogs
        },
        {
            path: 'blogdetails',
            name: 'blogdetails',
            component: blogdetails
        },
        {
            path: 'portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
          path: 'careers',
          name: 'careers',
          component: careers
        },
        {
            path: '*',
            redirect: `/${browserLang}/home`
        }
          
      ]
    },
    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  let locale = to.params.locale;
  if (!locale && to.name === 'manifesto') {
      locale = to.path.split('/')[1];
  } else if (!locale) {
      locale = browserLang;
  }

  // ugly workaround for waiting until the translations are ready
  // to set the title
  const interval = setInterval(() => {
      if (store.getters.isI18nLoaded) {
          document.title = getLocalizedTitle(to.name);
          clearInterval(interval);
      }
  }, 500);

  if (supportedLocales.indexOf(locale) === -1) {
      next('/en/home');
  } else {
      i18next.changeLanguage(locale);
      return next();
  }
});

export default router