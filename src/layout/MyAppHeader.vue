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
                                <nav >
                                    <ul id="navigation">   
                                        <li class="active"><router-link to="/"> Home</router-link></li>
                                        <li><router-link to="/about" class="white">About</router-link></li>
                                        <li><router-link to="/blogs">Blogs</router-link></li>
                                        <li><router-link to="/Portfolio">Portfolio</router-link></li>
                                        <li><router-link to="/contact">Contact</router-link></li>
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
                                        
                                        <li><a href="#">Pages</a>
                                            <ul class="submenu">
                                                <li><router-link to="/contact">Contact</router-link></li>
                                                <li><router-link to="/blogdetails">Blog Details</router-link></li>
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
      isDarkModeEnabled: false
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
  },
    mounted() {
      var menu = $('ul#navigation');
        if(menu.length){
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
        });
        
        };
        // const darktheme = localStorage.getItem("dark_theme");
        // console.log('local storage :', darktheme);
        // this.isDarkModeEnabled = darktheme;
        // if (darktheme) {
        //     if (this.isDarkModeEnabled) {
        //         this.theme = 'dark';
        //     } else {
        //         this.theme = 'light';
        //     }
        // }
    },
  methods: {
    onSwitched: function (isSwitched) {
              this.theme = this.theme === 'light' ? 'dark' : 'light'
              localStorage.setItem("dark_theme", isSwitched);
                console.log('dark mode is enabled :', isSwitched);
            }
    
  },
};
</script>
<style>
</style>
