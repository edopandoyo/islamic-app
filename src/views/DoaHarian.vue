<template>
  
  <Navbar v-bind:judul="judul" />
  <DoaHarian></DoaHarian>
</template>

<script>
import DoaHarian from '@/components/DoaHarian.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
      DoaHarian,
      Navbar
    },
    data() {
      return {
        judul: "Doa Harian"
      }
    }
}
</script>

<style>

</style>