<template lang="pug">
div(v-if="isList" class="lg:grid-cols-5 md:grid-cols-3").grid.grid-cols-1.gap-4.m-4
      Card(v-for="(user,i) in users" :userId="user.id" :index="i" :isfav="true" :imgUrl="user.imgUrl" :name="user.name" :gender="user.gender")
div(v-else).grid.grid-cols-1.gap-4.m-4
      List(v-for="(user) in users" :userId="user.id" :index="i" :isfav="true" :imgUrl="user.imgUrl" :name="user.name" :gender="user.gender")
div(v-if="!users.length" role="alert").p-4.mb-4.text-sm.text-red-800.rounded-lg.bg-red-500 No Fav Items
</template>

<script setup>
import Card from "../components/Card.vue";
import List from "../components/List.vue";

import { computed, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();
const users = computed(() => {
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
  console.log(users.value);
});

onMounted(() => {});
</script>
