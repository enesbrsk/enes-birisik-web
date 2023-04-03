<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <NavbarMenu/>
    </v-app-bar>
    <v-main>
      <v-container style="margin-top: 20px; width: 75%;">
        <router-view/>
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

  data: () => ({
    //
  }),
}
</script>
<style>
html, body {
  scroll-behavior: smooth;
  height: 100%;
  margin: 0;
}
</style>
