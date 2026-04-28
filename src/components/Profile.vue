<script setup>
import { Icon } from "@iconify/vue";

const techStack = [
  { name: "Javascript", icon: "logos:javascript" },
  { name: "Python", icon: "logos:python" },
  { name: "NodeJS", icon: "logos:nodejs-icon" },
  { name: "RESTful API", icon: "material-symbols:api-rounded" },
  { name: "Flask", icon: "logos:flask" },
  { name: "Git", icon: "logos:git-icon" }
];

const dataTools = [
  { name: "Scikit Learn", icon: "logos:scikit-learn" },
  { name: "Pandas", icon: "logos:pandas-icon" },
  { name: "Numpy", icon: "logos:numpy" },
  { name: "Tensorflow", icon: "logos:tensorflow" },
  { name: "Seaborn", icon: "logos:seaborn-icon" },
  { name: "Power BI", icon: "logos:microsoft-power-bi" },
  { name: "MS Excel", icon: "logos:microsoft-excel" },
  { name: "MS Word", icon: "logos:microsoft-word" },
  { name: "MS PowerPoint", icon: "logos:microsoft-powerpoint" }
];
</script>

<template>
  <main class="bg-white dark:bg-dark-purple transition-colors duration-500 py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left Column: About Me -->
        <div class="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8">          
          <div class="text-center lg:text-left space-y-4">
            <h1 class="text-base font-semibold leading-7 text-claret uppercase tracking-widest">Introduction</h1>
            <p class="text-xl font-medium text-claret dark:text-smoke/90">Halo 👋, Saya Ary</p>
          </div>

          <div class="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-4 font-lato leading-relaxed">
            <p>
              Saya adalah lulusan Teknik Informatika dengan minat pada pengembangan teknologi dan analisis data. Latar belakang ini memberikan saya dasar yang kuat dalam pemrograman dan pemahaman algoritma.
            </p>
            <p>
              Saya pernah mengikuti program Pertukaran Mahasiswa Merdeka, yang memperluas wawasan akademik sekaligus melatih kemampuan adaptasi, komunikasi, dan kerja sama dalam lingkungan baru.
            </p>
            <p>
              Selain itu, saya aktif mengerjakan project freelance selama kuliah yang melibatkan pengembangan aplikasi dan sistem. Dalam tiga bulan terakhir, saya fokus mendalami data science dengan mempelajari analisis data, machine learning, dan penerapannya pada kasus nyata.
            </p>
          </div>
        </div>

        <!-- Right Column: Skills -->
        <div class="lg:col-span-7 space-y-12">
          <!-- Tech Stack -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="h-10 w-1 bg-claret rounded-full"></div>
              <h2 class="text-2xl font-bold text-rich-black dark:text-white">Tech Stack</h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div v-for="tech in techStack" :key="tech.name" 
                class="group flex items-center gap-3 p-4 bg-smoke dark:bg-white/5 rounded-2xl border border-transparent hover:border-claret/30 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="p-2 bg-white dark:bg-dark-purple rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon :icon="tech.icon" class="w-6 h-6" />
                </div>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
              </div>
            </div>
          </section>

          <!-- Data Tools -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="h-10 w-1 bg-tryan-purple rounded-full"></div>
              <h2 class="text-2xl font-bold text-rich-black dark:text-white">Data Tools</h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div v-for="tool in dataTools" :key="tool.name" 
                class="group flex items-center gap-3 p-4 bg-smoke dark:bg-white/5 rounded-2xl border border-transparent hover:border-tryan-purple/30 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="p-2 bg-white dark:bg-dark-purple rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon :icon="tool.icon" class="w-6 h-6" />
                </div>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ tool.name }}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.prose p {
  margin-bottom: 1rem;
}
</style>

