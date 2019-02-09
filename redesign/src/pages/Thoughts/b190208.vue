<template>
  <q-page>
    <div class="layout-padding" style="max-width: 90vw; width: 800px;">
      <div class="q-title">Mia tago</div>
      <div class="q-subheading">190208</div>
      <p>Bonan vesperon. Mi havis tri ekzamenoj, do me estis tre okupa la tuta tago.</p>
      <br>
      <p>Hodiaux mi gajni naux niveloj, do mi estas (141/310)% = 45.5% finita kun la kurso.</p>
      <div class="row">
        <q-btn color="purple" @click="showEsperanto = !showEsperanto" :label="showEsperanto ? 'Kasxi la foto' : 'Elmontri la foto'" />
      </div>
      <img v-if="showEsperanto" src="https://static.jcharante.com/blog/esperanto-tree-190208.png">
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
