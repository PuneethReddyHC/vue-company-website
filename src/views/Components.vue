<template>
    <div>
        <main-slider></main-slider>
        <features></features>
        <service-area></service-area>
        <pricing-area></pricing-area>
        <pricing-card></pricing-card>
        <customer-support></customer-support>
        
        <!-- Item 01 -->
        
        <portfolio></portfolio>
        
        <amazing-team></amazing-team>
        <carousel></carousel>
        <image-gallery></image-gallery>
        <say-hello-area></say-hello-area>
    </div>
</template>
<script>
import MainSlider from "./components/MainSlider";
import Features from "./components/Features";
import ServiceArea from "./components/ServiceArea";
import AppStart from "./components/AppStart";
import PricingCard from "./components/PricingCard";
import PricingArea from "./components/PricingArea";
import CustomerSupport from "./components/CustomerSupport";
import AmazingTeam from "./components/AmazingTeam";
import Carousel from "./components/Carousel";
import SayHelloArea from "./components/SayHelloArea";
import Portfolio from "./components/Portfolio";
import ImageGallery from "./components/ImageGallery";
export default {
  name: "components",
  components: {
    MainSlider,
    Features,
    ServiceArea,
    AppStart,
    PricingArea,
    PricingCard,
    CustomerSupport,
    AmazingTeam,
    Carousel,
    SayHelloArea,
    Portfolio,
    ImageGallery
  }
};
</script>
