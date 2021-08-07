<template>
  <input
    type="text"
    v-model="search"
    class="form-control mb-3 p-3"
    placeholder="Ketik nama surat..."
  />
  <div
    v-for="item in resultQuery"
    :key="item.id"
    class="p-3 edo-rounded border mb-2"
  >
  <router-link :to="{name:'detail-surah', params: {surah:item.number}}">
    <div class="row">
      <div class="col-1">{{ item.number }}.</div>
      <div class="col text-start">
        <p class="mb-0">
          {{ item.name.transliteration.id }} ({{ item.numberOfVerses }})
        </p>
        <p class="mb-0">{{ item.name.translation.id }}</p>
        <p class="mb-0">{{ item.revelation.id }}</p>
      </div>
      <div class="col">
        <p class="arab text-end mb-0">{{ item.name.short }}</p>
      </div>
    </div>
  </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search:null,
      surah: null,
    }
  },
  async created() {
    const resQuran = await axios.get("https://api.quran.sutanlab.id/surah");
    this.surah = await resQuran.data.data;
    // return {};
  },
  computed: {
    resultQuery: function () {
      if (this.search) {
        return this.surah.filter((item) => {
          return item.name.transliteration.id
            .toLowerCase()
            .match(this.search.toLowerCase());
        });
      } else {
        return this.surah;
      }
    },
  },
};
</script>

<style>
</style>