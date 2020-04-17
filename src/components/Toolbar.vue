<template>
  <div class="toolbar-main" v-if="$vuetify.breakpoint.smAndUp">
    <div class="buttons">
      <v-btn
        text
        v-for="(item, name) in header"
        :key="name"
        @click="route(item)"
        class="toolbar-button"
        ><span :style="item.clicked ? 'text-decoration: underline;' : ''">
          {{ item.name }}</span
        ></v-btn
      >
    </div>

    <div class="toolbar-title ma-5">
      <h1 class="title font-weight-light">JOHAN HAUBO DESIGN</h1>
      <span class="font-italic font-weight-medium" style="text-align:end;"
        >Concept Artist</span
      >
    </div>
  </div>
  <MobileDropDown v-else :header="header" />
</template>

<script lang="ts">
import Vue from "vue";
import MobileDropDown from "./MobileDropDown.vue";
// @ is an alias to /src
export default Vue.extend({
  name: "Toolbar",
  created() {},

  components: {
    MobileDropDown
  },

  methods: {
    route(item: any) {
      this.resetClicks();
      item.clicked = true;
      this.$store.commit("setCurrentPage", item.name);
      this.$router.push({ name: item.name });
    },
    resetClicks() {
      this.header.forEach(item => (item.clicked = false));
    }
  },

  data: () => ({
    header: [
      { name: "Portfolio", clicked: false },
      { name: "Projects", clicked: false },
      { name: "Contact", clicked: false }
    ]
  })
});
</script>

<style scoped>
.toolbar-main {
  position: fixed;
  display: flex;
  justify-content: space-between;

  width: 100%;
}
.buttons {
  display: flex;
  align-items: center;
}
.toolbar-title {
  display: flex;
  flex-direction: column;
}
.toolbar-button:hover {
  text-decoration: underline;
}
</style>
