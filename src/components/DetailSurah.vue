<template>
  <div v-for="item in ayat" :key="item.id" class="p-3 edo-rounded border mb-2">
    <p class="text-end arab">
      {{ item.text.arab }} - <span class=" ps-2 pe-2 m-0 rounded-pill border text-dark no-ayat">{{ item.number.inSurah }}</span>
    </p>
    <p class="text-start font-italic">Artinya: "{{ item.translation.id }}"</p>
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
    axios.get("https://api.quran.sutanlab.id/surah/1").then((response) => {
      this.ayat = response.data.data.verses;
      console.log(response);
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