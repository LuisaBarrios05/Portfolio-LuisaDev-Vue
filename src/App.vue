<template>
  <div class="banner-1">
    <NavBar :showMenu="showMenu" @toggleMenu="toggleMenu" />
    <Banner />
    <WorkSection />
    <Footer />
  </div> 

</template>
<script>
import NavBar from './components/NavBar.vue'
import Banner from './components/Aboutme.vue'
import WorkSection from './components/WorkSection.vue'
import Footer from './components/Footer.vue'

export default {
  components: { NavBar, Banner, WorkSection, Footer },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
