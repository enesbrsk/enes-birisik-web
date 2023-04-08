<template>
  <section class="hero">
    <div class="textSection">
      <v-container fluid>
        <v-row><v-col cols="12" md="12">
            <h3 id="text">Hello, I am <span style="color: #0774d9">Enes Birisik</span></h3>
          </v-col></v-row>
        <v-row>
          <v-col cols="12" md="10">
            <h1 id="text">BACK-END DEVELOPER</h1>
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <img align="center" style="margin-left: 10px;width: 107px" width="100px"
              :src="require('@/assets/images/9.png')" alt="Developer" class="about-image" />
          </v-col>
        </v-row>
        <v-row class="description">
          <p class="job-1">• Eureko Sigorta</p>
        </v-row>
        <v-row class="CTA">
          <button class="btn btn-1">
            <a href="#contactPage">Let's get in touch!</a>
          </button></v-row>
      </v-container>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 0 20px;
}

.hero {
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f2f2f;
}

.hero h1 {
  margin: 1rem 0;
  font-size: 3rem;
  background: #4776e6;
  background: linear-gradient(to top, #4776e6 0%, #8e54e9 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.description {
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 1rem;
}

.description p {
  font-weight: 600;
  color: #968fb2;
}

.CTA {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.CTA button {
  margin: 0 10px;
  padding: 8px 16px;
}

.btn {


  background: #8e54e9;

  border-radius: 6px;
  box-shadow: 0 2px 4px rgb(45 35 66 / 35%), 0 7px 13px -3px rgb(45 35 66 / 25%);
  font-family: "Poppins";
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  border: none;
  transition: 300ms;
}

.btn a {
  color: #ffffff;
  text-decoration: none;
}

.btn:hover {
  background: #5584eb;
  text-decoration: none;
}


.btn-outline:hover {
  background: #3c6ed9;
  text-decoration: none;
  color: #ffffff;
}
</style>
