<template>
  <q-layout>
    <q-page-container>
      <router-link></router-link>
    </q-page-container>
  </q-layout>
</template>

<script>
import SimplePage from '../components/SimplePage.vue'
export default {
  components: {
    SimplePage
  },
  data () {
    return {
      showLeft: true
    }
  }
}
</script>
