<template>
    <header>
        <!-- Header Start -->
       <div class="header-area header-transparrent ">
            <div class="main-header header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="index.html"><img src="@/assets/img/logo/logo.png" alt=""></a>
                            </div>
                        </div>
                        
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <!-- Main-menu -->
                            
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav id="header-links">
                                    
                                    <ul id="navigation">
                                           
                                        <li><router-link :to="'home'" active-class="is-active is-active--home"> {{ $t('common:header.home') }}</router-link></li>
                                        <li><router-link :to="'about-us'" active-class="is-active is-active--about_us">{{ $t('common:header.about_us') }}</router-link></li>
                                        <li><router-link :to="'blogs'" active-class="is-active is-active--blogs">Blogs</router-link></li>
                                        <li><router-link :to="'portfolio'" active-class="is-active is-active--portfolio">Portfolio</router-link></li>
                                        <li><router-link :to="'contact-us'" active-class="is-active is-active--contact_us">Contact</router-link></li>
                                        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                                            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                                                <i class="ni ni-ui-04 d-lg-none"></i>
                                                <span class="nav-link-inner--text">Components</span>
                                            </a>
                                            <div class="dropdown-menu-inner">
                                                <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                                                class="media d-flex align-items-center">
                                                    <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i class="ni ni-spaceship"></i>
                                                    </div>
                                                    <div class="media-body ml-3">
                                                        <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                                        <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                                            world's most popular framework for building responsive sites.</p>
                                                    </div>
                                                </a>
                                                <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                                                class="media d-flex align-items-center">
                                                    <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i class="ni ni-ui-04"></i>
                                                    </div>
                                                    <div class="media-body ml-3">
                                                        <h5 class="heading text-warning mb-md-1">Components</h5>
                                                        <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                                            compiling Scss, change brand colors and more.</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </base-dropdown> 
                                        <li class="navbar-item select-language is-hidden-touch">
                                            <a class="current-language" slot="trigger">
                                                    <span>{{getCurrentLang(currentLocale)}} <i class="fa fa-angle-down"></i></span>
                                                </a>
                                            <ul class="is-right submenu">
                                                
                                                <li v-bind:class="{ active: currentLocale === 'en' }" v-on:click="changeLocale('en')"><a href="#">English <i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'de' }" v-on:click="changeLocale('de')"><a href="#">Deutsch<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'es' }" v-on:click="changeLocale('es')"><a href="#">Español<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'fr' }" v-on:click="changeLocale('fr')"><a href="#">Français<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'hu' }" v-on:click="changeLocale('hu')"><a href="#">Magyar<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'it' }" v-on:click="changeLocale('it')"><a href="#">Italiano<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'nl' }" v-on:click="changeLocale('nl')"><a href="#">Nederlands<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'pt-br' }" v-on:click="changeLocale('pt-br')"><a href="#">Português (Brasil)<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'sv' }" v-on:click="changeLocale('sv')"><a href="#">Svenska<i class="fa fa-check"></i></a></li>
                                                <li v-bind:class="{ active: currentLocale === 'tr' }" v-on:click="changeLocale('tr')"><a href="#">Türkçe<i class="fa fa-check"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul class="submenu">
                                                <li><router-link :to="'contact-us'">Contact</router-link></li>
                                                <li><router-link :to="'blogdetails'">Blog Details</router-link></li>
                                            </ul>
                                        </li>
                                        <li><DarkModeSwitch @switched="onSwitched" :initialState="isDarkModeEnabled"/></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12 ">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        <!-- Header End -->
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default {
  data() {
    return {
      theme: 'light', // default theme to use when the site is first loaded
      isDarkModeEnabled: false,
      currentLocale: this.$i18n.i18next.language || window.localStorage.i18nextLng
    }
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    DarkModeSwitch
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme // this is where the magic happens
    } // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  created() {
    
     $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });

        var theme = window.localStorage.getItem('data-theme');
        if(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            if(theme =='dark'){
                this.isDarkModeEnabled=true;
                this.theme = 'dark';
            }else{
                this.isDarkModeEnabled = false;
                this.theme = 'light';
            }
        }
  },
    mounted: () => {
      var menu = $('ul#navigation');
        if(menu.length){
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
        });
        
        };
        
        
       
    },
  methods: {
            getCurrentLang(locale) {
                switch (locale.toLowerCase()) {
                    case 'en':
                        return 'English';
                    case 'nl':
                        return 'Nederlands';
                    case 'gr':
                        return 'Ελληνικά';
                    case 'es':
                        return 'Español';
                    case 'hu':
                        return 'Magyar';
                    case 'fr':
                        return 'Français';
                    case 'de':
                        return 'Deutsch';
                    case 'no':
                        return 'Norsk';
                    case 'pt-br':
                        return 'Português (Brasil)';
                    case 'sv':
                        return 'Svenska';
                    case 'it':
                        return 'Italiano';
                    case 'tr':
                        return 'Türkçe';
                    default :
                        return 'English';
                }
            },
            changeLocale(locale) {
                this.currentLocale = locale;
                const path = this.$router.currentRoute.path.split('/')[2];
                this.$router.push(`/${locale}/${path}`);
            },
            onSwitched: function (isSwitched) {
              
              if(isSwitched) {
                    this.theme = this.theme === 'light' ? 'dark' : 'light'
                    localStorage.setItem( 'data-theme', 'dark');   
                }
                else {
                    this.theme = this.theme === 'light' ? 'dark' : 'light'
                    localStorage.setItem('data-theme', 'light');
                }
            }
    
  },
};
</script>
<style lang="scss">

    .select-language {
        margin-left: 0.75em;

        .current-language {
            cursor: pointer;
        }

        .fa-angle-down {
            margin-left: 0.5em;
        }

        .fa-check {
            margin-left: 1em;
            display: none;
        }

        .active {
            .fa-check {
                display: inline-block;
            }
        }
    }
    #header-links {
        .is-active {
            
            color: #690ddc !important;
            font-weight: bold;

            &--home {
                color: #6bd509 !important;
            }

            &--about_us {
                color: #379eff !important;
            }

            &--blogs {
                color: #f6006f !important;
            }

            &--contact-us {
                color : #ff9400 !important;
            }

            &--portfolio {
                color: #6ace8f !important;
            }

            &--faq {
                color: #980df9 !important;
            }

            &--press {
                color: #ff251e !important;
            }
        }
    }
</style>
