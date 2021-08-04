<template>
  <div class="position-relative">
  <div class="position-absolute text-white text-start p-3">
  <Jam></Jam>
  </div>
  <div class="position-absolute text-white mb-3 bottom-0 p-2 w-100">
  <JadwalSholat></JadwalSholat>
  </div>
    <img src="assets/masjid.png" alt="" class="w-100">
  </div>
  <DoaHarian></DoaHarian>
</template>

<script>
import DoaHarian from '@/components/DoaHarian.vue'
import JadwalSholat from '@/components/JadwalSholat.vue'
import Jam from '@/components/Jam.vue'
// @ is an alias to /src
export default {
  name: "Index",
  components: {
    DoaHarian,
    Jam,
    JadwalSholat
  }
}
</script>

<style>

</style>
