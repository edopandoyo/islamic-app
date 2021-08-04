<template>
  <h3 class="time">{{ time }}</h3>
  {{ tahun }} {{ bulan }} {{ tgl }} 
</template>

<script>
import axios from 'axios';
import persianJs from 'persianjs'
export default {
  name: "Jam",
  data() {
      return {
          time: null,
          date: null,
          tgl: null,
          bulan: null,
          tahun: null
      }
  },
  methods: {
    updateTime() {
        setInterval(() => {
            var cd = new Date();
            // var week = [
            //   "Minggu",
            //   "Senin",
            //   "Selasa",
            //   "Rabu",
            //   "Kamis",
            //   "Jum'at",
            //   "Sabtu",
            // ];
            // var month = [
            //   "Januari",
            //   "Februari",
            //   "Maret",
            //   "April",
            //   "Mei",
            //   "Juni",
            //   "Juli",
            //   "Agustus",
            //   "September",
            //   "Oktober",
            //   "November",
            //   "Desember",
            // ];
      
            this.time =
              this.zeroPadding(cd.getHours(), 2) +
              ":" +
              this.zeroPadding(cd.getMinutes(), 2) +
              ":" +
              this.zeroPadding(cd.getSeconds(), 2);
            // this.date =
            //   week[cd.getDay()] +
            //   ", " +
            //   this.zeroPadding(cd.getDate(), 2) +
            //   " " +
            //   this.zeroPadding(month[cd.getMonth()]) +
            //   " " +
            //   this.zeroPadding(cd.getFullYear(), 4) ;
            
        }, 1000)
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
  created() {
          this.updateTime();
          axios.get(' http://api.aladhan.com/v1/gToH')
          .then((response) => {
            this.tgl = persianJs(response.data.data.hijri.day).englishNumber();
            this.bulan = response.data.data.hijri.month.ar;
            this.tahun = persianJs(response.data.data.hijri.year).englishNumber();
          })
      
  }
};
</script>

<style></style>
