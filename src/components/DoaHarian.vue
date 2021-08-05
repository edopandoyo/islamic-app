<template>
  <!-- <div class="home p-3">
    <input
      type="text"
      v-model="search"
      class="form-control mb-3 p-3"
      placeholder="Ketik judul do'a..."
    />
    <div
      v-for="(item, index) in resultQuery"
      :key="item.id"
      class="p-3 rounded border mb-2"
    >
      <div
        class="text-start"
        data-bs-toggle="collapse"
        :href="'#tab' + index"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <h4 class="mb-0 text-start mb-2 text-start">{{ item.title }}</h4>
      </div>
      <div class="collapse" :id="'tab' + index">
        <div class="p-2 border edo-rounded mb-2">
        <p class="arab text-end mb-0" @click="handleCopy">{{ item.arabic }}</p>
        </div>
        <p class="text-start">{{ item.latin }}</p>
        <p class="text-start">
          Artinya : "<span class="font-italic">{{ item.translation }}</span
          >"
        </p>
      </div>
    </div>
  </div> -->
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
  <div class="text-start text-success"><strong>Doa Harian Lainnya >></strong> </div>
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
      title : null,
      arabic : null,
      latin : null,
      translation : null,
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
    resultQuery: function() {
      if (this.search) {
        return this.doa.filter((item) => {
          return item.title.toLowerCase().match(this.search.toLowerCase());
        });
      } else {
        return this.doa;
      }
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
li {
  margin-bottom: 1rem;
}
.arab {
  font-size: 34px;
  font-family: "Cairo", sans-serif;
  font-family: "Lateef", cursive;
  color: green;
}
.font-italic {
  font-style: italic;
}

</style>
