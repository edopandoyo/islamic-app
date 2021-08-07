<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{judul}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
          Home
          </router-link>
          <!-- <a class="nav-link" aria-current="page" href="/">Home</a> -->
        </li>
        <li class="nav-item">
          <router-link to="/quran" class="nav-link">
          Al-Qur'an
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/hadits" class="nav-link">
          Hadits
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tahlil" class="nav-link">
          Tahlil
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['judul'],
}
</script>

<style>

</style>