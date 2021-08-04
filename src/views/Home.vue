<template>
  <div class="home p-3" >
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
    <div class="text-start"  data-bs-toggle="collapse" :href="'#tab'+ index" role="button" aria-expanded="false" aria-controls="collapseExample">
      <h4 class="mb-0 text-start mb-2 text-start">{{ item.title }}</h4>
    </div>
    <div class="collapse" :id="'tab'+index">
      <p class="arab text-end" @click="handleCopy">{{ item.arabic }}</p>
      <p class="text-start">{{ item.latin }}</p>
      <p class="text-start">
        Artinya : "<span class="font-italic">{{ item.translation }}</span
        >"
      </p>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  data() {
    return {
      search: null,
      doa: [],
    };
  },
  created() {
    axios
      .get("https://islamic-api-zhirrr.vercel.app/api/doaharian")
      .then((response) => (this.doa = response.data.data));
  },
  mounted() {
    document.title = "Doa Harian | masedo";
  },
  methods: {
    handleCopy() {
      console.log(this.doa.arabic)
    },
  },
  computed: {
    resultQuery: function () {
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
