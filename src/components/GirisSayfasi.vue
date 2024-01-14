<template>
  <div>
    <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3>Hoşgeldiniz</h3>
            <h3 class="mb-5">Hava Durumuna Göre Aktivite Öneri Uygulaması</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="E-postanızı giriniz"/>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Şifrenizi giriniz"/>
            </div>

            <!-- Checkbox -->
            <div>            
              <button @click="clicked" class="btn btn-primary btn-lg btn-block p-2 g-col-6" style="margin-right: 20px;" type="button">Üye Ol</button>
              <button class="btn btn-secondary btn-lg btn-block p-2 g-col-6" type="submit">Giriş Yap</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>
<script>

export default {
  name: 'GirisSayfasi',
  methods:{
    clicked()
    {
      debugger
      console.log("clicked")
      const apiKey = process.env.VUE_APP_MY_API_KEY;
console.log(apiKey)
    }
  }
}
</script>

<style>
.container{
  margin-top:auto;
}
</style>