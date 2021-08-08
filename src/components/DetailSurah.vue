<template>
<h1>detail surah</h1>
  <!-- <div v-for="item in ayat" :key="item.id" class="p-3 edo-rounded border mb-2">
    <p class="text-end arab">
      {{ item.text.arab }} - <span class=" ps-2 pe-2 m-0 rounded-pill border text-dark no-ayat">{{ item.number.inSurah }}</span>
    </p>
    <p class="text-start font-italic">Artinya: "{{ item.translation.id }}"</p>
  </div> -->
  <div v-for="item in ayat" :key="item.id"  class="p-3 edo-rounded border mb-2">
    <p class="text-end arab">
      {{item.aya_text}} - <span class=" ps-2 pe-2 m-0 rounded-pill border text-dark no-ayat">{{ item.aya_number }}</span>
    </p>
    <p class="text-start font-italic">Artinya: "{{ item.translation_aya_text }}"</p>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailSurah",
  data() {
    return {
      ayat: null,
    };
  },
  created() {
    //   const api_url = "https://api.quran.sutanlab.id/surah/"{{surah}}
    axios.get("https://quran-api.masedo.online/api/"+this.$route.params.surah).then((response) => {
      this.ayat = response.data["data"];
      console.log(response.data["data"]);
    });
  },
};
</script>

<style>
.arab {
    font-family: 'fontQuran';
}
.no-ayat {
    font-size: 15px;
}

</style>