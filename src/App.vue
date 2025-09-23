<script setup>
import Profile from "./components/Profile.vue";
import Portfolio from "./components/Portfolio.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
import SubFooter from "./components/SubFooter.vue";
</script>

<template>
  <Navbar />
  <div id="home">
    <Home />
  </div>
  <div id="profile">
    <Profile />
  </div>
  <div id="portfolio">
    <Portfolio />
  </div>
  <div id="contact">
    <Footer />
  </div>
  <SubFooter />
</template>

<style scoped></style>
