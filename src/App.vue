<script setup>
 import Footer from './components/Footer.vue'
 import Header from './components/Header.vue'
 import Hero from './components/Hero.vue'
 import AboutUS from './components/AboutUS.vue'
 import Toolbox from './components/Toolbox.vue'
 import Services from './components/Services.vue'
 import Company from './components/Company.vue'


</script>

<template>

  <Header />
  <Hero />
  <AboutUS />
  <Toolbox />
  <Services />
  <Company />
  <Footer />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
