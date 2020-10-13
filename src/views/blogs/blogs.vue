<template>
<div>
    <div class="mt-120">
        <div class="container">
            <!-- Section-tittle -->
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="section-tittle text-center mt-50">
                        <h2 class="heading">Our <span class="text-success">Latest</span> Blogs.
                        </h2>
                    </div>
                </div>
                <div class="col-lg-4 blog_right_sidebar">
                
                <aside class="single_sidebar_widget search_widget">
                    <form role="search" method="get" action="/search/">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <input type="text" name="q" id="q" autocomplete="off" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                <div class="input-group-append">
                                    <button class="btns" type="submit" id="searchsubmit"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </aside>

                </div>
            </div>
        </div>
    </div>
    <section class="blog_area ftco-section section-padding single-post-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">
                
                    <div class="blog_left_sidebar">

                        <blog-card></blog-card>

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        
                        
                            <blog-sidebar></blog-sidebar>
                          
                        
                        </div>
                    </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>

import BlogCard from "./components/BlogCard";
import BlogSidebar from "./components/BlogSidebar";

export default {
  name: "blogs-page",
  components: {
    BlogCard,
    BlogSidebar
  }
};
</script>
<style lang="scss">
.form-control {
    background-color: transparent;
}

</style>