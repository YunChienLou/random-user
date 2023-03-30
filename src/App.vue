<template lang="pug">
NavBar
RouterView
Modal(ref="modalRef")
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
import Modal from "./components/Modal.vue";

const store = useStore();
const isOpenModal = computed(() => {
  return store.state.openModal;
});
store.commit("initialiseStore");

const modalRef = ref();

watchEffect(() => {
  if (modalRef.value != undefined) {
    if (isOpenModal.value == true) {
      modalRef.value.openModal();
    } else {
      modalRef.value.closeModal();
    }
  }
});
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
