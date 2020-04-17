<template>
  <div class="project-pic-main">
    <img
      :src="require(`../assets/images/${url}`)"
      v-show="render"
      class="project-image"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectPic",
  data: () => ({
    render: false
  }),
  props: {
    url: String,
    index: Number
  },
  created() {
    setTimeout(() => (this.render = true), 300 * this.index);
  }
});
</script>

<style scoped>
.project-image {
  animation: fade 0.4s;
  width: 100%;
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
