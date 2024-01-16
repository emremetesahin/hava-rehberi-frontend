<template>
  <div>
    <GirisSayfasi></GirisSayfasi>
    <KayitOl/>
</div>
</template>
<script>
import Vue from "vue";
import GirisYap from './GirisYap.vue';
import KayitOl from "./KayitOl.vue";
import GirisSayfasi from "./GirisSayfasi.vue";

export default Vue.extend({
  name: 'KayitOlVeGirisYap',
  components:{
    KayitOl,
    GirisSayfasi
}
})
</script>