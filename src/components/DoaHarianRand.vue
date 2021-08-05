<template>
  <div class="p-3 edo-rounded bg-white">
    
    <h4 class="mb-0 text-start mb-2 text-start">{{random_doa.title}}</h4>
    <div class="p-2 border edo-rounded mb-2">
        <p class="arab text-end mb-0">{{ random_doa.arabic }}</p>
        </div>
        <p class="text-start">{{ random_doa.latin }}</p>
        <p class="text-start">
          Artinya : "<span class="font-italic">{{ random_doa.translation }}</span
          >"
        </p>
  <router-link to="/doa-harian"><div class="text-start text-success"><strong>Doa Harian Lainnya >></strong> </div></router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DoaHarian",
  data() {
    return {
      search: null,
      doa: [],
      random_doa : {
        title:null,
        arabic:null,
        latin:null,
        translation:null,
      },
    };
  },
  created() {
    axios
      .get("https://islamic-api-zhirrr.vercel.app/api/doaharian")
      .then((response) => {
        this.doa = response.data.data;
        this.random_doa= response.data.data[Math.floor((Math.random()*response.data.data.length))];
        });

  },
  mounted() {
    document.title = "Doa Harian | masedo";
    
  },
  methods: {
    handleCopy() {
      console.log(this.doa.arabic);
    },
  },
  computed: {
  },
};
</script>

<style>

</style>