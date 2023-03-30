<template lang="pug">
div.w-full.max-w-sm.bg-white.border.border-gray-200.rounded-lg.shadow
      div.flex.flex-col.items-center.py-4
            img(:src="imageSrc" alt="User image" @click="clickOnCard()").w-24.h-24.mb-3.rounded-full.shadow-lg.cursor-pointer
            div.flex
                  button(v-if="isfav" @click="removeFavList").bg-red-500.text-red-50.font-semibold.p-1.border.border-gray-500.rounded.mr-3.my-3
                        svg(fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true").w-6.h-6
                              path(stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z")
                  button(v-else @click="addFavList" :disabled="isIdxArr" :class="{ Added:isIdxArr}").bg-transparent.text-red-500.font-semibold.p-1.border.border-gray-500.rounded.mr-3.my-3
                        svg(fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true").w-6.h-6
                              path(stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z")
                  div
                        h5.mb-1.text-xl.font-medium.text-gray-900 {{ gender }}
                        span.text-sm.text-gray-500 {{ name }} 
                  div(v-if="isfav")
                        span.text-sm.text-gray-500 ID: {{ userId }}
                  div(v-else)
                        span.text-sm.text-gray-500 ID: {{ amount * (currentPage - 1) + index + 1}}
</template>
<script setup>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  index: { type: Number, required: false },
  currentPage: { type: Number, required: false },
  amount: { type: Number, required: false },
  userId: { type: Number, required: false },
  isfav: { type: Boolean, required: false },
});

const imageSrc = ref("");
const store = useStore();
const isIdxArr = computed(() => {
  let id = props.amount * (props.currentPage - 1) + props.index + 1;
  return store.state.favIdxArry.includes(id);
});

const addFavList = () => {
  let user = {
    imgUrl: props.imgUrl,
    name: props.name,
    gender: props.gender,
    id: props.amount * (props.currentPage - 1) + props.index + 1,
  };
  store.dispatch("pushFavList", user);
  store.commit(
    "pushFavIdxArry",
    props.amount * (props.currentPage - 1) + props.index + 1
  );
};

watchEffect(() => {
  imageSrc.value = props.imgUrl;
});

const removeFavList = () => {
  console.log("remove no: ", props.index);
  store.dispatch("removeFavList", props.index);
  store.commit("removeFavIdxArry", props.index);
};

const clickOnCard = () => {
  let user = {
    imgUrl: props.imgUrl,
    name: props.name,
    gender: props.gender,
  };
  store.commit("setOpenModal", true);
  store.commit("setModalData", user);
};
</script>

<style>
.Added {
  background-color: rgb(255, 152, 169);
}
</style>
