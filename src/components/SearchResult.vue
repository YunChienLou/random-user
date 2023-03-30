<template lang="pug">
div(v-if="isList" class="lg:grid-cols-5 md:grid-cols-3").grid.grid-cols-1.gap-4.m-4
      Card(v-for="(user,index) in users" :imgUrl="user.picture.large" :index="index" :amount="amount" :currentPage="currentPage" :name="user.name.first+' '+user.name.last" :gender="user.gender")
div(v-else).grid.grid-cols-1.gap-4.m-4
      List(v-for="(user,index) in users" :imgUrl="user.picture.large" :index="index" :amount="amount" :currentPage="currentPage" :name="user.name.first+' '+user.name.last" :gender="user.gender")
paginate(
  :page-count="maxPage"
  :click-handler="clickPage"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'paginate'"
  :page-class="'page-item'"
  ).inline-flex.items-center.-space-x-px.m-5
  
</template>

<script setup>
import Card from "./Card.vue";
import List from "./List.vue";
import Paginate from "vuejs-paginate-next";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { get_pagination_user } from "../axios";
import { useStore } from "vuex";

const store = useStore();
const users = ref();
const currentPage = computed(() => {
  return store.state.currentPage;
});
const amount = computed(() => {
  return store.state.userAmount;
});
const isList = computed(() => {
  return store.state.isList;
});
const maxPage = computed(() => {
  return Math.ceil(3010 / amount.value);
});

const clickPage = (index) => {
  store.dispatch("setCurrentPage", index);
};

watch(amount, () => {
  store.dispatch("setCurrentPage", 1);
});

watchEffect(() => {
  get_pagination_user(currentPage.value, amount.value).then((res) => {
    users.value = res.data.results;
  });
});

onMounted(() => {
  get_pagination_user(currentPage.value, amount.value).then((res) => {
    users.value = res.data.results;
  });
});
</script>

<style>
/* Write your own CSS for pagination */
.page-item {
  display: block;
  border: 1px solid gray;
}
.page-link {
  display: inline-block;
  padding: 1em;
}
.page-item:hover {
  background-color: aliceblue;
  color: black;
}
.active{
  background-color: antiquewhite;
  background-color: aliceblue;
  color: black;
}
</style>
