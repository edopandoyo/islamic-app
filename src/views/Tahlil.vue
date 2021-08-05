<template>
  
  <Navbar v-bind:judul="judul" />
  <Tahlil></Tahlil>
</template>

<script>
import Tahlil from '@/components/Tahlil'
import Navbar from '@/components/Navbar'
export default {
    components: {
      Tahlil,
      Navbar
    },
    data() {
      return {
        judul: "Tahlil"
      }
    },
    mounted() {
    document.title = "Tahlil | masedo";
    
  },
}
</script>

<style>

</style>