<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <NavbarMenu/>
    </v-app-bar>
    <v-main>
      <HelloWorld/>
      <AboutPage/>
      <SkillsPage/>
      <CertificationPage/>
      <ProjectPage/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';
import HelloWorld from './components/HelloWorld.vue';
import SkillsPage from './components/SkillsPage.vue';
import AboutPage from "@/components/AboutPage.vue";
import CertificationPage from "@/components/CertificationPage.vue"
import ProjectPage from "@/components/ProjectPage.vue"

export default {
  name: 'App',

  components: {
    NavbarMenu,
    HelloWorld,
    SkillsPage,
    AboutPage,
    CertificationPage,
    ProjectPage
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
