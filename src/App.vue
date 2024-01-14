<template>
  <div>
    <!-- <Giris></Giris> -->
    App
    <KayitOl></KayitOl>
  </div>
</template>

<script>
import Giris from './components/GirisSayfasi.vue';
import KayitOl from './components/KayitOl.vue';

export default {
  name: 'App',
  components: {
    Giris,
    KayitOl
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
