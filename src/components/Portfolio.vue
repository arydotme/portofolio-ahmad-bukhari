<script setup>
import { Icon } from "@iconify/vue";

const projects = [
  {
    title: "Knee Osteoarthritis",
    description: "Knee OA classification based on Kallgren & Laurance method",
    image: "/src/assets/KneeOA.png",
    tags: ["Personal Project", "Flask"],
    link: "#"
  },
  {
    title: "Nirwana Wood",
    description: "E-Commerce for UMKM raw wood in Blitar, East Java, Indonesia",
    image: "/src/assets/NirwanaWood.png",
    tags: ["CAPSTONE EXPO", "Laravel"],
    link: "#"
  },
  {
    title: "FAQ Campus",
    description: "Questions and Answers about academic activities at the university",
    image: "/src/assets/ChatBot.png",
    tags: ["Personal Project", "Python"],
    link: "#"
  },
  {
    title: "Kalla Toyota Talent Management",
    description: "Talent management system for Kalla Toyota",
    image: "/src/assets/kttm.png",
    tags: ["Javascript", "MySQL", "Node JS", "Tailwind CSS", "Next JS"],
    link: "https://kttm.kallatoyotapeople.com/"
  }
];
</script>

<template>
  <main class="bg-white dark:bg-dark-purple transition-colors duration-500 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <header class="mb-16 text-center">
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-rich-black dark:text-white sm:text-5xl">My Portfolio</h1>
      </header>

      <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.title" 
          class="group relative flex flex-col items-start bg-smoke dark:bg-dark-purple-2/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-claret/20 dark:hover:border-smoke/20 transform hover:-translate-y-2">
          
          <div class="relative w-full aspect-[16/9] overflow-hidden">
            <img :src="project.image" :alt="project.title" 
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div class="flex flex-col flex-1 p-6 sm:p-8">
            <div class="flex items-center justify-between mb-4">
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags.slice(0, 2)" :key="tag" 
                  class="inline-flex items-center rounded-full bg-claret/10 px-2.5 py-0.5 text-xs font-medium text-claret dark:text-smoke dark:bg-white/10">
                  {{ tag }}
                </span>
              </div>
              <a v-if="project.link" :href="project.link" target="_blank" 
                class="text-rich-black dark:text-white hover:text-claret dark:hover:text-claret transition-colors duration-300 p-2 rounded-full bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white shadow-sm">
                <Icon icon="heroicons:arrow-up-right-20-solid" class="w-5 h-5" />
              </a>
            </div>

            <h3 class="text-2xl font-bold leading-7 text-rich-black dark:text-white group-hover:text-claret transition-colors duration-300">
              <a :href="project.link !== '#' ? project.link : undefined" :target="project.link !== '#' ? '_blank' : undefined">
                <span class="absolute inset-0"></span>
                {{ project.title }}
              </a>
            </h3>
            
            <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-white/10">
              <span v-for="tag in project.tags" :key="tag" 
                class="text-[10px] font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                #{{ tag.replace(/\s+/g, '') }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

