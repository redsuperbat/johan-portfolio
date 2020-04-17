<template>
  <div class="main-contact">
    <div class="info-wrapper ml-5">
      <h1
        :class="{
          'display-2': $vuetify.breakpoint.smAndUp,
          'font-weight-bold': true
        }"
      >
        I am Johan Haubo
      </h1>
      <div
        :class="{
          'display-2': $vuetify.breakpoint.smAndUp,
          title: $vuetify.breakpoint.xsOnly,
          'font-weight-bold': true
        }"
      >
        <span>Concept </span
        ><span
          style="text-decoration:underline; text-decoration-color: lightblue;"
          >Artist</span
        >
      </div>
      <p class="mt-8">Contact me on: johan.haubo@gmail.com</p>
    </div>
    <div class="image">
      <img src="@/assets/johan-haubo.png" alt="Johan Haubo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Contact"
});
</script>

<style scoped>
.main-contact {
  display: flex;
  justify-content: space-between;
}
.info-wrapper {
  display: flex;
  flex-direction: column;
}
img {
  height: 350px;
}
@media screen and (max-width: 750px) {
  img {
    height: 100px;
  }
}
</style>
