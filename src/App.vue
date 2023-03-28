<template lang="pug">
NavBar
RouterView
</template>

<script setup>
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";


const store = useStore();

store.commit("initialiseStore")

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
