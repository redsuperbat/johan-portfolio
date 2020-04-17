<template>
  <div class="home">
    <div class="title-desc">
      <h1 class="display-1 font-weight-light">
        Portfolio
      </h1>
      <p class="mt-5">A collection of my latest work...</p>
    </div>
    <div class="images">
      <img
        v-for="(file, i) in filenames"
        :key="i"
        :src="require(`@/assets/images/${file.name}`)"
        class="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  computed: {
    filenames() {
      console.log(this.$store.state.imgData);
      return this.$store.state.imgData;
    }
  }
});
</script>

<style scoped>
.home {
  display: flex;
}
.title-desc {
  margin-left: 2em;
  margin-top: 5em;
  width: 30%;
  position: fixed;
  height: 100%;
}
.images {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
}
.image {
  margin: 10px;
  width: 80%;
}

@media screen and (max-width: 600px) {
  .home {
    flex-direction: column;
  }
  .title-desc {
    margin-left: 1em;
    position: relative;
    height: auto;
    width: auto;
    margin-top: 1.5em;
  }
  .images {
    margin-left: 0;
  }
  .image {
    width: 95%;
  }
}
</style>
