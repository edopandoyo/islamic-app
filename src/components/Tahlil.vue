<template>
  <div class="home p-3">
    <div v-for="item in tahlil" :key="item.id">
      <div class="edo-rounded border p-3 mb-2 text-start">
        <h5>{{ item.title }}</h5>
        <div class="edo-rounded border p-3">
          <p class="mb-2 arab text-end">
            {{ item.arabic }}
          </p>
          <p class="font-italic">Artinya: "{{item.translation}}" </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DoaHarian",
  data() {
    return {
      tahlil: null,
    };
  },
  created() {
    axios
      .get("https://islamic-api-indonesia.herokuapp.com/api/data/json/tahlil")
      .then((response) => {
        this.tahlil = response.data.result.data;
      });
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

.font-italic {
  font-style: italic;
}
</style>
