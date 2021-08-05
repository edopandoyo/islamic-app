<template>
<div v-if="loading">
  loading....
</div>
<div v-else>
  <h3 class="time">{{ time }}</h3>
  {{date}}, {{ tgl }} {{ bulan }} {{ tahun }} H
</div>
</template>

<script>
import axios from 'axios';
export default {
  

  name: "Jam",
  data() {
      return {
          time: null,
          date: null,
          tgl: null,
          bulan: null,
          tahun: null,
          loading: true,
      }
  },
  methods: {
    updateTime() {
        setInterval(() => {
            var cd = new Date();
            var week = [
              "Minggu",
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jum'at",
              "Sabtu",
            ];
            this.time =
              this.zeroPadding(cd.getHours(), 2) +
              ":" +
              this.zeroPadding(cd.getMinutes(), 2) +
              ":" +
              this.zeroPadding(cd.getSeconds(), 2);
            this.date =
              week[cd.getDay()];
        }, 10)
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
  async created() {
    var month = ['Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 'Jumadil Awal', 'Jumadil AKhir', 'Rajab', "Sya'ban", 'Ramadhan', 'Syawal', 'Dzulqaidah', 'Dzulhijjah' ];
          this.updateTime();
          axios.get(' https://api.aladhan.com/v1/gToH')
          .then((response) => {
            this.tgl = response.data.data.hijri.day;
            this.bulan = month[response.data.data.hijri.month.number-1];
            this.tahun = response.data.data.hijri.year;
            this.loading = false
          })
      
  }
};
</script>

<style></style>
