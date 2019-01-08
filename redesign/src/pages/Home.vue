<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <SimplePage>
          <div>
            <p>Hey, you can call me John. Or Johano. Or Jean Claude. It depends.</p>
            <p>I really struggle with thinking of what to put on the front page of things.</p>
            <p>But just pretend I have, like, a jumbotron with exciting news or something like that.</p>
          </div>
        </SimplePage>
      </q-page>
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
