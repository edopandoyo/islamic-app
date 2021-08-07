<template>
  <Navbar v-bind:judul="judul"/>
  <Suspense>
    <template #default>
      <div class="p-3">
        <Quran />
      </div>
    </template>
    <template #fallback> loading... </template>
  </Suspense>
</template>

<script>
import Quran from "@/components/Quran";
import Navbar from "@/components/Navbar";
export default {
  components: {
    Quran,
    Navbar,
  },
  data() {
    return {
      judul: "Al-Qur'an",
    };
  },
};
</script>

<style></style>
