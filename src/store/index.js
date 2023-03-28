import { createStore } from "vuex";

const store = createStore({
  state: {
    isList: false,
    userAmount: 30,
    favList: [],
    currentPage: 1,
  },
  mutations: {
    setIsList(state, payload) {
      state.isList = payload;
    },
    setUserAmount(state, payload) {
      state.userAmount = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    pushFavList(state, payload) {
      state.favList.push(payload);
    },
    removeFavList(state, index) {
      state.favList.splice(index, 1);
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
  },
  actions: {
    async getIsList(state) {
      return state.state.isList;
    },
    async getUserAmount(state) {
      return state.state.userAmount;
    },
    async getFavList(state) {
      return state.state.favList;
    },
    async setIsList(context, boolean) {
      context.commit("setIsList", boolean);
    },
    async setUserAmount(context, amount) {
      context.commit("setUserAmount", amount);
    },
    async setCurrentPage(context, amount) {
      context.commit("setCurrentPage", amount);
    },
    async pushFavList(context, user) {
      context.commit("pushFavList", user);
    },
    async removeFavList(context, index) {
      context.commit("removeFavList", index);
    },
  },
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
