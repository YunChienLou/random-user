<template lang="pug">
div.grid.grid-cols-5.gap-4.m-4
      Card(v-for="user in users" :imgUrl="user.picture.thumbnail" :name="user.name.first+' '+user.name.last" :gender="user.gender")
</template>

<script setup>
import Card from "./Card.vue";
import { inject, onMounted, ref } from "vue";
const axios = inject("axios");
const users = ref();

onMounted(() => {
  axios.get("https://randomuser.me/api/?results=10").then((res) => {
    users.value = res.data.results;
  });
});
</script>
