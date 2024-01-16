<template>
    <div>
        <AktiviteOnerisi></AktiviteOnerisi>
        <AktiviteEkle></AktiviteEkle>
  </div>
  </template>
  <script>
  import Vue from "vue";
import AktiviteEkle from "./AktiviteEkle.vue";
import AktiviteOnerisi from "./AktiviteOnerisi.vue";
  
  export default Vue.extend({
    name: 'AktiviteSayfasi',
    components:{
    AktiviteEkle,
    AktiviteOnerisi,
    AktiviteOnerisi
}
  })
  </script>