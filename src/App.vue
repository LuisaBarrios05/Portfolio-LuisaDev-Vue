<!-- App.vue -->
<script setup>
import { ref } from 'vue'
import { Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-vue-next'

const projects = ref([
  {
    title: 'Proyecto 1',
    description: 'Texto',
    tech: ['Tecnologías'],
    image: '/api/placeholder/400/250',
    link: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Texto',
    tech: ['Firebase', 'Tailwind CSS'],
    image: '/api/placeholder/400/250',
    link: '#'
  },
  {
    title: 'Proyecto 3',
    description: 'Dashboard administrativo con autenticación y roles',
    tech: [ 'Node.js'],
    image: '/api/placeholder/400/250',
    link: '#'
  }
])

const skills = ref([
  'HTML5', 'CSS3', 'JavaScript', 'React','Tailwind.css',
  'Node.js', 'Express', 'PostgreSQL', 'Git', 'Docker'
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-neutral-50 to-purple-50">
    <!-- Header/Nav -->
    <nav class="bg-white/70 backdrop-blur-sm fixed w-full z-10 border-b border-purple-100">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">LB (foto?)</div>
          <div class="flex gap-6">
            <a href="#about" class="text-gray-700 hover:text-purple-600 transition-colors">Sobre mí</a>
            <a href="#projects" class="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
            <a href="#contact" class="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 relative">
      <div class="absolute inset-0 bg-[#FEF2F3]"></div>
      <div class="container mx-auto text-center relative">
        <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Luisa Barrios
        </h1>
        <p class="text-2xl text-purple-600 mb-8">Desarrolladora  Web Full Stack</p>
        <p class="text-gray-700 max-w-2xl mx-auto mb-12">
          Entuasiasta en crear soluciones web, trabajo en el desarrollo de aplicaciones completas, enfocándome tanto en el Frontend como en el Backend. Tengo experiencia en la creación de interfaces de usuario, así como en la lógica del servidor, asegurando una experiencia integral y eficiente.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact" 
             class="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contactar
          </a>
          <a href="#projects" 
             class="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl">
            Ver proyectos
          </a>
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
          Proyectos Destacados
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" 
               class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100">
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
    <section id="contact" class="py-20 bg-gradient-to-b from-rose-50/30 to-purple-50/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
          Contacto
        </h2>
        <div class="max-w-md mx-auto">
          <div class="flex justify-center space-x-6 mb-8">
            <a href="https://github.com" target="_blank" 
               class="text-gray-600 hover:text-purple-600 transition-colors">
              <Github class="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank"
               class="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin class="w-6 h-6" />
            </a>
            <a href="mailto:email@ejemplo.com"
               class="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail class="w-6 h-6" />
            </a>
          </div>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="name" name="name"
                     class="mt-1 block w-full rounded-lg border-purple-100 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/70 backdrop-blur-sm">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email"
                     class="mt-1 block w-full rounded-lg border-purple-100 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/70 backdrop-blur-sm">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea id="message" name="message" rows="4"
                        class="mt-1 block w-full rounded-lg border-purple-100 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/70 backdrop-blur-sm"></textarea>
            </div>
            <button type="submit"
                    class="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enviar mensaje
            </button>
          </form>
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