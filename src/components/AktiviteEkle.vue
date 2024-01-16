<template>
    <div>
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">
                                Aktivteleri görüntüleyebilirsiniz

                                <div class="bd-example">
                                    <table class="table table-sm table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Aktivite Adı</th>
                                                <th scope="col">Aktivite Tipi</th>
                                                <th scope="col">Minimum Puan</th>
                                                <th scope="col">Maksimum Puan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>@fat</td>
                                                <td>@fat</td>
                                                <td>@fat</td>
                                                <td>@fat</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                Aşağıdan aktivte ekleyebilirsiniz
                                <div class="form-outline mb-4">
                                    <input @input="validateEmail" type="email" v-model="email" id="typeEmailX-2"
                                        class="form-control form-control-lg" placeholder="Aktivite Adı Giriniz" />
                                        <fieldset style="text-align: center;">
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
      name: 'AktiviteEkle',
      mounted () {
      },
      methods:{
         register(){
    axios
          .post('http://localhost:5116/api/Aktivite/KullaniciAktiviteleriniGetir?kullaniciId=6F86BA95-41BE-42F5-7788-08DC16CAE84C',{
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
      },
      data() {
        return {
          user:null
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