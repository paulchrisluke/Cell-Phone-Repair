<template>
  <v-container-fluid>
    <v-card dark height="400px">
      <v-img :src="cracked_phone" height="400px" position="center">
      </v-img>
    </v-card>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="mt-5 mb-3">
          <h1 style="font-size: 36px; line-height: 49px; color: #FFFFFF;">
            Phone Screen Replacement
          </h1>
        </v-flex>
        <v-flex xs12>
          <p style="font-size: 16px; line-height: 28px; color: #B9BCC1;">
            When you’re in need of an iPad repair in Chattanooga, TN, rely on the technicians of Cell Phone Repair Chattanooga. From watching movies and browsing the Internet to sending emails and completing school work, we understand that you depend on your iPad for a lot. That’s why we work quickly to return your iPad to its original state as soon as possible. Contact CPR in Chattanooga today for a free estimate on your iPad repair.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="width:329px;">
      <v-layout>
        <v-flex xs12>
          <v-divider style="background-color:#3D424E;"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="mb-3">
          <h2 style="font-size: 28px; line-height: 38px; color: #D8DADE;">
            Get Your Estimate Now
          </h2>
        </v-flex>
        <v-flex xs12>
          <p style="font-size: 16px; line-height: 28px; color: #B9BCC1;">
            From fixing cracked screens to troubleshooting charging issues, the technicians of Cell Phone Repair Chattanooga have the tools and professional experience for to perform fast and efficient repairs on your iPad. Bring your iPad Mini 4 in today for any repair you need.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="width:591px;" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form name="Contact" method="post" netlify ref="form" action="/thanks" v-model="valid" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact"/>
            <v-flex xs12>
            <v-layout row wrap justify-center justify-space-between>
              <v-flex xs12 md6 sm6>
                <v-text-field
                  v-model="firstName"
                  outline
                  label="First Name"
                  name="first_name"
                  color="#B9BCC1"
                  required
                  dark
                  :rules="firstNameRules"
                >
                  <!-- <v-icon slot="append" color="#B9BCC1">person</v-icon> -->
                </v-text-field>
              </v-flex>
              <v-flex xs12 md6 sm6>
                <v-text-field
                  v-model="lastName"
                  outline
                  label="Last Name"
                  name="last_name"
                  color="#B9BCC1"
                  required
                  dark
                  :rules="lastNameRules"
                >
                  <!-- <v-icon slot="append" color="#B9BCC1">person</v-icon> -->
                </v-text-field>
              </v-flex>
            </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="email"
                outline
                color="#B9BCC1"
                label="E-Mail"
                name="email"
                required
                dark
                :rules="emailRules"
              >
              <!-- <v-icon slot="append" color="#B9BCC1">email</v-icon> -->
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="phone"
                outline
                label="Phone Number"
                name="phone"
                color="#B9BCC1"
                required
                dark
                :rules="phoneRules"
              >
                <!-- <v-icon slot="append" color="#B9BCC1">local_phone</v-icon> -->
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-overflow-btn
                :items="dropdown_edit"
                v-model="phoneModel"
                color="#B9BCC1"
                required
                dark
                outline
                style="padding:0; margin:0;"
                :rules="modelRules"
              >
              <p slot="label" style="position:absolute; left:0;">iPhone Model</p>
              </v-overflow-btn>
              <input hidden name="model" :value="phoneModel">
            </v-flex>
            <v-flex xs12 class="mb-4">
              <v-textarea
                outline
                hide-details
                dark
                v-model="message"
                color="#B9BCC1"
                name="message"
                label="Tell Us About Your Problem"
              >
              </v-textarea>
            </v-flex>
            <v-flex xs12 class="mt-4 mb-4">
              <v-btn 
                dark 
                block 
                large 
                depressed 
                style="padding:0; margin:0; background: #FF5E5B; box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 4px; text-transform:capitalize; font-size: 16px; height:50px; max-width:276px;" 
                color="#4B7F52"
                type="submit"
                :disabled="!valid"
              >
                Get Your Free Estimate<v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-flex>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="mb-4 ma-1">
          <h2 style="font-size: 28px; line-height: 38px; color: #D8DADE;">
            Customer Reviews
          </h2>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <!-- <v-layout row wrap justify-space-between>
          <v-flex xs12 sm6 md4> -->
          <carousel loop center dots :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
            <v-card
              color="transparent"
              dark
              flat
              style="margin:0; padding:0;"
            >
              <v-card-title style="margin:0; padding:0;">
                <v-flex xs6 class="mb-3">
                  <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                    John
                  </h3>
                </v-flex>
                  <v-spacer></v-spacer>
                <v-flex xs6 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">September 2016</p>
                </v-flex>
              </v-card-title>
              <v-card-text style="margin:0; padding:0;">
                <v-flex xs12 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </v-flex>
              </v-card-text>
            </v-card>
          <!-- </v-flex> -->
          <!-- <v-flex xs12 sm6 md4> -->
            <v-card
              color="transparent"
              dark
              flat
              style="margin:0; padding:0;"
            >
              <v-card-title style="margin:0; padding:0;">
                <v-flex xs6 class="mb-3">
                  <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                    John
                  </h3>
                </v-flex>
                  <v-spacer></v-spacer>
                <v-flex xs6 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">September 2016</p>
                </v-flex>
              </v-card-title>
              <v-card-text style="margin:0; padding:0;">
                <v-flex xs12 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </v-flex>
              </v-card-text>
            </v-card>
          <!-- </v-flex>
          <v-flex xs12 sm6 md4> -->
            <v-card
              color="transparent"
              dark
              flat
              style="margin:0; padding:0;"
            >
              <v-card-title style="margin:0; padding:0;">
                <v-flex xs6 class="mb-3">
                  <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                    John
                  </h3>
                </v-flex>
                  <v-spacer></v-spacer>
                <v-flex xs6 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">September 2016</p>
                </v-flex>
              </v-card-title>
              <v-card-text style="margin:0; padding:0;">
                <v-flex xs12 class="mb-3">
                  <p style="font-size: 16px; color: #B9BCC1;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </v-flex>
              </v-card-text>
            </v-card>
          <!-- </v-flex> -->
        <!-- </v-layout> -->
          </carousel>
      </v-flex>
    </v-container>
    <v-container>
      <v-layout row wrap justify-center justify-space-between>
        <v-flex xs12 sm4 md4 class="mb-5">
          <img src="../assets/lifetime-warranty-seal-transparent.svg">
        </v-flex>
        <v-flex xs12 sm8 md8 class="mb-5">
          <p style="font-size: 16px; color: #B9BCC1;" class="mt-4">
            At Cell Phone Repair Chattanooga, we offer a limited lifetime warranty on all of our repairs. If the original repair fails because of the quality of a part we installed or due to the workmanship in the repairing of the device, Cell Phone Repair Chattanooga will fix it for FREE. No questions asked. You can’t beat a warranty like that!
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container-fluid>
</template>

<script>
import seal from '../assets/lifetime-warranty-seal-transparent.svg'
import cracked_phone from '../assets/cracked_phone.png'
import carousel from 'vue-owl-carousel'

export default {
  components: { 
    carousel 
  },
  data(){
    return{
      valid:false,
      seal,
      cracked_phone,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      phoneModel: '',
      firstNameRules: [
        v => !!v || 'First Name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
      ],
      modelRules: [
        v => !!v || 'Model Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      phoneRules: [
        v => !!v || 'Phone no. is required',
      ],

      dropdown_edit: [
        { text: 'iPhone X' },
        { text: 'iPhone XS' },
        { text: 'iPhone XS Max' },
        { text: 'iPhone XR' },
        { text: 'iPhone 8 Plus' },
        { text: 'iPhone 8' },
        { text: 'iPhone 7 Plus' },
        { text: 'iPhone 7' },
        { text: 'iPhone 6S' },
        { text: 'iPhone 6' },
        { text: 'iPhone 5SE' },
        { text: 'iPhone 5S' },
        { text: 'iPhone 5C' },
        { text: 'iPhone 5' },
      ]
    }
  }
}
</script>

<style>
.v-input__icon--append{
  position: absolute;
  top:15px;
  right:0px;
}

@media only screen and (max-width: 600px) {
  .container{
    max-width: 292px;
  }
}
@media only screen and (min-width: 768px) {
  .container{
    max-width: 600px;
  }
}
@media only screen and (min-width: 1024px) {
  .container{
    max-width: 900px;
  }
}
html {
  scroll-behavior: smooth;
}
</style>
