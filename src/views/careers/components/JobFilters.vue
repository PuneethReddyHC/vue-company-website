<template>
<div>
    

    <div class="job-category-listing mb-50">
        <!-- single one -->
        <div class="row">
            <div class="col-12">
                    <div class="small-section-tittle2 mb-45">
                    <div class="ion"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="12px">
                    <path fill-rule="evenodd" fill="rgb(27, 207, 107)" d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"></path>
                    </svg>
                    </div>
                    <h4>Filter Jobs</h4>
                </div>
            </div>
        </div>
        <div class="single-listing">
           <div class="small-section-tittle2">
                 <h4>Job Category</h4>
           </div>
            <!-- Select job items start -->
            <div class="select-job-items2 select">
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
            
            
            <!--  Select job items End-->
            <!-- select-Categories start -->
            <div id="jobtype" class="select-Categories pt-80 pb-50">
                <div class="small-section-tittle2">
                    <h4>Job Type</h4>
                </div>
                <label class="container">Full Time
                    <input type="checkbox" value="1" name="jobtype1" v-model="jobtype">
                    <span class="checkmark"></span>
                </label>
                <label class="container" >Part Time
                    <input type="checkbox" value="2" name="jobtype2" v-model="jobtype">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Internship
                    <input type="checkbox" value="3" name="jobtype3" v-model="jobtype">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Remote
                    <input type="checkbox" value="4" name="jobtyp4" v-model="jobtype">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Freelance
                    <input type="checkbox" value="5" name="jobtype5" v-model="jobtype">
                    <span class="checkmark"></span>
                </label>
            </div>
            <!-- select-Categories End -->
        </div>
        <!-- single two -->
        <div class="single-listing">
           <div class="small-section-tittle2">
                 <h4>Job Location</h4>
           </div>
            <!-- Select job items start -->
            <div class="select-job-items2 select">
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
            <!--  Select job items End-->
            <!-- select-Categories start -->
            
            <div class="select-Categories pt-80 pb-50">
                <div class="small-section-tittle2">
                    <h4>Experience</h4>
                </div>
                <label class="container">1-2 Years
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">2-3 Years
                    <input type="checkbox" checked="checked active">
                    <span class="checkmark"></span>
                </label>
                <label class="container">3-6 Years
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">6-more..
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
            <!-- select-Categories End -->
        </div>
        <!-- single three -->
        <div class="single-listing">
            <!-- select-Categories start -->
            <div class="select-Categories pb-50">
                <div class="small-section-tittle2">
                    <h4>Posted Within</h4>
                </div>
                <label class="container">Any
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Today
                    <input type="checkbox" checked="checked active">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Last 2 days
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Last 3 days
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Last 5 days
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Last 10 days
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
            <!-- select-Categories End -->
        </div>
        
        <div class="single-listing">
            <!-- Range Slider Start -->
            <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                <div class="small-section-tittle2">
                    <h4>Filter Jobs</h4>
                </div>
                <div class="widgets_inner">
                    <div class="range_item">
                        <!-- <div id="slider-range"></div> -->
                        <span class="irs js-irs-0"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: hidden;">tk. 0</span><span class="irs-max" style="visibility: visible;">tk. 1.000</span><span class="irs-from" style="visibility: visible; left: 0%;">tk. 0</span><span class="irs-to" style="visibility: visible; left: 35.2601%;">tk. 500</span><span class="irs-single" style="visibility: hidden; left: 4.33526%;">tk. 0 - tk. 500</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 4.33526%; width: 45.6647%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to type_last" style="left: 45.6647%;"></span></span><input type="text" class="js-range-slider irs-hidden-input" value="" readonly="">
                        <div class="d-flex align-items-center">
                        <div class="price_text">
                            <p>Price :</p>
                        </div>
                        <div class="price_value d-flex justify-content-center">
                            <input type="text" class="js-input-from" id="amount" readonly="">
                            <span>to</span>
                            <input type="text" class="js-input-to" id="amount" readonly="">
                        </div>
                        </div>
                    </div>
                </div>
            </aside>
          <!-- Range Slider End -->
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
      return {
        
        checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
        },
        jobtype: ['1'],
        arrayOfObjects: ['puneeth','heam'],
        object: {
            name: 'Object Name',
        }
      }
    },
    methods: {
      shouldBeChecked(val) {
        return this.jobtype.includes(val)
      },
      methodToRunOnSelect(payload) {
            this.object = payload;
          },
      updateVals(e) {
        let isChecked = e.target.checked
        let val = e.target.value

        if (isChecked) {
          this.jobtype.push(val)
        } else {
          this.jobtype.splice(this.jobtype.indexOf(val), 1)
        }
        
      }
    }
  
};
</script>
<style lang="scss">


</style>
