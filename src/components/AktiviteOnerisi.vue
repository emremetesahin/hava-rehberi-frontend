<template>
  <div>
    <section class="vh-100" style="background-color: #508bfc;">
      <div class=" py-0 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="card shadow-2-strong" style="width: fit-content;">
            <p class="h5">Hava Durumu Rehberine Hoşgeldin {{ kullanici.ad }} {{ kullanici.soyad }}</p>
          </div>

          <div class="col-12 col-md-8 col-lg-6 col-xl-10">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <div>
                  <select @change="havaDurumuTahminiGetir($event)" class="form-select"
                    aria-label="Default select example">
                    <option :value="city.cityname" :key="city.id" v-for="city of cities" v selected>{{ city.cityname }}
                    </option>
                  </select>
                </div>


                <div class="havaDurumuTahminleri mt-4">
                  <b-row>
                    <b-col v-for="havaDurumuTahmini of hataDurumuTahminleri" md="3">
                      <div class="card mb-4" style="width: 18rem;">
                        <img class="card-img-top"
                          style="height: 80px;width: 80px; margin-right:auto; margin-left: auto;"
                          :src=havaDurumuTahmini.icon alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">{{ havaDurumuTahmini.date }} &nbsp; {{ havaDurumuTahmini.description }}
                          </h5>
                          <p class="card-text">{{ havaDurumuTahmini.day }} günü hava {{ havaDurumuTahmini.degree }} °C
                            <br> Nem oranı %{{ havaDurumuTahmini.humidity }}
                            <br>Hava Sıcaklığı {{ havaDurumuTahmini.min }}-{{ havaDurumuTahmini.max }}
                          </p>
                          <!-- <a href="#" class="btn btn-primary">Aktivite Önerisi Getir</a> -->
                          <button type="button" @click="aktiviteOnerisiGetir(havaDurumuTahmini.date)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Aktivite Önerisi Getir
                          </button>

                          <!-- Modal -->
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Aktivite Önerisi</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  {{res.date }} günü için hava  {{res.derece }} <br> hava durumu {{res.aciklama}}
                                  <br>
                                  Bu havada yapılabilecek  
                                  <br> 
                                  Kapalı alan aktiviteleri
                                  :<span v-for="oneri of res.icMekanOneriler">{{oneri}}</span>

                                  <br> 
                                  Açık alan aktiviteleri
                                  :<span v-for="oneri of res.disMekanOneriler">{{oneri}}</span>

                                  <!-- {{aktiviteOnerileri.icMekanOneriler[0]}} -->
                                  <!-- {{aktiviteOnerileri.disMekanOneriler[0]}} -->
                                </div>
                                <div class="modal-footer">
                                  <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</div></template>
  <script lang="ts">
  import Vue from "vue";
  import axios from "axios";
import {getCookie } from '@/utils';
    export default Vue.extend({
    name: 'AktiviteOnerisi',
    created() {
      this.getCities();
      this.kullanici=(getCookie("user"))
      console.log(this.kullanici)
    },
    methods: {
      getCities() {
        axios
          .get('http://localhost:5116/api/Sehir')
          .then(response => {
            this.cities = response.data
          })
      },
      havaDurumuTahminiGetir(event)
      {
        this.selectedCity=event.target.value
        axios
          .get('http://localhost:5116/api/Aktivite/HavaDurumunuGetir?sehirAdi='+this.selectedCity)
          .then(response => {
            console.log(response)
            this.hataDurumuTahminleri=response.data
          })
      },
      aktiviteOnerisiGetir(tarih)
      {
        axios
          .get('http://localhost:5116/api/Aktivite/AktiviteOner?sehir='+this.selectedCity+'&date='+tarih)
          .then(response => {
            this.res=response.data
          })
      }
    },
    data() {
      return {
        cities: [],
        selectedCity:"",
        hataDurumuTahminleri:[],
        icmekanOnerileri:[],
        disMekanOneriler:[],
        tarih:"mes",
        derece:"",
        aciklama:"",
        kullanici:{},
        res:{}
      };
    },
  })
    </script>
  
  <style>
  .container{
    margin-top:auto;
  }
  </style>