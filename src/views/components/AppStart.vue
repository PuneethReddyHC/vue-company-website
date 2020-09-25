<template>
    <section class="applic-apps section-padding2">
            <div class="container-fluid">
                <div class="row">
                    <!-- slider Heading -->
                    <div class="col-xl-4 col-lg-4 col-md-8">
                        <div class="single-cases-info mb-30">
                            <h3>Applic Apps<br> Screenshot</h3>
                            <p>Lorem ipsum dolor sit amet, consecadipiscing elit, sed do eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maecenasan lacus vel facilisis. </p>
                        </div>
                    </div>
                    <!-- OwL -->
                    <div class="col-xl-8 col-lg-8 col-md-col-md-7">
                        <div class="app-active owl-carousel"> 
                            <div class="single-cases-img">
                                <img src="@/assets/img/gallery/App1.png" alt="">
                            </div>
                            <div class="single-cases-img">
                                <img src="@/assets/img/gallery/App2.png" alt="">
                            </div>
                            <div class="single-cases-img">
                                <img src="@/assets/img/gallery/App3.png" alt="">
                            </div>
                            <div class="single-cases-img">
                                <img src="@/assets/img/gallery/App2.png" alt="">
                            </div>
                            <div class="single-cases-img">
                                <img src="@/assets/img/gallery/App1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
export default {
    mounted(){
        var client_list = $('.app-active');
        if(client_list.length){
        client_list.owlCarousel({
            slidesToShow: 3,
            slidesToScroll: 1,
            loop: true,
            autoplay:true,
            speed: 3000,
            smartSpeed:2000,
            dots: false,
            margin: 15,
            nav  : false,
            navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            autoplayHoverPause: true,
            responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992 : {
                items: 2
            },
            1200:{
                items: 4
            }
            }
        });
        }
    }
};
</script>
<style>


</style>
