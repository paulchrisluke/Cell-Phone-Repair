<template>
  <v-container-fluid>
    <v-card dark height="400px">
      <v-img :src="content.featuredImage" height="400px" position="center">
      <v-container>
        <img v-if="content.images.length > 0" :src="content.images[0].url" class="hidden-sm-and-down" style="position:absolute; bottom:30px; width:400px;">
        <img v-if="content.images.length > 0" :src="content.images[0].url" class="hidden-md-and-up" style="position:absolute; bottom:30px; width:200px;">
      </v-container>
      </v-img>
    </v-card>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="mt-5 mb-3">
          <h1 style="font-size: 36px; line-height: 49px; color: #FFFFFF;">
            {{content.title}}
          </h1>
        </v-flex>
        <v-flex xs12>
          <p style="font-size: 16px; line-height: 28px; color: #B9BCC1;">
            {{content.h2}}
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
      <carousel loop autoplay dots :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
        <v-card
          color="transparent"
          dark
          flat
          class="ma-1"
        >
          <v-card-title style="margin:0; padding:0;">
            <v-flex xs12 class="mb-1">
              <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                Cole Graham
              </h3>
              <v-flex style="margin-left:34px;">
                <v-icon size="14px" style="width:14px;" color="#D2BC6D">star star star star star</v-icon>
              </v-flex>
            </v-flex>
            <v-flex xs12 class="mb-3">
              <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">June 11, 2019</p>
            </v-flex>
          </v-card-title>
          <v-card-text style="margin:0; padding:0;">
            <v-flex xs12 class="mb-3 mr-3">
              <p style="font-size: 16px; color: #B9BCC1;">
                Went in today to get my charging port fixed on my phone and it turns out all they had to do was clean it out. The staff is super helpful and incredibly nice; it’s definitely worth fighting Gunbarrel traffic to go here!
              </p>
            </v-flex>
          </v-card-text>
        </v-card>
        <v-card
          color="transparent"
          dark
          flat
          class="ma-1"
        >
          <v-card-title style="margin:0; padding:0;">
            <v-flex xs12 class="mb-1">
              <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                Missy Foreshee
              </h3>
              <v-flex style="margin-left:34px;">
                <v-icon size="14px" style="width:14px;" color="#D2BC6D">star star star star star</v-icon>
              </v-flex>
            </v-flex>
            <v-flex xs12 class="mb-3">
              <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">June 19, 2019</p>
            </v-flex>
          </v-card-title>
          <v-card-text style="margin:0; padding:0;">
            <v-flex xs12 class="mb-3 mr-3">
              <p style="font-size: 16px; color: #B9BCC1;">
                They are awesome! Great price! Fast and very reliable! Did great work on my iPad that the screen was shattered! Got it back same day within a few hours of taking it in! I have sent several people here because of how friendly and fast they are!
              </p>
            </v-flex>
          </v-card-text>
        </v-card>
        <v-card
          color="transparent"
          dark
          flat
          class="ma-1"
        >
          <v-card-title style="margin:0; padding:0;">
            <v-flex xs12 class="mb-1">
              <h3 style="font-size: 20px; color: #D8DADE; margin:0; padding:0;">
                Angie Arnold
              </h3>
              <v-flex style="margin-left:34px;">
                <v-icon size="14px" style="width:14px;" color="#D2BC6D">star star star star star</v-icon>
              </v-flex>
            </v-flex>
            <v-flex xs12 class="mb-3">
              <p style="font-size: 16px; color: #B9BCC1; margin:0; padding:0;">June 15, 2019</p>
            </v-flex>
          </v-card-title>
          <v-card-text style="margin:0; padding:0;">
            <v-flex xs12 class="mb-3 mr-3">
              <p style="font-size: 16px; color: #B9BCC1;">
                I highly recommend this store! I was having a problem with my phone today and a friend recommended CPR Cell Phone Repair. The staff there was super friendly and my phone repair was completed in a few minutes!
              </p>
            </v-flex>
          </v-card-text>
        </v-card>
      </carousel>
    </v-container>
    <v-container>
      <v-layout row wrap justify-center justify-space-between>
        <v-flex xs12 sm5 md4 class="mb-3">
          <img v-if="content.images.length > 0" :src="content.images[1].url" style="width:245px; height:172px;">
        </v-flex>
        <v-flex xs12 sm7 md8 class="mb-3">
          <p style="font-size: 16px; color: #B9BCC1;" class="mt-5">
            {{content && content.modules && content.modules.hotel && content.modules.hotel.gettingAround}}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container-fluid>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { 
    carousel 
  },
  data(){
    return{
      valid:false,
      content:{
        images:[]
      },

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
  },
  created() {
    this.$http.get('https://stagingapi.whynot.earth/api/v0/pages/slug/cellphonerepair/Phone-Screen-Replacement').then(function(data){
      this.content=data.body;
    });
  },
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
