<template>
    <article class="blog_item post-2"> 
        <card class="single-card" id="post-2 ">
                <div class="blog_item_img">
                    <div class="">
                        <b-carousel id="carousel1" controls>
                                    <!-- Text slides with image -->
                                    
                                    <b-carousel-slide class="card-img" img-src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873374-image4.png"></b-carousel-slide>
                                    <b-carousel-slide class="card-img" img-src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873290-image3.png"></b-carousel-slide>
                                    <b-carousel-slide class="card-img" img-src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873126-image1.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                    <a href="#" class="blog_item_date">
                        <h3>10</h3>
                        <p>Aug</p>
                    </a>
                </div>
            
        
            <div class="blog_details" style="padding:20px">
                <a class="d-inline-block" href="/article/2020/8/10/2/let-s-debug-a-node-js-application.html">
                    
                        <h3>Let's Debug a Node.js Application</h3>
                    
                </a>
                <p>
                
                    <a href="/category/heroku.html" rel="category tag" title="View all articles categorised by heroku"><i class="fas fa-filter"></i> heroku </a>
                
                </p>
                <p class="card-text">There are always challenges when it comes to debugging applications. Node.js' asynchronous workflows add an extra layer of complexity to this arduous process. Although there have been some updates made to the V8 engine in order to easily access async...</p>
                
            
                <div class="author mb-4 d-flex align-items-center">
                    <a href="#" class="img-center" style="background-image: url('img/theme/1.png');"></a>
                    <div class="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="/author/puneethreddyhc.html" title="View all articles published by puneethreddyhc" rel="author"><span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                    <span itemprop="name">puneethreddyhc</span></span></a>, <span>Aug 10, 2020</span></h3>
                    </div>
                </div>
                
            <!-- .entry-meta -->
                <p class="tagcloud">
                        
                    <a href=" /tag/economy.html" rel="tag" title="View all articles tagged with economy">economy</a>
                </p>
                <p class="read-more" style="margin-bottom:6rem;">
                    <a href="/article/2020/8/10/2/let-s-debug-a-node-js-application.html" class="genric-btn info-border circle arrow">Continue Reading</a>
                </p>
            </div>
        </card>
    </article>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>

.tagcloud a {
    text-transform: uppercase;
    display: inline-block;
    padding: 4px 10px;
    margin-bottom: 7px;
    margin-right: 4px;
    border-radius: 4px;
    color: #000000;
    border: 1px solid #ccc;
    font-size: 11px;
}
.blog_details .author .img {
    width: 60px;
    height: 60px;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}

.blog_details .author .img {
    width: 80px;
    height: 80px;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}
.blog_details .img {
    display: block;
    height: 400px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
}
.author a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.blog_details .author .info {
    width: calc(100% - 60px);
}

.blog_details .author .info {
    width: calc(100% - 80px);
}
.blog_details .author span {
    font-size: 15px;
    font-weight: 300;
}
.blog_details .author .info h3 {
    font-size: 18px;
}

.blog_details .author .info h3 {
    font-size: 20px;
    margin-bottom: 0;
    font-weight: 400;
}
.blog_details .author .info h3 span {
    color: #000000;
}
.blog_details .text h3 {
    font-weight: 700;
    font-size: 28px;
}

.blog_details .author span {
    font-size: 18px;
    color: #b3b3b3;
}

.blog_details h3 a {
    color: #000000;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-family: "Poppins", Arial, sans-serif;
}
.blog_details h3 {
    font-weight: 700;
    font-size: 28px;
    
}
.card-img {
    width: 100%;
    border-radius: calc(.25rem - 1px);
}
@media only screen and (max-width: 350px) {
    .card-img {
     height:155px;
    }
  }
  @media only screen and (max-width: 476px) {
    .card-img {
     height:220px;
    }
  }
  @media only screen and (max-width: 760px) {
    .card-img {
     height:260px;
    }
  }
  @media only screen and (max-width: 980px) {
    .card-img {
     height:350px;
    }
  }
  @media only screen and (max-width: 1800px) {
    .card-img {
     height:350px;
    }
  }
</style>
