<template>
  <div class="custom-banner-text">
    Check out some of my projects
  </div>
  <div style="display: flex; flex-wrap: wrap;">
    <v-hover v-for="(p, index) in projectList" :key="index" v-slot="{ isHovering, props }">
      <v-card class="custom-card" color="grey-lighten-4" v-bind="props" :aspect-ratio="16 / 9" cover>


        <v-expand-transition>
          <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
            style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
            {{ p.projectExplain }}
          </div>
        </v-expand-transition>
        <v-card-text class="text-h5"
          style="font-family: Quicksand,sans-serif; font-size: 18pt !important; font-weight: bold; color:white; line-height: normal;  margin: auto;  text-align: center;">
          {{ p.projectTitle }}
          <div class="btn-div">
              <v-img v-for="(i, indexx) in p.projectIcon" :key="indexx" :src="i.path" :width=i.width></v-img>
            
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projectList: [
        {
          projectTitle: "Personel Devam Kontrol Sistemi",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
         projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
      ]
    };
  },
};
</script>

<style scoped> .v-card--reveal {
   align-items: center;
   bottom: 0;
   justify-content: center;
   opacity: .9;
   position: absolute;
   width: 100%;
 }

 .bg-orange-darken-2 {
   background-color: rgba(0, 0, 0, 0.8) !important;
   color: rgb(255, 255, 255) !important;
   margin: auto;
    /* width: min-content; */
    text-align: center;
    justify-items: center;
    z-index: 2;
 }


 .btn-div {
   background-color: #f8fcff;
   display: flex;
   padding: 10px;
   width: 100% !important;
   height: 55px;
   border-radius: 10px;
   margin-top: 30px;
   bottom: 10px;

 }

 .custom-card {
   margin: 10px !important;
   border-radius: 10px;
   box-shadow: 0px 0px 10px 0px;
   min-width: 320px;
   min-height: 344px;
 }


 .v-img {
   width: 100%;
   height: 100%;
 }

 .hover-card .v-card-text {
   opacity: 0;
   transition: opacity 0.3s ease-in-out;
 }

 .v-card {
   border-color: rgba(var(--v-border-color), var(--v-border-opacity));
   border-radius: 15px !important;
   box-shadow: 0px 0px 10px 0px !important;
   background-image: url('@/assets/images/background.png');
   background-size: cover;
   display: block !important;
    width: 344px !important;

 }

 .custom-banner-text {
   font-size: 3rem;
   font-weight: normal;
   text-align: center;
   padding-bottom: 10px;
 }

 .v-card .v-card-text {
   height: 100% !important;
   flex: inherit !important;
   display: grid !important;
   align-content: center !important;
 }
 .v-card .v-card-text[data-v-0e184748] {
    margin: auto!important;
    
}
 .custom-card[data-v-0e184748] {
margin: 20px !important;
min-width: unset !important;
min-height: unset !important;
width: 300px!important;

height: 200px !important;

}

 @media (max-width: 1024px) {
   .custom-card[data-v-0e184748] {

     min-width: unset !important;
     min-height: unset !important;
     width: -webkit-fill-available !important;

   }

   .custom-banner-text {
     font-size: 1rem;
     font-weight: normal;
     text-align: center;
     padding-bottom: 0px;
   }
 }</style>