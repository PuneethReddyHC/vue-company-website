<template>
    <div class="single-footer-caption mb-50">
        <div class="footer-tittle">
            <h4>Newsletter</h4>
            <div class="footer-pera footer-pera2">
             <p>Heaven fruitful doesn't over lesser in days. Appear </p>
         </div>
         <!-- Form -->
         <div class="footer-form">
             <div id="mc_embed_signup">
                 <form @submit.prevent="sendEmail" novalidate>
                     
                     <span class="input-email is-rainbow"
                                          v-bind:class="{'success': subscribeSuccessful}">
                        <input type="email" 
                                name="email" 
                                v-validate="'required|email'"
                                id="newsletter-form-email" 
                                placeholder=" Email Address " 
                                class="placeholder hide-on-focus" 
                                onfocus="this.placeholder = ''" 
                                onblur="this.placeholder = ' Email Address '"
                                v-bind:disabled="emailSendClicked"
                                v-model="email">
                           <span></span>
                        </span>
                     <div class="form-icon">
                         <button type="submit" 
                                name="submit" 
                                id="newsletter-submit" 
                                class="email_icon newsletter-submit button-contactForm"
                                v-bind:class="{'success': subscribeSuccessful}">
                                <span v-show="!emailSendClicked"><i class="fa fa-paper-plane"></i></span>
                                <span v-show="emailSendClicked && !subscribeSuccessful"><i
                                    class="fa fa-spinner is-loading"></i></span>
                                <span class="animated fadeIn" v-show="subscribeSuccessful"><i class="fa fa-check"></i></span>
                        </button>
                     </div>
                     
                     <div class="mt-10 info"></div>
                     <span v-show="fields.email && fields.email.touched && errors.has('email')"
                              class="error-message has-text-danger is-size-7"><span class="icon is-small is-valign-top"
                                                                                    > 😕 </span>&nbsp;&nbsp; {{ errors.first('email') }}</span>
                        <span class="error-message has-text-danger is-size-7" v-show="errorEmail"><span
                            class="icon is-small is-valign-top" > 😕 </span>&nbsp;&nbsp;{{errorEmail}}</span>
                        <span class="success-message" v-show="subscribeSuccessful"><span class="icon is-small"
                                                                                         >🎉</span><span v-html="$t('home:beta_container.success', { count: count + 1 })"></span></span>
                 </form>
             </div>
         </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    const MAILCHIMP_SUBSCRIBE_URL = process.env.VUE_APP_MAILCHIMP_SUBSCRIBE_URL;

    export default {
        name: 'mail-chip',
        data() {
            return {
                emailSendClicked: false,
                subscribeSuccessful: false,
                email: '',
                errorEmail: '',
                count: 0,
            }
        },
        methods: {
            postToMailChimp() {
                console.log('email'+this.email);
                axios.post(MAILCHIMP_SUBSCRIBE_URL, {
                    email: this.email
                })
                    .then((resp) => {
                        this.subscribeSuccessful = true;
                        this.errorEmail = '';
                        this.count = resp.data.count;
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 400) {
                            this.errorEmail = error.response.data.email[0];
                        } else {
                            this.errorEmail = this.$t('home:beta_container.server_error');
                        }
                        this.emailSendClicked = false;
                    });
            },
            validateAll() {
                return this.$validator.validateAll().then((result) => {
                    this.touchAll();
                    return result && !this.subscribeSuccessful
                });
            },
            touchAll() {
                return Object.keys(this.fields).every(field => {
                    return this.fields[field].touched = true;
                });
            },
            sendEmail() {
                this.validateAll().then((result) => {
                    if (result) {
                        this.emailSendClicked = true;
                        console.log('email'+this.email);
                        this.postToMailChimp();
                    }
                });
            }
        }
    };
</script>
<style lang="scss">

    .success-message {
        margin-top: 1em;
        font-weight: bold;
        display: inline-block;
    }

    .error-message {
        display: inline-block;
        margin-top: 1em;
    }
    .email-container {
        position: relative;
        padding: 0 20%;

        @media(max-width: 768px) {
            padding: 0 10%;
        }
    }
</style>
