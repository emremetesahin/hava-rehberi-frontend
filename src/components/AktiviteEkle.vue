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
                                                <td v-if="!aktivite.kullaniciId">{{ aktivite.aktiviteadi }}</td>
                                                <td v-if="!aktivite.kullaniciId">{{ aktivite.aktivitetipi }}</td>
                                                <td v-if="!aktivite.kullaniciId">{{ aktivite.minpuan }}</td>
                                                <td v-if="!aktivite.kullaniciId">{{ aktivite.maxpuan }}</td>


                                                <td v-if="aktivite.kullaniciId" style="background-color: #508bfc; color: aliceblue;">{{ aktivite.aktiviteadi }}</td>
                                                <td v-if="aktivite.kullaniciId" style="background-color: #508bfc; color: aliceblue;">{{ aktivite.aktivitetipi }}</td>
                                                <td v-if="aktivite.kullaniciId" style="background-color: #508bfc; color: aliceblue;">{{ aktivite.minpuan }}</td>
                                                <td v-if="aktivite.kullaniciId" style="background-color: #508bfc; color: aliceblue;">{{ aktivite.maxpuan }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                               <h2> Aşağıdan aktivte ekleyebilirsiniz</h2>
                                <div class="form-outline mb-4">
                                    <input  type="email" v-model="aktiviteAdi" id="typeEmailX-2"
                                        class="form-control form-control-lg" placeholder="Aktivite Adı Giriniz" />
                                        <fieldset style="text-align: center;">
                                            <legend>Aktivite Tipini seçiniz</legend>
                                            <div style="display: inline-block;">
                                                <input type="radio" v-model="aktiviteTipi" name="radios" class="form-check-input " value="ic mekan" id="exampleRadio1">
                                                <label class="form-check-label" for="exampleRadio1">İç mekan &nbsp;</label>
                                                <input type="radio" v-model="aktiviteTipi" name="radios" class="form-check-input" value="dis mekan" id="exampleRadio2">
                                                <label class="form-check-label" for="exampleRadio2">Dış Mekan</label>
                                            </div>
                                        </fieldset>
                                    <label for="customRange3" class="form-label"><h6>0 ile 1 arası bir değer giriniz</h6></label>
                                    <div class="mb-3">
                                        <label for="customRange3" class="form-label">Kötü hava şartları: {{ minpuan }}</label>
                                        <input type="range" v-model="minpuan" class="form-range" min="0" max="1" step="0.01"
                                            id="customRange3">
                                        <label for="customRange3" class="form-label">Güzel hava şartları: {{ maxpuan }}</label>
                                        <input type="range" v-model="maxpuan" class="form-range" min="0" max="1" step="0.01"
                                            id="customRange3">
                                    </div>
                          <button type="button" @click="AktiviteEkle()" class="btn btn-primary" >
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
        AktiviteEkle()
        {
            console.log(this.aktiviteAdi)
            console.log(this.aktiviteTipi)
            console.log(this.minpuan)
            console.log(this.maxpuan)
            console.log(this.kullaniciId)
            axios
          .post('http://localhost:5116/api/Aktivite/AktiviteEkle',{
            aktiviteadi:this.aktiviteAdi,
            aktivitetipi:this.aktiviteTipi,
            minpuan:this.minpuan,
            maxpuan:this.maxpuan,
            kullaniciId:this.kullaniciId,
      })
          .then(response =>
          {
          this. AktiviteleriGetir()
          })
        }
      },
      data() {
        return {
          aktiviteler:[],
          aktiviteTipi:"",
          aktiviteAdi:"",
          minpuan:0.5,
          maxpuan:0.5,
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