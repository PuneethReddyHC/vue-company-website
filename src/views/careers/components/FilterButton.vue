<template>
    <div class="filter-icon">
        <svg class="ico ico-small" id="ico-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <path class="st0" d="M11.1 38H8.9C7.3 38 6 39.3 6 40.9v2.2C6 44.7 7.3 46 8.9 46h2.2c1.6 0 2.9-1.3 2.9-2.9v-2.2c0-1.6-1.3-2.9-2.9-2.9zm0-12H8.9C7.3 26 6 27.3 6 28.9v2.2C6 32.7 7.3 34 8.9 34h2.2c1.6 0 2.9-1.3 2.9-2.9v-2.2c0-1.6-1.3-2.9-2.9-2.9zM11 14H9c-1.6 0-3 1.3-3 3v2c0 1.6 1.3 3 3 3h2c1.6 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm41 2H20c-1.1 0-2 .9-2 2s.9 2 2 2h32c1.1 0 2-.9 2-2s-.9-2-2-2zm-5 24H20c-1.1 0-2 .9-2 2s.9 2 2 2h27c1.1 0 2-.9 2-2s-.9-2-2-2zm-27-8h22c1.1 0 2-.9 2-2s-.9-2-2-2H20c-1.1 0-2 .9-2 2s.9 2 2 2z"/>
        </svg>
    </div>

</template>
<script>
export default {
  data() {
      return {
    
      }
    },
    methods: {
      
    }
  
};
</script>
<style scoped>

.filter-icon {
  cursor: pointer;
  width: 70px;
  height: 50px;
  position: fixed;
  -webkit-border-radius: 53px;
  -moz-border-radius: 53px;
  border-radius: 53px;
  padding: 10px 20px;
  -webkit-box-shadow: 0px 10px 30px 0px rgba(73, 226, 187, 0.5);
  -moz-box-shadow: 0px 10px 30px 0px rgba(73, 226, 187, 0.5);
  box-shadow: 0px 10px 30px 0px rgba(73, 226, 187, 0.5);
}
.filter-icon:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(73, 226, 187, 1);
  -webkit-border-radius: 53px;
  -moz-border-radius: 53px;
  border-radius: 53px;
  z-index: -1;
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  transition: all .2s ease-out;
}
.filter-icon svg {
  z-index: 0;
}
.filter-icon:hover:after {
  transform: scale(1.2);
  background-color: rgba(73, 226, 187, 1);
  -webkit-box-shadow: 0px 20px 50px 0px rgba(73, 226, 187, 0.3);
  -moz-box-shadow: 0px 20px 50px 0px rgba(73, 226, 187, 0.3);
  box-shadow: 0px 20px 50px 0px rgba(73, 226, 187, 0.3);
}


.ico-small {
  width: 36px;
}

#ico-filter  .st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #fff;
}

</style>
