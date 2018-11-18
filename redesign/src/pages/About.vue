<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <SimplePage>
          <div>
            <p>I have a handy dandy flowchart concerning what to call me: <a href="https://static.jcharante.com/name.svg">name.svg</a></p>
            <p>Need to shoot me an email? <a href="mailto:contactme@jcharante.com">contactme@jcharante.com</a></p>
            <p>If you're looking for my <a href="https://static.jcharante.com/resume-john-zarate.pdf">resume, here it is</a></p>
            <p>I attended High School in Portland, ME. There isn't much in Maine, but fortunately there was a CS teacher
            that assisted me early on. For the majority of my time in secondary I messed around
            with front end and backend solutions for misc. problems.</p>
            <p>Now I'm in the Greater Boston area working on my studies (CS Major) at Worcester Polytechnic Institute (WPI).</p>
            <p>I use Pop!_OS as my daily driver, but I use Windows 10 for robotics & recreational purposes.</p>
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
