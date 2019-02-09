<template>
  <q-page>
    <div class="layout-padding" style="max-width: 90vw; width: 800px;">
      <div class="q-title">Mia tago</div>
      <div class="q-subheading">190207</div>
      <p></p>
      <br>
      <p>Bonan vesperon! Hodiaux mi estis tre okupa. Fakte.. mi nun estas okupa! Mi devus legi por la ekzameno ke mi havas morgaux en mia klaso de komputero scienco..</p>
      <hr>
      <p>Hodiaux mi gajni dek niveloj, do mi estas (132/310)% = 42.5% finita kun la kurso!</p>
      <div class="row">
        <q-btn color="purple" @click="showEsperanto = !showEsperanto" :label="showEsperanto ? 'Kasxi la foto' : 'Elmontri la foto'" />
      </div>
      <img v-if="showEsperanto" src="https://static.jcharante.com/blog/esperanto-tree-190207.png">
      <div class="spacer"></div>
      <p>Mi dormos frua cxi tiun nokton (</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: '190206',
  data: function () {
    return {
      showEsperanto: true
    }
  }
}
</script>

<style scoped>
  img {
    width: 500px;
    max-width: 100%;
  }
  .spacer {
    height: 50px;
  }
  p {
    line-height: 1.4285714285714286em
  }
</style>
