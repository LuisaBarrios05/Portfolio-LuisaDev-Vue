<template>
    <div class="banner-2 space-y-10 pb-20" id="work">
      <h3 class="heading3 my-5">My Recent Work</h3>
      <div v-for="project in projects" :key="project.id" class="card">
        <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
          <h4 class="project-title">{{ project.title }}</h4>
          <p class="font-work_sans">{{ project.description }}</p>
          <button class="text-sky-800 font-bold text-2xl tracking-wider">View Case Study</button>
        </div>
        <div class="card-image">
          <img class="object-cover w-full h-72 md:h-96" :src="project.image" />
        </div>
      </div>
    </div>
    <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">My Recent Work</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Sheepify States</h4>
        <p class="font-work_sans pr-12">
          Designed some empty state screens in kawaii style for the popular
          sheepify app.Tailwind lets you conditionally apply utility classes in
          different states using variant modifiers. For example, use hover:gap-6
          to only apply the gap-6 utility
        </p>
        <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="./assets/project1.png"
        />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Sheepify States</h4>
        <p class="font-work_sans pr-12">
          Designed some empty state screens in kawaii style for the popular
          sheepify app.Tailwind lets you conditionally apply utility classes in
          different states using variant modifiers. For example, use hover:gap-6
          to only apply the gap-6 utility
        </p>
        <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="./assets/project2.png"
        />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Sheepify States</h4>
        <p class="font-work_sans pr-12">
          Designed some empty state screens in kawaii style for the popular
          sheepify app.Tailwind lets you conditionally apply utility classes in
          different states using variant modifiers. For example, use hover:gap-6
          to only apply the gap-6 utility
        </p>
        <button class="text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="./assets/project1.png"
        />
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Sheepify States', description: 'Designed some empty state screens...', image: './assets/project1.png' },
          { id: 2, title: 'Sheepify States', description: 'Another project...', image: './assets/project2.png' },
        ],
      }
    },
  }
  </script>
  