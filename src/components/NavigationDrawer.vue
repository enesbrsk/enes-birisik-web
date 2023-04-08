<template>
    <v-navigation-drawer v-model="drawer" temporary location="right">
        <v-list-item :prepend-avatar="require('@/assets/images/9.png')" title="Enes Birişik"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item>
              <!-- <Icon @click.stop="drawer = !drawer" :icon="icons.closeIcon" />-->
            </v-list-item>
            <v-list-item v-for="item in items" :key="item.title" :title="item.title" :value="item.title"
                :to="item.link"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <div class="d-flex justify-center align-center h-100">
      <!--<Icon icon="material-symbols:clear-day" @click.stop="backgroundSet()" :color="colorDay ? 'black' : 'white'" />-->
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
</template>
  
<script>
export default {
    components: {
    },
    data() {
        return {
            items: [
                { title: 'Home', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Projects', link: '/projects' },
                { title: 'Skills', link: '/skills' },
                { title: 'Certification', link: '/certification' },
                { title: 'Contact', link: '/contact' },
            ],
            drawer: null,
            colorDay: null
        }
    },
    methods: {
        backgroundSet() {
            this.colorDay = !this.colorDay
            const body = document.querySelector('.v-application');
            const border = document.querySelector('.border');
            if (this.colorDay) {

                if (body != null) {
                    body.style.backgroundColor = 'white';
                    body.style.color = 'black'
                }
                if (border != null) {
                    border.style.borderColor = 'black';
                    border.style.borderWidth = '1px';
                }
                
            } else {
                if (body != null) {
                    body.style.backgroundColor = 'black';
                    body.style.color = 'white'
                }
                if (border != null) {
                    border.style.borderColor = 'white';
                    border.style.borderWidth = '1px';
                }
            }
        }
    },
    mounted() {
        this.backgroundSet(); // Komponent oluşturulduğunda backgroundSet metodunu çağırarak arka plan rengini ayarla
    }

}
</script>
<style scoped>
.justify-center {
    margin: 30px 20px;
    justify-content: space-between !important;
}

.v-list .v-list-item--nav:not(:only-child) {
    margin: 4px auto !important;
    width: fit-content !important;
}
</style>