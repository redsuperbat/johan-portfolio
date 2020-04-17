<template>
  <v-app>
    <Toolbar />
    <router-view style="margin-top: 95px" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from "./components/Toolbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Toolbar
  },
  created() {
    const imgData = require("@/assets/images.json");
    this.$store.commit("setImageData", imgData);
  },
  methods: {},

  data: () => ({})
});
</script>
