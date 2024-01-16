<template>
    <div>
      <section class="vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
  
              <h3>Hoşgeldiniz</h3>
  
              <div class="form-outline mb-4">
                <input @input="validateEmail" type="email" v-model="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="E-postanızı giriniz"/>
                <span v-if="!emailIsValid&&email" class="text-danger d-flex">Geçersiz E-posta adresi</span>
  
              </div>
  
              <div class="form-outline mb-4">
                <input type="password" v-model="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Şifrenizi giriniz"/>
              </div>
  
              <!-- Checkbox -->
              <div>            
                <button @click="goToLogin()" class="btn btn-primary btn-lg btn-block p-2 g-col-6" style="margin-right: 20px;" type="button">Üye Ol</button>
                <button @click="login()" class="btn btn-secondary btn-lg btn-block p-2 g-col-6" type="submit">Giriş Yap</button>
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
  import Vue from "vue";
  import axios from "axios";
  import { setCookie, getCookie } from '@/utils';
  import router from "@/router";
  export default Vue.extend({
    name: 'GirisYap',
    data(){
      return{
  email:"",
  password:"",
  emailIsValid:false,
      }
    },
      methods:{
      goToLogin()
      {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      },
      validateEmail() {
        // Basit bir e-posta doğrulama regex'i kullanabilirsiniz.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.emailIsValid = emailRegex.test(this.email);
      },
      login()
      {
        axios
            .post('http://localhost:5116/api/Kullanici/GirisYap?eposta='+this.email+'&parola='+this.password)
            .then(response => {
              // document.cookie = `user=${JSON.stringify(response.data)}`;
              setCookie("user",response.data)
              console.log(getCookie("user"))
              router.push("/AktiviteOnerisi")
            })
      }
      
    }
  })
  </script>
  
  <style>
  .container{
    margin-top:auto;
  }
  </style>