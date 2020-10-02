<template>
    <section class="contact-section">
    <div class="container">
        <div class="row justify-content-between">
            <!-- Contact Form -->
            <div class="col-12 col-lg-8">
                <div class="mb-80">
                    <div class="contact-title">
                        <h4>Thank you for your interest. <br>Please fill out the form below to inquire about our work in Digital.</h4>
                    </div>
                    <form class="form-contact contact_form" action="" method="post">
                    
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-30" name="username" placeholder="Name" required id="id_username">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="email" class="form-control mb-30" name="email" placeholder="Email" required id="id_email">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-30" name="subject" placeholder="Subject" required id="id_subject">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <textarea class="form-control mb-30" name="message" rows="8" cols="80" placeholder="Message"  required id="id_message"></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="genric-btn info-border e-large">Contact Us</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Single Contact Card -->
            <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-home"></i></span>
                    <div class="media-body">
                        <h3>3rd stage, Koramangala, Bangalore.</h3>
                            <p>Rosemead, CA 91770</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                    <div class="media-body">
                        <h3>+91 953 568 8928</h3>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-email"></i></span>
                    <div class="media-body">
                        <h3>support@agrowdev.tech</h3>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
             </div>
        </div>

        <div class="row">
            <!-- Google Maps -->
            <div class="col-12">
                <div class="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11956.9355465873!2d24.0768412544878!3d56.9550599906977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2z4Kaw4Ka_4KaX4Ka-LCDgprLgp43gpq_gpr7gpp_gp43gpq3gpr_gpoY!5e0!3m2!1sbn!2sbd!4v1543911160102" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {};
</script>
<style>
</style>
