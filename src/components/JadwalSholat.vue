<template>
<div v-for="item in jadwal" :key="item.id" class="row ">
    <p class="text-start">{{}}</p>
</div>
  <div v-for="item in jadwal" :key="item.id" class="row ">
      <div class="col">
          subuh<br>{{item.times.Fajr}}
      </div>
      <div class="col">
          Dzuhur<br>{{item.times.Dhuhr}}
      </div>
      <div class="col">
          Ashar<br>{{item.times.Asr}}
      </div>
      <div class="col">
          Magrib<br>{{item.times.Maghrib}}
      </div>
      <div class="col">
          Isya<br>{{item.times.Isha}}
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "JadwalSholat",
  data() {
    return {
      lat: null,
      long: null,
      location: null,
      jadwal: null,
      waktu: null,
      perhitungan: null,
      tgl : null
    };
  },
  created() {
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }
    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
          axios
            .get(
              "https://api.pray.zone/v2/times/today.json?longitude="+this.long+"&latitude="+this.lat
            )
            .then((response) => {
               this.jadwal=response.data.results.datetime,
               this.perhitungan=response.data.results.settings.juristic
            });
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
    
  },
  mounted() {
  }
};
</script>

<style>
</style>