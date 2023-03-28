<template lang="pug">
div.grid.grid-cols-5.gap-4.m-4
      Card(v-for="user in users" :imgUrl="user.picture.thumbnail" :name="user.name.first+' '+user.name.last" :gender="user.gender")
</template>

<script setup>
import Card from "./Card.vue";
import { onMounted, ref } from "vue";
import { get_pagination_user } from "../axios";
import { useStore } from "vuex";

const store = useStore();
const users = ref();


onMounted(() => {
  get_pagination_user(1, 50).then((res) => {
    console.log(res);
    users.value = res.data.results;
  });
});
</script>
