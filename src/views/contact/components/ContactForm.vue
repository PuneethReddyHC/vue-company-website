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
                    <form class="form-contact contact_form" @submit.prevent="onSubmit()">
                    
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input  type="text" 
                                            v-validate="'required|min:3|max:34'"
                                            class="form-control mb-30" 
                                            name="name" 
                                            placeholder="Name"
                                            v-model="name"
                                            id="name">
                                </div>
                                <p class="help is-danger">
                                    <span v-show="fields.name && fields.name.touched && errors.has('name')">
                                        {{ errors.first('name') }}
                                    </span>
                                </p>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input class="form-control mb-30"
                                        v-validate="'required|email'"
                                        type="text"
                                        id="email"
                                        name="email"
                                        :placeholder="$t('contact:message.email_placeholder')"
                                        v-model="email">
                                </div>
                                <p class="help is-danger">
                                    <span v-show="fields.email && fields.email.touched && errors.has('email')">
                                        {{ errors.first('email') }}
                                    </span>
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input class="form-control mb-30"
                                            v-validate="'required|min:5|max:64'"
                                            type="text"
                                            :placeholder="$t('contact:message.reason_placeholder')"
                                            id="subject"
                                            v-model="subject"
                                            name="subject">
                                </div>
                                <p class="help is-danger">
                                    <span v-show="fields.subject && fields.subject.touched && errors.has('subject')">
                                        {{ errors.first('subject') }}
                                    </span>
                                </p>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <textarea
                                        v-validate="'required|min:10|max:1000'"
                                        class="form-control mb-30"
                                        :placeholder="$t('contact:message.user_message_placeholder')"
                                        style="resize: none;"
                                        id="message"
                                        name="message"
                                        v-model="message"
                                    ></textarea>
                                </div>
                                <p class="help is-danger">
                                    <span v-show="fields.message && fields.message.touched && errors.has('message')">
                                        {{ errors.first('message') }}
                                    </span>
                                </p>
                            </div>
                            <div class="pt-2 pb-2" v-if="!acceptedRecaptcha">
                                    <div class="container">
                                        <div class="row">
                                            <div type="info">
                                                <div class="col">
                                                    <div class="col-md-12">
                                                        <p v-html="$t('contact:message.google_recaptcha_title')"></p>
                                                        <p><br/>
                                                        {{ $t('contact:message.recaptcha_info') }}
                                                        <br/>
                                                        <br/>
                                                        {{ $t('contact:message.info_includes') }}
                                                        <ul>
                                                            <li>
                                                                {{ $t('contact:message.info_ip_location') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_cookies') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_mouse_clicks') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_css') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_date') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_browser_lang') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_plugins') }}
                                                            </li>
                                                            <li>
                                                                {{ $t('contact:message.info_js') }}
                                                            </li>
                                                        </ul>
                                                        <br/>
                                                        {{ $t('contact:message.recaptcha_authorization') }}</p>
                                                    </div>
                                                    <div class="mt-2">
                                                        <button class="btn btn-success btn-lg"
                                                                @click="enableGoogleRecaptcha()" type="button">
                                                            {{ $t('contact:message.recaptcha_authorization_yes') }}
                                                        </button>
                                                    </div>
                                                    <div class="mt-2">
                                                       <p> {{ $t('contact:message.or') }}</p>
                                                    </div>
                                                    <div class="mt-2">
                                                        <a :href="mailToLink"
                                                        class="btn btn-warning text-white">
                                                            {{ $t('contact:message.recaptcha_authorization_no') }}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" v-else>
                                    <div class="control">
                                        <vue-recaptcha sitekey="6LcBGlsUAAAAAA6NXsqPOtUbsk_G2ov5nafyduDk" ref="recaptcha"
                                                    v-on:verify="onCaptchaVerified($event)"></vue-recaptcha>
                                    </div>
                                    <p class="help is-danger">
                                        <span v-show="formWasSubmitted && !captchaVerified">
                                            {{ $t('contact:message.tick_box') }}
                                        </span>
                                    </p>
                                </div>
                            <div class="btn-group mt-5">
                                <div class="pr-2">
                                    <a class="btn btn-default" border @click="clearAll()">
                                        {{ $t('contact:message.clear_form') }}
                                    </a>
                                </div>
                                <div class="pl-2">
                                    <button class="btn info-border btn-info e-large" 
                                            type="submit"
                                            :disabled="(formWasSubmitted && !formIsValid) || submissionInProgress || !acceptedRecaptcha"
                            
                                    >{{ $t('contact:message.submit') }}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Single Contact Card -->
            <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="fa fa-home"></i></span>
                    <div class="media-body">
                        <h3>3rd stage, Koramangala, Bangalore.</h3>
                            <p>Rosemead, CA 91770</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="fa fa-tablet"></i></span>
                    <div class="media-body">
                        <h3>+91 953 568 8928</h3>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="fa fa-envelope"></i></span>
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
    import VueRecaptcha from 'vue-recaptcha';
    import axios from 'axios';

    const CONTACT_URL = process.env.VUE_APP_CONTACT_URL;
    const GOOGLE_RECAPTCHA_SCRIPT = 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit';
    function initialState() {
        return {
            formWasSubmitted: false,
            submissionInProgress: false,
            captchaVerified: false,
            captchaResponse: '',
            email: '',
            name:'',
            subject: '',
            message: '',
            acceptedRecaptcha: false,
        }
    }
export default {
    name: 'message',
        data: initialState,
        components: {
            VueRecaptcha,
        },
        computed: {
            formIsValid() {
                return this.errors.items.length <= 0 && this.captchaVerified === true;
            },
            mailToLink() {
                return `mailto:support@agrowdev.tech${this.mailToQueryString}`;
            },
            mailToQueryString() {
                const encodedSubject = encodeURIComponent(this.subject);
                const encodedMessage = encodeURIComponent(this.message);
                return `?subject=${encodedSubject}&body=${encodedMessage}`;
            }
        },
        methods: {
            enableGoogleRecaptcha() {
                this.injectGoogleRecaptcha();
            },
            injectGoogleRecaptcha() {
                const that = this;
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.onload = function () {
                        that.acceptedRecaptcha = true;
                        // remote script has loaded
                    };
                    js.src = GOOGLE_RECAPTCHA_SCRIPT;
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'google-recaptcha'));
            },
            onSubmit() {
                this.validateAll().then((result) => {
                    this.formWasSubmitted = true;
                    if (result) {
                        this.onSubmitWithValidForm();
                    }
                });
            },
            onSubmitWithValidForm() {
                this.submitForm();
            },
            onCaptchaVerified(response) {
                this.captchaVerified = true;
                this.captchaResponse = response;
                console.log('Captcha is valid!');
            },
            submitForm() {
                this.enableLoading();

                const requestData = {
                    name: this.name,
                    subject: this.subject,
                    email: this.email,
                    message: this.message,
                    captcha: this.captchaResponse
                };

                axios.post(CONTACT_URL, requestData)
                    .then(() => {
                        this.clearAll();
                        this.disableLoading();
                        this.$dialog.alert({
                            title: 'Hooray!',
                            message: 'Your message has been delivered. <br/> You\'ll hear from us soon.'
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        this.disableLoading();
                        this.$dialog.alert({
                            title: 'Oh no...',
                            message: 'We could not deliver your message. Please try again later or contact us at info@okuna.io'
                        });
                    });
            },
            validateAll() {
                return this.$validator.validateAll().then((result) => {
                    this.touchAll();
                    return result && this.captchaVerified;
                });
            },
            touchAll() {
                return Object.keys(this.fields).every(field => {
                    return this.fields[field].touched = true;
                });
            },
            clearAll() {
                Object.assign(this.$data, initialState());
                this.$validator.reset();
                this.$refs.recaptcha.reset()
            },
            enableLoading() {
                this.submissionInProgress = true;
                this.$Progress.start()
                // this.loadingComponent = this.$buefy.loading.open();
            },
            disableLoading() {
                this.submissionInProgress = false;
                this.$Progress.finish()
                // this.loadingComponent.close();
            }
        }
};
</script>
<style>
</style>
