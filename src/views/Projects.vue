<template>
  <div class="projects-main">
    <ProjectTile
      v-for="(project, i) in projects"
      :key="i"
      :url="project.url"
      :title="project.title"
      @handleClick="handleClick(project)"
    />
  </div>
</template>

<script lang="ts">
import ProjectTile from "../components/ProjectTile.vue";
import Vue from "vue";
// @ is an alias to /src
export default Vue.extend({
  name: "Projects",
  data: () => ({
    projects: [
      {
        url: "griffin-riders-1.jpg",
        title: "Griffin Riders",
        family: "griffin"
      },
      { url: "medevial-1.jpg", title: "Medevial", family: "medevial" },
      { url: "viking-4.jpg", title: "Norse Warriors", family: "viking" },
      { url: "house-0.jpg", title: "Buildings", family: "buildings" }
    ]
  }),
  methods: {
    handleClick(project: any) {
      this.$store.commit("setCurrentProject", {
        title: project.title,
        family: project.family
      });
      this.$router.push({
        name: "Project",
        params: { projectName: project.family }
      });
    }
  },
  components: { ProjectTile }
});
</script>

<style scoped>
.projects-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

@media screen and (max-width: 500px) {
  .projects-main {
    grid-template-columns: 1fr;
  }
}
</style>
