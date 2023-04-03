<template style="margin:20px">

  <v-banner-text id="text" style="font-size: 3rem;font-weight: normal;text-align: center;padding-bottom: 10px;"
                 align="center">
    Experience
  </v-banner-text>
  <div style="margin-left:50px;margin-right: 50px">
    <v-expansion-panels class="mb-6">
      <v-expansion-panel
          v-for="(item,index) in experienceList"
          :key="index"
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          <v-row align="center">
            <v-col cols="1">
              <v-img width="140" :src="item.image" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="7">
              <div id="text" class="text-h6 font-weight-bold" style="text-align: left;">{{ item.title }}</div>
              <v-col>
                <h2>{{ item.company }}</h2>
              </v-col>
            </v-col>
            <v-col cols="4" class="text-right">
              <div class="text-h10">{{ item.date }}</div>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>


</template>
<script>
export default {
  data() {
    return {
      experienceList: [
        {
          title: 'Junior Back End Developer',
          company: '• Eureko Sigorta',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/eureko.png'),
          date: 'Jul 2022 - Aug 2022',
        },
        {
          title: 'Junior Back End Developer',
          company: '• Medya Takip Merkezi',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/medyatakip.jpg'),
          date: 'Jul 2022 - Aug 2022',

        },
        {
          title: 'Intern Web Developer',
          company: '• Cybersoft',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/cybersoft.jpg'),
          date: 'Jul 2022 - Aug 2022',
        },
        {
          title: 'Junior Back End Developer',
          company: '• Medya Takip Merkezi',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/medyatakip.jpg'),
          date: 'Jul 2022 - Aug 2022',

        },
      ],
    };
  },
};
</script>
<style scoped>
.v-expansion-panel__header__title {
  color: #374151 !important;
  font-family: Inter, sans-serif !important;
  font-weight: bold;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f3f4f6;
}

.panel-header img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 16px;
}

.panel-header-text {
  display: flex;
  flex-direction: column;
}

.panel-header-title {
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  font-family: Inter, sans-serif;
}

.panel-header-subtitle {
  font-size: 14px;
  color: #6b7280;
}

.panel-header-date {
  font-size: 14px;
  color: #6b7280;
  text-align: right;
}

</style>