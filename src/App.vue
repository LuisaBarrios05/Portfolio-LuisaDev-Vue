<!-- App.vue -->
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import sistemproject from './assets/sistemainventario.png'
import batataproject from './assets/batatabit.png'
import aboutImage from './assets/fotoperfil.png';
import Swal from "sweetalert2";

const projects = ref([
  {
    title: 'Sistema de gestión de inventario',
    description: 'Permite crear, editar, buscar y filtrar productos. Con funcionalidad para visualizar diferentes costos según métodos de pago, actualizar porcentajes y también incluye inicio de sesión con roles diferenciados',
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Node.js', 'Sequelize', 'PostgreSQL', 'Firebase', 'Docker'],
    image: sistemproject,
    link: 'https://client-inventory-management-system.vercel.app/login'
  },
  {
    title: 'Responsive Landing Page',
    description: 'Landing Page diseñada para adaptarse a diferentes dispositivos, incluyendo celulares, tabletas y ordenadores.',
    tech: ['Javascript', 'React', 'Vite', 'HTML', 'CSS'],
    image: batataproject,
    link: 'https://responsive-landing-page-9d1.pages.dev/'
  },
  // {
  //   title: 'Proyecto 3',
  //   description: 'Dashboard administrativo con autenticación y roles',
  //   tech: [ 'Node.js'],
  //   image: '/api/placeholder/400/250',
  //   link: '#'
  // }
])

const skills = ref([
  'HTML5', 'CSS', 'JavaScript', 'React', 'Redux', 'Tailwind CSS', 'Vite',
  'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'Git', 'Firebase', 'Docker'
])

const showMore = ref(false);

const toggleText = () => {
  showMore.value = !showMore.value;
};

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};


function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "¡Copiado!",
        text: "Dirección de Gmail copiada al portapapeles.",
        timer: 2500,
        showConfirmButton: false
      });
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo copiar la dirección al portapapeles.",
      });
      console.error("Error al copiar al portapapeles: ", err);
    });
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-neutral-50 to-purple-50">
    <!-- Header/Nav -->
    <nav class="bg-white/70 backdrop-blur-sm fixed w-full z-10 border-b border-purple-100">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          </div>
          <div class="lg:flex hidden gap-8">
  <a href="#about" class="text-gray-700 hover:text-purple-600 transition-colors">Sobre mí</a>
  <a href="#projects" class="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
  <a href="#contact" class="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
  <a href="/CV-Luisa Barrios.pdf" download="CV-Luisa Barrios.pdf" class="text-gray-700 hover:text-purple-600 transition-colors">Descargar CV</a>
</div>
<div class="lg:hidden">
  <button class="text-gray-700 hover:text-purple-600" @click="toggleMenu">Menú</button>
  <div v-if="menuOpen" class="flex flex-col gap-4">
    <a href="#about" class="text-gray-700 hover:text-purple-600 transition-colors">Sobre mí</a>
    <a href="#projects" class="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
    <a href="#contact" class="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
    <a href="/CV-Luisa Barrios.pdf" download="CV-Luisa Barrios.pdf" class="text-gray-700 hover:text-purple-600 transition-colors">Descargar CV</a>
  </div>
</div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="about" class="pt-28 pb-20 px-12 relative">

      <div class="container mx-auto flex flex-col  sm:flex-col lg:flex-row items-center lg:items-start ">
        <div class="lg:w-1/2 text-center sm:text-center lg:text-left px-4 lg:px-20">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
            Luisa Barrios
          </h1>
          <p class="m:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-purple-600 mb-10">Desarrolladora Web Full Stack</p>

          <p class="sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 mb-0 max-w-3xl mx-auto leading-relaxed text-justify sm:text-left">
            Entuasiasta en crear soluciones web, trabajo en el desarrollo de aplicaciones completas, enfocándome tanto
            en el<span class="inline-flex items-baseline text-purple-600">
              <Icon icon="mdi:code-tags" class="w-5 h-4 mr-0 ml-1" /> Frontend
            </span> como en el <span class="inline-flex items-baseline text-purple-600">
              <Icon icon="mdi:server" class="w-5 h-4 mr-1" /> Backend
            </span>. Tengo experiencia en la creación de interfaces de usuario, así como en la lógica del servidor,
            asegurando una experiencia integral y eficiente.
          </p>
          <span v-if="showMore">
            <p class="sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 mb-0 max-w-3xl mx-auto leading-relaxed text-justify sm:text-left">
              Actualmente, estoy trabajando de manera freelance, lo que me ha permitido gestionar proyectos de principio
              a fin, desde la planificación hasta el deployment. Tengo afinidad por el Frontend, aunque también disfruto
              enfrentar desafíos en el Backend, optimizando la lógica y los procesos detrás de las aplicaciones.</p>

            <p class="sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 mb-0 max-w-3xl mx-auto leading-relaxed text-justify sm:text-left"> Cuento con conocimientos sobre <span class="font-semibold">hosting</span> y despliegue en plataformas como <span class="font-semibold">Vercel</span>, <span class="font-semibold">Google Cloud</span>, <span class="font-semibold">Xata</span> y <span class="font-semibold">Netlify</span>, asegurando que los
              proyectos sean accesibles. Me encuentro aprendiendo, explorarando nuevas tecnologías y trabajando en
              proyectos para crecer profesionalmente.</p>
          </span>

          <button v-on:click="toggleText" class="text-purple-600  underline focus:outline-none hover:text-rose-500">
            {{ showMore ? 'Ver menos' : 'Ver más' }}
          </button>
          <div class="flex flex-col md:flex-row gap-4 mt-8 mb-6 sm:items-center sm:justify-center lg:w-full  lg:justify-start">
            <a href="#contact"
              class="relative inline-block px-8 py-3 lg:px-4 lg:py-2 md:px-3 md:py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-rose-500 overflow-hidden group animate-zoom">
              Contactar
            </a>
            <a href="#projects"
              class="border-2 border-purple-600 text-purple-600 px-6 py-3 lg:px-3 lg:py-2 md:px-2 md:py-2 rounded-lg hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl" style="box-sizing: border-box;">
              Ver proyectos
            </a>
          </div>
        </div>


        <div class="lg:w-1/2 flex justify-center lg:justify-end lg:pr-20 mt-6 sm:mt-12">
          <img :src="aboutImage" alt="Foto de Luisa"
            class="w-64 sm:w-64 md:w-72 lg:w-72 h-auto  rounded-full shadow-lg shadow-[#4c3db8]/50 mt-[-36px]" />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gradient-to-b from-white/50 to-purple-50/30 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Tecnologías
        </h2>
        <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <div v-for="skill in skills" :key="skill"
            class="bg-white/70 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100">
            {{ skill }}
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gradient-to-b from-purple-50/30 to-rose-50/30">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Proyectos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
            class="transform transition-transform duration-300 hover:scale-105 bg-white/80  rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-700 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.tech" :key="tech"
                  class="bg-purple-50 text-purple-600 px-2 py-1 rounded-md text-sm border border-purple-100">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.link" target="_blank"
                class="font-bold inline-flex items-center underline text-purple-600 hover:text-rose-500 transition-colors">
                Ver proyecto
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-b from-purple-50/30 to-rose-50/30">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Contacto
        </h2>
        <p class="text-center text-gray-700 mb-8 text-lg">No dudes en contactarme para cualquier consulta o proyecto.
          ¡Estoy aquí para eso!</p>
        <div class="max-w-md mx-auto">
          <div class="flex justify-center space-x-6 mb-5">
            <a href="https://github.com/LuisaBarrios05" target="_blank"
              class="text-gray-600 hover:text-purple-600 transition-colors">
              <Icon icon="mdi:github" class="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/luisa-eleonor-barrios/" target="_blank"
              class="text-gray-600 hover:text-purple-600 transition-colors">
              <Icon icon="mdi:linkedin" class="w-10 h-10" />
            </a>
            <button
          class="text-gray-600 hover:text-purple-600 transition-colors relative group"
          v-on:click="copyToClipboard('luisabarrios01@gmail.com')">
          <Icon icon="mdi:email" class="w-10 h-10" />
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-5 py-1 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Copiar dirección de Gmail
          </span>
        </button>
            <a href="https://wa.me/5493758430739" target="_blank"
              class="text-gray-600 hover:text-purple-600 transition-colors">
              <Icon icon="mdi:whatsapp" class="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white/70 backdrop-blur-sm py-8 border-t border-purple-100">
      <div class="container mx-auto px-6 text-center text-gray-700">
        <p>© 2024 Luisa Barrios. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>