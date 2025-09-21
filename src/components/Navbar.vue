<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const menuIcon = ref("line-md:close-to-menu-alt-transition");

function toggleMenu() {
  let list = document.querySelector("ul");
  
  if (menuIcon.value === "line-md:close-to-menu-alt-transition") {
    menuIcon.value = "line-md:menu-to-close-alt-transition";
    list.classList.add('top-[64px]');
    list.classList.add('opacity-100');
  } else {
    menuIcon.value = "line-md:close-to-menu-alt-transition";
    list.classList.remove('top-[80px]');
    list.classList.remove('opacity-100');
  }
}
</script>

<template>
  <main class="bg-smoke dark:bg-rich-black transition-colors duration-300 fixed w-full">
    <nav class="md:flex justify-between items-center 2xl:mx-100 2xl:my-4 mx-5 my-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl dark:text-white">Ahmad Bukhari</h1>
        <Icon :icon="menuIcon" width="30" color="#110e1b" class="md:hidden" @click="toggleMenu"></Icon>
      </div>
      <div class="mx-5 md:flex md:items-center md:gap-x-10 md:opacity-100 opcacity-0">
        <ul class="md:flex md:gap-x-10 text-sm z-[-1] md:z-auto md:static absolute bg-smoke dark:bg-rich-black w-full left-0 py-4 pl-7 md:opacity-100 opacity-0 top-[-200px] transition-all ease-in duration-500">
          <li class="my-4">
            <router-link
              class="text-base font-lato font-semibold text-rich-black tracking-widest hover:underline hover:decoration-rich-black hover: decoration-2 hover:underline-offset-4 dark:text-white dark:hover:decoration-white"
              to="/home"
              >Home</router-link
            >
          </li>
          <li class="my-4">
            <router-link
              to="/profile"
              class="text-base font-lato font-semibold text-rich-black tracking-widest hover:underline hover:decoration-rich-black hover: decoration-2 hover:underline-offset-4 dark:text-white dark:hover:decoration-white"
              >Profile</router-link
            >
          </li>
          <li class="my-4">
            <router-link
              to="portofolio"
              class="text-base font-lato font-semibold text-rich-black tracking-widest hover:underline hover:decoration-rich-black hover: decoration-2 hover:underline-offset-4 dark:text-white dark:hover:decoration-white"
              >Portfolio</router-link
            >
          </li>
          <label class="switch my-4">
            <input type="checkbox" :checked="isDark" @change="toggleDark()" />
            <span class="slider round"></span>
          </label>
        </ul>
      </div>
    </nav>
  </main>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
