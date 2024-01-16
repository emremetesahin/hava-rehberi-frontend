<template>
  <div>
    <!-- <AktiviteEkle></AktiviteEkle> -->
    <router-view/>
  </div>
</template>

<script>
import AktiviteEkle from './components/AktiviteEkle.vue';
import KayitOl from './components/KayitOl.vue';

export default {
  name: 'App',
  components: {
    KayitOl,
    AktiviteEkle,
}
}
</script>

<style>
</style>
