<template>
    <div>
        <portfolio-buttons></portfolio-buttons>
        <portfolio></portfolio>
        
    </div>
</template>
<script>

import PortfolioButtons from "./components/PortfolioButtons";
import Portfolio from "./components/Portfolio";

export default {
  name: "portfolio-page",
  components: {
    PortfolioButtons,
    Portfolio
  }
};
</script>
