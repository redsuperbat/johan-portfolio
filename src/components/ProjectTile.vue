<template>
  <div class="tile-main" @click="$emit('handleClick')">
    <img
      :src="require(`@/assets/images/${url}`)"
      width="100%"
      height="100%"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
      class="image"
    />
    <div class="hover-overlay" v-if="hovering">
      <h1 class="font-weight-light">{{ title }}</h1>
      <p style="text-decoration:underline;" class="overline">View!</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
export default Vue.extend({
  name: "ProjectTile",
  props: {
    url: String,
    title: String
  },
  mounted() {
    this.tileStyle = `background-image: url('~@/assets/images/${this.url}');`;
  },
  components: {},
  data: () => ({
    tileStyle: "",
    hovering: false
  })
});
</script>

<style scoped>
.tile-main {
  position: relative;
  cursor: pointer;
  margin: 0.4em;
  z-index: 2;
}
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(39, 39, 39, 0.6);
  height: 98.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  color: white;
  z-index: 1;
  animation: fade 0.2s ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
