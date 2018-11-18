<template>
  <q-layout>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import SimplePage from '../components/SimplePage.vue'
export default {
  components: {
    SimplePage
  }
}
</script>
