<template>
    <div>
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-8">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">
                                Aktivteleri görüntüleyebilirsiniz

                                <div class="bd-example" style="height: 300px; overflow: scroll;">
                                    <table class="table table-sm table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Aktivite Adı</th>
                                                <th scope="col">Aktivite Tipi</th>
                                                <th scope="col">Minimum Puan</th>
                                                <th scope="col">Maksimum Puan</th>
                                            </tr>
                                        </thead>

                                        <tbody v-for="aktivite of aktiviteler">
                                            <tr>
                                                <td>{{ aktivite.aktiviteadi }}</td>
                                                <td>{{ aktivite.aktivitetipi }}</td>
                                                <td>{{ aktivite.minpuan }}</td>
                                                <td>{{ aktivite.maxpuan }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                Aşağıdan aktivte ekleyebilirsiniz
                                <div class="form-outline mb-4">
                                    <input  type="email" v-model="aktiviteAdi" id="typeEmailX-2"
                                        class="form-control form-control-lg" placeholder="Aktivite Adı Giriniz" />
                                        <fieldset @change="trigger($event)" style="text-align: center;">
                                            <legend>Aktivite Tipini seçiniz</legend>
                                            <div style="display: inline-block;">
                                                <input type="radio" name="radios" class="form-check-input " id="exampleRadio1">
                                                <label class="form-check-label" for="exampleRadio1">İç mekan</label>
                                            </div>
                                            <div class="mb-3">
                                                <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
                                                <label class="form-check-label" for="exampleRadio2">Dış Mekan</label>
                                            </div>
                                        </fieldset>
                                    <label for="customRange3" class="form-label">0 ile 1 arası bir değer giriniz</label>
                                    <div class="mb-3">
                                        <label for="customRange3" class="form-label">Minimum Değer: 0.65</label>

                                        <input type="range" class="form-range" min="0" max="1" step="0.01"
                                            id="customRange3">
                                        <label for="customRange3" class="form-label">Maksimum Değer: 0.65</label>
                                        <input type="range" class="form-range" min="0" max="1" step="0.01"
                                            id="customRange3">
                                    </div>
                          <button type="button" class="btn btn-primary" >
                            Aktiviteyi Ekle
                          </button>
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
    import { getCookie } from "@/utils";
import axios from "axios";
    import Vue from "vue";
    
    
    export default  Vue.extend({
      name: 'AktiviteEkle',
      created () {
        this.kullaniciId=getCookie("user").userId
        this.AktiviteleriGetir()
      },
      methods:{
         AktiviteleriGetir(){
    axios
          .get('http://localhost:5116/api/Aktivite/KullaniciAktiviteleriniGetir?kullaniciId='+this.kullaniciId,{
          })
          .then(response =>
          {
            this.aktiviteler=response.data
          })
        },
      //   AktiviteEkle()
      //   {
      //       axios
      //     .post('http://localhost:5116/api/Aktivite/AktiviteEkle',{
      //       aktiviteadi:this.ad,
      //       aktivitetipi:this.soyad,
      //       minpuan:this.email,
      //       maxpuan:this.pass,
      //       kullaniciId:this.pass,
      // })
      //     .then(response =>
      //     {
      //       this.aktiviteler=response.data
      //     })
      //   }
      },
      data() {
        return {
          aktiviteler:[],
          aktiviteTipi:"",
          aktiviteAdi:"",
          minpuan:"",
          maxpuan:"",
          kullaniciId:"",
        };
      }})
    </script>
      
      <style>
      .container{
        margin-top:auto;
      }
      .form-check-input
      {
        display: inline-block!important;
      }
      </style>