<template>
<div>
    <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Üye ol</h3>

            <div class="form-outline mb-2">
              <input type="text" v-model="ad" class="form-control form-control-lg" placeholder="Adınızı giriniz"/>
            </div>
            <div class="form-outline mb-2">
              <input type="text" v-model="soyad"  class="form-control form-control-lg" placeholder="Soyadınızı giriniz"/>
            </div>
            <div class="form-outline mb-4">
              <input type="email" v-model="email" @input="validateEmail"  class="form-control form-control-lg" placeholder="E-postanızı giriniz"/>
              <span v-if="!emailIsValid&&email" class="text-danger d-flex">Geçersiz E-posta adresi</span>

            </div>

            <div class="form-outline mb-2">
              <input v-model="pass" type="password"  class="form-control form-control-lg" placeholder="Şifrenizi giriniz"/>
            </div>
            <div class="form-outline mb-2">
              <input v-model="pass2" type="password"  class="form-control form-control-lg" placeholder="Şifrenizi tekrar giriniz"/>
            </div>
            
            <span v-if="pass!=pass2" class="text-danger d-flex">Girilen parolalar aynı olmak zorundadır</span>
            <div>            
            <button @click="goToLogin()" class="btn btn-secondary btn-lg btn-block p-2 g-col-6 mt-1" type="submit" style="margin-right: 20px;">Giriş Yap</button>
            <button @click="register()" class="btn btn-primary btn-lg btn-block p-2 g-col-6" type="button">Üye Ol</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue";


export default  Vue.extend({
  name: 'KayitOl',
  mounted () {
  },
  methods:{
     register(){
axios
      .post('http://localhost:5116/api/Kullanici/KayitOl',{
        ad:this.ad,
        soyad:this.soyad,
        email:this.email,
        parola:this.pass,
      })
      .then(response =>
      {
        this.user=response.data
        console.log(this.user)
      })
    },
    validateEmail() {
      // Basit bir e-posta doğrulama regex'i kullanabilirsiniz.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailIsValid = emailRegex.test(this.email);
    },
    goToLogin()
    {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  data() {
    return {
      ad:"",
      soyad:"",
      pass:"",
      pass2:"",
      email:"",
      emailIsValid:false,
      user:null
    };
  }})
</script>
  
  <style>
  .container{
    margin-top:auto;
  }
  </style>