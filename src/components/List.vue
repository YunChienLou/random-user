<template lang="pug">
div.w-full.bg-white.border.border-gray-200.rounded-lg.shadow
      div.flex.flex-col.items-center.pb-4
            img(src=`${imgUrl}` alt="User image").w-24.h-24.mb-3.rounded-full.shadow-lg
            div.flex
                  button(v-if="isfav" @click="removeFavList").bg-red-500.text-red-50.font-semibold.p-1.border.border-gray-500.rounded.mr-3.my-3
                        svg(fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true").w-6.h-6
                              path(stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z")
                  button(v-else @click="addFavList").bg-transparent.text-red-500.font-semibold.p-1.border.border-gray-500.rounded.mr-3.my-3
                        svg(fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true").w-6.h-6
                              path(stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z")
                  div
                        h5.mb-1.text-xl.font-medium.text-gray-900 {{ gender }}
                        span.text-sm.text-gray-500 {{ name }}
</template>

<script setup>
import { useStore } from "vuex";
const props = defineProps({
  imgUrl: { type: String, required: false },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  isfav: { type: Boolean, required: false },
});

const store = useStore();

const addFavList = () => {
  let user = {
    imgUrl: props.imgUrl,
    name: props.name,
    gender: props.gender,
  };
  console.log("addd")
  store.dispatch("pushFavList", user);
};

const removeFavList = (index) => {
      console.log("ermovve")
  store.dispatch("removeFavList", index);
};
</script>
