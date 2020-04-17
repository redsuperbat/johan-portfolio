import Vue from "vue";
import Vuex from "vuex";
import Image from "../interfaces/image";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "Portfolio",
    imgData: [] as any[],
    currentProject: {} as Image
  },
  mutations: {
    setCurrentPage(state, page: string) {
      state.currentPage = page;
    },
    setImageData(state, imgData: []) {
      state.imgData = imgData;
    },
    setCurrentProject(state, project: Image) {
      state.currentProject = project;
    }
  },
  getters: {
    getProjects: state => {
      return state.imgData.filter(
        (file: Image) => file.family === state.currentProject.family
      );
    }
  },
  actions: {},
  modules: {}
});
