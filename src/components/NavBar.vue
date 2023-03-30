<template lang="pug">
div.flex.justify-between.bg-zinc-700
      div.text-sm.font-medium.text-center.text-gray-500.border-gray-200.px-4
            ul.flex.flex-wrap.-mb-px.text-lg
                  li.mr-2
                        router-link(to="/" class='hover:text-gray-300').inline-block.p-4.border-b-2.border-transparent.rounded-t-lg All
                  li.mr-2
                        router-link(to="/favorite" class='hover:text-gray-300').inline-block.p-4.border-b-2.border-transparent.rounded-t-lg Favorite
                  
      div.flex
            select(v-model="selectValue" class='hover:text-gray-300').bg-transparent.border.border-gray-500.text-gray-500.text-sm.rounded.py-2.mr-3.px-3.my-3
                  option( :value="10" ) 10
                  option( :value="30" ) 30
                  option( :value="50" ) 50
            button(@click="btn_card_click" class='hover:text-gray-300' :class="{activeClass: !isList}").bg-transparent.text-gray-500.font-semibold.py-2.px-4.border.border-gray-500.rounded.mr-3.my-3
                  svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor").w-6.h-6
                        path(stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z")
            button(@click="btn_list_click" class='hover:text-gray-300' :class="{activeClass: isList}").bg-transparent.text-gray-500.font-semibold.py-2.px-4.border.border-gray-500.rounded.mr-3.my-3
                  svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor").w-6.h-6
                        path(stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z")


</template>

<script setup>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isList = computed(() => {
  return store.state.isList;
});
const amount = computed(() => {
  return store.state.userAmount;
});
const selectValue = ref();

const btn_list_click = () => {
  store.dispatch("setIsList", true);
};
const btn_card_click = () => {
  store.dispatch("setIsList", false);
};
const setUserAmount = (amount) => {
  store.dispatch("setUserAmount", amount);
  console.log("setUserAmount ", amount);
};

selectValue.value = store.state.userAmount;

watchEffect(() => {
  if (selectValue.value != null) {
    store.dispatch("setUserAmount", selectValue.value);
  }
});
</script>

<style scoped>
.activeClass {
  color: red;
}
.router-link-active {
  text-decoration: underline;
  color: red;
  display: inline-block;
}
</style>
