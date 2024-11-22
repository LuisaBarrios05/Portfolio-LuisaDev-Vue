<!-- App.vue -->
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import sistemproject from './assets/sistemainventario.png'
import batataproject from './assets/batatabit.png'
import aboutImage from './assets/fotoperfil.png';

const projects = ref([
  {
    title: 'Sistema de gestión de inventario',
    description: 'Permite crear, editar, buscar y filtrar productos. Con funcionalidad para visualizar diferentes costos según métodos de pago, actualizar porcentajes y también incluye inicio de sesión con roles diferenciados',
    tech: ['JavaScript', 'React', 'Tailwind CSS','Vite','Node.js','Sequelize', 'PostgreSQL','Firebase', 'Docker'],
    image: sistemproject,
    link: 'https://client-inventory-management-system.vercel.app/login'
  },
  {
    title: 'Responsive Landing Page',
    description: 'Landing Page diseñada para adaptarse a diferentes dispositivos, incluyendo celulares, tabletas y ordenadores.',
    tech: ['Javascript','React', 'Vite', 'HTML', 'CSS'],
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
  'HTML5', 'CSS', 'JavaScript', 'React','Redux','Tailwind CSS','Vite',
  'Node.js', 'Express.js','Sequelize', 'PostgreSQL', 'Git','Firebase', 'Docker'
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-neutral-50 to-purple-50">
    <!-- Header/Nav -->
    <nav class="bg-white/70 backdrop-blur-sm fixed w-full z-10 border-b border-purple-100">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          </div>
          <div class="flex gap-8">
            <a href="#about" class="text-gray-700 hover:text-purple-600 transition-colors">Sobre mí</a>
            <a href="#projects" class="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
            <a href="#contact" class="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-28 pb-20 px-12 relative">
      
      <div class="container mx-auto flex flex-col lg:flex-row items-center gap-2">
      <div class="lg:w-1/2 text-center lg:text-left pl-10 lg:pl-20">
        <h1 class="text-6xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Luisa Barrios
        </h1>
        <p class="text-2xl text-purple-600 mb-10">Desarrolladora  Web Full Stack</p>
        <p class="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
           Entuasiasta en crear soluciones web, trabajo en el desarrollo de aplicaciones completas, enfocándome tanto en el<span class="inline-flex items-baseline text-purple-600">
            <Icon icon="mdi:code-tags" class="w-5 h-4 mr-0 ml-1" /> Frontend </span> como en el <span class="inline-flex items-baseline text-purple-600">
              <Icon icon="mdi:server" class="w-5 h-4 mr-1" /> Backend</span>. Tengo experiencia en la creación de interfaces de usuario, así como en la lógica del servidor, asegurando una experiencia integral y eficiente.
        </p>
        <div class="flex gap-5">
          <a href="#contact" 
          class="relative inline-block px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-rose-500 overflow-hidden group animate-zoom"> Contactar
</a>
          <a href="#projects" 
             class="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl">
            Ver proyectos
          </a>
        </div>
      </div>
    

    <div class="lg:w-1/2 flex justify-center lg:justify-end lg:pr-20">
      <img 
        :src="aboutImage" 
        alt="Foto de Luisa" 
        class="w-72 h-72 object-cover rounded-full shadow-lg shadow-[#4c3db8]/50 mt-[-36px]"
      />
    </div>
  </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gradient-to-b from-white/50 to-purple-50/30 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
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
        <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Proyectos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" 
               class="transform transition-transform duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100">
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
              <a :href="project.link" 
                 class="inline-flex items-center text-purple-600 hover:text-rose-500 transition-colors">
                Ver proyecto
                <ExternalLink class="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-b from-purple-50/30 to-rose-50/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Contacto
        </h2>
        <p class="text-center text-gray-700 mb-8 text-lg">No dudes en contactarme para cualquier consulta o proyecto. ¡Estoy aquí para eso!</p>
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
            <a href="luisabarrios01@gmail.com"
               class="text-gray-600 hover:text-purple-600 transition-colors">
              <Icon icon="mdi:email" class="w-10 h-10" />
            </a>
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