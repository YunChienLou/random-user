<template lang="pug">
#defaultModal.fixed.top-0.left-0.right-0.z-50.hidden.w-full.p-4.overflow-x-hidden.overflow-y-auto(tabindex='-1', aria-hidden='true', class='md:inset-0 h-[calc(100%-1rem)] md:h-full')
      .relative.w-full.h-full.max-w-2xl(class='md:h-auto')
        // Modal content
        .relative.bg-white.rounded-lg.shadow(class='dark:bg-gray-700')
          // Modal header
          .flex.items-start.justify-between.p-4.border-b.rounded-t(class='dark:border-gray-600')
            h3.text-xl.font-semibold.text-gray-900(class='dark:text-white')
              | 使用者資料 
            button.text-gray-400.bg-transparent.rounded-lg.text-sm.ml-auto.inline-flex.items-center(type='button', class='hover:bg-gray-200 hover:text-gray-900 p-1.5 dark:hover:bg-gray-600 dark:hover:text-white', @click="closeModal")
              svg.w-5.h-5(aria-hidden='true', fill='currentColor', viewBox='0 0 20 20', xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd', d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z', clip-rule='evenodd')
              span.sr-only Close modal
          // Modal body
          .p-6.space-y-6
            
              img(:src="imageSrc" alt="User image" style="height:20rem").mx-auto
          
              p.text-base.leading-relaxed.text-gray-500(class='dark:text-gray-400') {{modalData.gender}}
              p.text-base.leading-relaxed.text-gray-500(class='dark:text-gray-400') {{modalData.name}}
              
            
          // Modal footer
          .flex.items-center.p-6.space-x-2.border-t.border-gray-200.rounded-b(class='dark:border-gray-600')
            button.text-gray-500.bg-white.rounded-lg.border.border-gray-200.text-sm.font-medium.px-5(@click="closeModal" type='button', class='hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600') 關閉
</template>

<script setup>
import { Modal } from "flowbite";
import { useStore } from "vuex";
import { computed, onMounted, ref, watchEffect } from "vue";

const imageSrc = ref("");
const store = useStore();

// set the modal menu element
const modalData = computed(() => {
  return store.state.modalData;
});

let modal;

onMounted(() => {
  const defaultDom = document.getElementById("defaultModal");

  const options = {
    placement: "center",
    backdrop: "dynamic",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    onHide: () => {
      // console.log("modal is hidden");
      store.commit("setOpenModal", false);
    },
    onShow: () => {
      // console.log("modal is shown");
    },
    onToggle: () => {
      // console.log("modal has been toggled");
    },
  };

  modal = new Modal(defaultDom, options);
});

watchEffect(() => {
  imageSrc.value = modalData.value.imgUrl;
});

const openModal = () => {
  modal.show();
  // console.log("modal 層級 開啟");
};
const closeModal = () => {
  modal.hide();
  // console.log("modal 層級 關閉");
};
defineExpose({
  openModal,
  closeModal,
});
</script>
