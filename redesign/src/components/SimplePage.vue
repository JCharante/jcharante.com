<template>
  <div class="layout-padding" style="max-width: 90vw; width: 800px; margin-top: 0vh;">
    <SimpleNavbar/>
    <hr>
    <slot/>
    <hr>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import SimpleNavbar from '../components/SimpleNavbar.vue'
export default {
  components: {
    Footer,
    SimpleNavbar
  }
}
</script>
