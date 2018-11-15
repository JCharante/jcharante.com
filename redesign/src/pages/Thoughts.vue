<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <SimplePage>
          <div>
            <p>Hey,</p>
            <p>Here I just have write ups about what I think at the time of writing. Of course people will disagree on some things,
            and I'm always open to having my mind changed. So feel free to email me with comments.</p>
            <ul>
              <li>No more bag in FRC</li>
              <li>Why I live the way I do (re: veganism)</li>
              <li>Thoughts on PETA</li>
              <li>Robot Atheists</li>
              <li>The overuse of the word "terrorist"</li>
              <li>Texas is too hot</li>
            </ul>
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
  }
}
</script>
