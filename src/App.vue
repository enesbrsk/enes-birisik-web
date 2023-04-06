<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <NavbarMenu />
    </v-app-bar>
    <v-main>
      <v-container class="custom-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu
  },
}
</script>
<style>
html,
body {
  scroll-behavior: smooth;
  height: 100%;
  margin: 0;
}

.custom-container {
  margin-top: 20px !important;
  width: 75% !important;
}

@media (max-width: 1024px) {
  .custom-container {
    margin-top: 20px !important;
    width: 100% !important;
  }
}</style>
