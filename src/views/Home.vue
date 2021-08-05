<template>
  <div v-if="isMobile()" class="main">
    <div class="position-relative">
      <Navbar v-bind:judul="judul" />
      <div class="position-absolute text-white text-start p-3">
        <Suspense>
          <template #default>
            <Jam></Jam>
          </template>
          <template #fallback> Loading... </template>
        </Suspense>
      </div>
      <div class="position-absolute bottom-0 mb-min p-2 w-100">
        <JadwalSholat> </JadwalSholat>
      </div>
      <img src="assets/masjid.png" alt="" class="w-100" />
    </div>
    <div class="row d-flex justify-content-around p-3 mt-4 text-white m-0">
      <div class="col p-2">
        <div class="edo-bg edo-rounded p-2">
          <img src="assets/quran.png" class="w-100" />
          Al-Qur'an
        </div>
        <div></div>
      </div>
      <div class="col p-2">
        <div class="edo-bg edo-rounded p-2">
          <img src="assets/kitab.png" class="w-100" />
          Hadits
        </div>
      </div>
        <div class="col p-2">
      <router-link to="/tahlil">
          <div class="edo-bg edo-rounded p-2">
            <img src="assets/zikir.png" class="w-100" />
            Tahlil
          </div>
      </router-link>
        </div>

      <DoaHarianRand class="text-black mt-3"> </DoaHarianRand>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center align-items-center desktop">
    <h1><strong>Maaf,</strong> saat ini tampilan desktop belum tersedia</h1>
  </div>
</template>

<script>
import DoaHarianRand from "@/components/DoaHarianRand.vue";
import JadwalSholat from "@/components/JadwalSholat.vue";
import Navbar from "@/components/Navbar.vue";
import Jam from "@/components/Jam.vue";
// @ is an alias to /src
export default {
  name: "Index",
  components: {
    DoaHarianRand,
    Jam,
    JadwalSholat,
    Navbar,
  },
  data() {
    return {
      judul: "Aplikasi Islami",
    };
  },
  mounted() {
    document.title = "Aplikasi Islami | masedo";
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.edo-rounded {
  border-radius: 10px;
}
.mb-min {
  margin-bottom: -34px;
}
.main {
  min-height: 100vh;
  background-color: rgb(226, 225, 225);
}
.edo-bg {
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #43d4b5,
    #0e948d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.text-black {
  color: rgb(17, 17, 17);
}
.desktop {
  height: 100vh;
}
a {
  text-decoration: none;
  color:inherit;
}
.arab {
  font-size: 24px;
  font-family: 'Amiri', serif;
  color: green;
  line-height: 200%;
}
</style>
