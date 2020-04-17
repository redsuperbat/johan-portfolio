<template>
  <div class="project-main">
    <div class="project-title">
      <h1 class="display-1 ml-2 mb-2 font-weight-light">{{ projectTitle }}</h1>
    </div>
    <div class="project-pic-wrapper">
      <ProjectPic
        v-for="(image, index) in projectPics"
        :key="index"
        :url="image.name"
        :index="index"
        :class="image.class"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectPic from "../components/ProjectPic.vue";
export default Vue.extend({
  name: "Project",
  computed: {
    projectPics() {
      console.log(this.$store.getters.getProjects);
      return this.$store.getters.getProjects;
    },
    projectTitle() {
      return this.$store.state.currentProject.title;
    }
  },
  components: {
    ProjectPic
  }
});
</script>

<style scoped>
.project-main {
  display: flex;
  flex-direction: column;
}
.project-pic-wrapper {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.span-2 {
  grid-row: 1 / span 2;
}

@media screen and (max-width: 500px) {
  .project-pic-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
