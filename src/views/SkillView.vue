<template>
    <SkillsPage/>
    <ExperiencePage/>
</template>
<script>
import SkillsPage from "@/components/SkillsPage.vue";
import ExperiencePage from "@/components/ExperiencePage.vue";

export default {
  components: {ExperiencePage, SkillsPage},
  component:{
    SkillsPage,
    ExperiencePage
  },
  data(){
    return{

    }
  }
}
</script>
<style>

</style>