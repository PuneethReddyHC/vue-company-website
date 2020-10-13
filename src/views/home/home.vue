<template>
    <div>
        <main-slider></main-slider>
        <features></features>
        <pricing-area></pricing-area>
        <pricing-card></pricing-card>
        <customer-support></customer-support>
        <amazing-team></amazing-team>
        <carousel></carousel>
        <say-hello-area></say-hello-area>
    </div>
</template>
<script>

import MainSlider from "./components/MainSlider";
import Features from "./components/Features";
import PricingCard from "./components/PricingCard";
import PricingArea from "./components/PricingArea";
import CustomerSupport from "./components/CustomerSupport";
import AmazingTeam from "./components/AmazingTeam";
import Carousel from "./components/Carousel";
import SayHelloArea from "./components/SayHelloArea";
export default {
  name: "components",
  components: {
    MainSlider,
    Features,
    PricingArea,
    PricingCard,
    CustomerSupport,
    AmazingTeam,
    Carousel,
    SayHelloArea,
  },
  metaInfo() {
        return { 
            title: "Epiloge - Build your network in your field of interest",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                { property: 'og:type', content: 'website'},    
                { name: 'robots', content: 'index,follow'},
                { name: 'twitter:card', value: 'Agrodev | Agro network'} ,
                { name: 'twitter:site', value: '@Agrowdev'} ,
                { property:"og:url", content:"https://about.agrowdev.tech"},
                { property:"og:image", content:"https://snag.gy/vh8q2G.jpg"},
                { property:"og:description", content:"Ethical social network for a brighter tomorrow."},
                { name:"referrer", content:"no-referrer"}

            ]
      }
  },
};
</script>
<style>

</style>