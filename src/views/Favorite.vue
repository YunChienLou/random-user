<template lang="pug">
div(v-if="isList").grid.grid-cols-5.gap-4.m-4
      Card(v-for="(user,i) in users" :index="i" :isfav="true" :imgUrl="user.imgUrl" :name="user.name" :gender="user.gender")
div(v-else).grid.grid-cols-1.gap-4.m-4
      List(v-for="(user) in users" :isfav="true" :imgUrl="user.imgUrl" :name="user.name" :gender="user.gender")
</template>

<script setup>
import Card from "../components/Card.vue";
import List from "../components/List.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();
const users = computed(()=>{
      return store.state.favList;
});
const currentPage = ref(1);

const amount = computed(() => {
  return store.state.userAmount;
});
const isList = computed(() => {
  return store.state.isList;
});



watchEffect(() => {
  //   get_pagination_user(currentPage.value, amount.value).then((res) => {
  //     console.log(res);
  //     users.value = res.data.results;
  //   });
});

onMounted(() => {
});
</script>
