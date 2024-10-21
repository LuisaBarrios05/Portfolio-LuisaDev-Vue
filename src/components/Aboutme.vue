<template>
    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h1 class="hello-button text-gray-700 ...">👋 Hola! Soy Luisa Barrrios, Desarrolladora Web Full Stack</h1>
        <h2 class="3xl:text-8xl ..."> </h2>
        <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-gray-800 submit-button hidden md:block">View My Work</button>
          <button class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">Contact Me</button>
        </div>
      </div>
      <div class="w-8/12 flex justify-end">
        <img class="w-[150px] md:w-[200px] lg:w-[350px] w-[350px] 3xl:h-[350px] rounded-full" :src="aboutImage" alt="user image" />

      </div>
    </div>
  </template>
  
  <script>
import aboutImage from '@/assets/fotoperfil.png';

export default {
  data() {
    return {
      aboutImage
    };
  }
};
</script>