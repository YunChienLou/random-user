import { createStore } from "vuex";

const store = createStore({
  state: {
    isList: false,
    userAmount: 30,
    favList: [],
  },
  mutations: {
    setIsList(state, payload) {
      state.isList = payload;
    },
    setUserAmount(state, payload) {
      state.userAmount = payload;
    },
    pushFavList(state, payload) {
      state.favList.push(payload);
    },
    removeFavList(state, index) {
      state.favList.splice(index, 1);
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
    async pushFavList(context, user) {
      context.commit("pushFavList", user);
    },
    async removeFavList(context, index) {
      context.commit("removeFavList", index);
    },
  },
});

export default store;
