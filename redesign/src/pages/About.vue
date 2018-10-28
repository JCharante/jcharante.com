<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <SimplePage>
          <div>
            <p>Want to know my name? <a href="https://static.jcharante.com/name.svg">consult this flowchart</a></p>
            <p>Need to shoot me an email? <a href="mailto:contactme@jcharante.com">contactme@jcharante.com</a></p>
            <p>If you're looking for my <a href="https://static.jcharante.com/resume-john-zarate.pdf">resume, here it is</a></p>
            <p>I did web development in High School, but I always tinkered with back-end solutions.</p>
            <p>I was born and lived in Lima, Peru, but I later moved to Portland, ME.</p>
            <p>I'm in the Greater Boston area working on my studies at Worcester Polytechnic Institute.</p>
            <p>I main Pop!_OS, and it's a great OS, but I'm forced to use Windows 10 for robotics & recreational purposes.</p>
            <p>I'm an aspiring polyglot, and hope to fluent in 5 languages by the time I graduate from WPI.</p>
            <ul>
              <li>L1: Spanish, English</li>
              <li>L2: Esperanto</li>
              <li>L3: Vietnamese, Mandarin?</li>
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
