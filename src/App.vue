<template>
  <v-app>
    <v-app-bar v-if="width > 1024" app color="white" dark>
      <NavbarMenu/>
    </v-app-bar>
    <NavigationDrawer v-if="width <= 1024" />
    <v-main>
      <v-container class="custom-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import NavbarMenu from './components/menu/NavbarMenu.vue';
import NavigationDrawer from './components/menu/NavigationDrawer.vue';

export default {
  name: 'App',
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  components: {
    NavbarMenu,
    NavigationDrawer
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
  }
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
}
</style>
