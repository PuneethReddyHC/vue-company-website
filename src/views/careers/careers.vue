<template>
    <div>
    <div class="mt-120">
            <div class="container">
                <!-- Section-tittle -->
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7">
                        <div class="section-tittle text-center mt-50">
                            <h2 class="heading">Job <span class="text-success">Listing</span> Blogs.
                            </h2>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </div>
        <filter-button v-b-toggle.sidebar-1 class="filter-btn d-block d-sm-block d-md-none"></filter-button>
        
        <b-sidebar id="sidebar-1" text-variant="light" shadow>
            <div class="px-3 py-2">
                <job-filters></job-filters>
            </div>
        </b-sidebar>
        <div class="job_listing_area">
        <div class="container">
            <div class="row">
                <div class="d-none d-sm-none d-md-block col-xl-3 col-lg-3 col-md-4">
                    <job-filters></job-filters>    
                </div>
                <div class="col-xl-9 col-lg-9 col-md-8">
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist blog-bg ">
                            <div class="row align-items-center">
                              <div class="col-md-6">
                                    <h4>Job Listing</h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="serch_cat d-flex justify-content-end">
                                       <div class="select-job-items select w-50">
                                            <b-form-select v-model="selected">
                                                <b-form-select-option :value="null">Please select</b-form-select-option>
                                                <b-form-select-option value="a">Option A</b-form-select-option>
                                                <b-form-select-option value="b" disabled>Option B</b-form-select-option>
                                                <b-form-select-option-group label="Grouped options">
                                                    <b-form-select-option :value="{ C: '3PO' }">Option with</b-form-select-option>
                                                    <b-form-select-option :value="{ R: '2D2' }">Another option</b-form-select-option>
                                                </b-form-select-option-group>
                                            </b-form-select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="job_lists m-0">
                        <div class="row">

                        <input type="hidden" name="csrfmiddlewaretoken" value="BtK0Wfm2HcehfN1n18GccDDNc2uwPAQnVzhwWdKOTMEjonMXSPrpU4DxZpQwiyn0">


                            <div class="col-lg-12 col-md-12">
                                <job-card></job-card>
                            </div>
                            
                        </div>
                        <job-pagination></job-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import JobCard from "./components/JobCard";
import JobFilters from "./components/JobFilters";
import JobPagination from "./components/JobPagination";
import FilterButton from "./components/FilterButton";
export default {
  name: "careers-page",
  data() {
      return {
        selected: null,
      }
    },
  components: {
    JobCard,
    JobPagination,
    FilterButton,
    JobFilters
  },
  mounted(){
     this.selectMethod();
  },
  methods:{
      selectMethod(){
           
      }
  }
};
</script>
<style lang="scss">
.filter-btn{
    z-index: 100;
    top: 90px;
    left: 0;
}
.custom-select {
    
    color: var(--slicknav__font);
    background: #2c3e50;
    
}
  select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 100%;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
}
select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #34495e;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.bg-light {
    background-color: var(--card__background) !important;
    
}

</style>