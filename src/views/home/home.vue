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
  }
};
</script>
<style>

</style>