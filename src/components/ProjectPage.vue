
import { assert } from '@vue/compiler-core';

<template>
  <v-container class="skill-container">
    <v-banner-text id="text" style="font-size: 3rem;font-weight: normal;text-align: center;padding-bottom: 10px;"
      align="center">
      Check out some of my projects
    </v-banner-text>
    <div style="display: flex;
          flex-wrap: wrap;">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto custom-card" color="grey-lighten-4" max-width="320" v-bind="props" :aspect-ratio="16 / 9" cover >
          <v-img :aspect-ratio="16 / 9" cover :src="require('@/assets/images/background.png')">

            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                style="height: 100%;  background-color: rgba(0, 0, 0, 0.8) !important; color: rgb(255, 255, 255) !important;">
                $14.99
              </div>
            </v-expand-transition>
            <v-card-text class="text-h5" style="font-family: Quicksand,sans-serif; font-size: 1rem; font-weight: bold; color:white; line-height: normal;    margin: auto;
        width: min-content;;
                                                text-align: center;">
              <h4>Personel Devam Kontrol Sistemi</h4>
              <div class="btn-div">
                <img :src="require('@/assets/images/Visual_Studio_Icon.png')" width="35">
                <img :src="require('@/assets/images/logo_asp_dot_net_winforms.png')" width="55" style="
                  border-radius: 20px;
                  margin: 0 10px;
                            ">
                <img :src="require('@/assets/images/devexpress.png')" width="35">

              </div>
            </v-card-text>

          </v-img>
        </v-card>
      </v-hover>
    </div>
  </v-container>
</template>

<style scoped> 
.v-card--reveal {
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
}


.btn-div {
  background-color:#f8fcff;
  display: flex;
  padding: 10px;
  width: max-content;
  border-radius: 20px;
  margin: 20px;
  
}
.custom-card{
  margin: 10px!important;
  border-radius: 10px;
  box-shadow:0px 0px 10px 0px;
  max-width: 320px;
  min-width: 320px;
  max-height: 344px;
  min-height: 344px;
}
.v-img{
  width: 100%;
  height: 100%;
}

.hover-card .v-card-text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.v-card {
    border-color: rgba(var(--v-border-color),var(--v-border-opacity));
    border-radius: 15px !important;
    box-shadow: 0px 0px 10px 0px !important;
    background-image: url('@/assets/images/background.png');
    
}
.v-card .v-card-text {
    height: 100% !important;
    flex: inherit !important;
    display: grid !important;
    align-content: center !important;
}

</style>