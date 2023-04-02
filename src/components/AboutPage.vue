<template>
  <v-banner-text id="text" style="font-size: 3rem;font-weight: normal;text-align: center;padding-bottom: 10px;"
                 align="center">
    LEARN MORE ABOUT ME!
  </v-banner-text>

  <v-container class="about-container">

    <v-row align="center">

      <v-col cols="12" md="4">
        <img :src="require('@/assets/images/7.png')" alt="Developer" class="about-image"/>
      </v-col>

      <v-col align="left" cols="12" md="8" class="about-content">

        <div>
          <v-row align="center" justify="start" style="column-gap: 20px;">
            <v-col>
              <div>
                <h2 style="margin: 0;">Birth:</h2>
                <h2 style="margin: 0;">City:</h2>
                <h2 style="margin: 0;">University:</h2>
                <h2 style="margin: 0;">Department:</h2>
                <h2 style="margin: 0;">Degree:</h2>
              </div>
            </v-col>
            <v-col>
              <div>
                <h2 style="margin: 0;">16 Dec 1998</h2>
                <h2 style="margin: 0;">Istanbul/ Turkey</h2>
                <h2 style="margin: 0;">Duzce University</h2>
                <h2 style="margin: 0;">Computer Engineering</h2>
                <h2 style="margin: 0;">Bachelor</h2>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-card-text align="left" class="about-description">
          I have experience building web applications, middleware, and RESTful APIs using languages and frameworks
          including Spring Boot, Hibernate, RDBMS, and NoSql. My strong understanding of fundamental CS concepts like
          object-oriented programming, aspect-oriented programming, MVC architecture, REST, SOAP, CI/CD, and TDD allows
          me to build software with modern techniques, service-based architecture, and third-party API integration. I am
          also extremely rigorous and perfectionist in my code, exactly as a Backend Developer should be.
        </v-card-text>
        <v-btn class="me-2 text-none"
               variant="outlined"
               prepend-icon="mdi-export-variant">Resume
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.about-container {
  text-align: left;
  padding: 40px;
  font-weight: 600;
  font-family: Arial;
  box-shadow: 0 4px 10px 0px rgba(50, 50, 50, 0.212);
}

.about-image {

  width: 100%;
  height: auto;
  margin: 0 auto;
}

.about-content {
  text-align: center;
}

.about-title {
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: bold;
}

.about-description {
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}
</style>