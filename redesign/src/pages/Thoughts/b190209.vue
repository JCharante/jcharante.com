<template>
  <q-page>
    <div class="layout-padding" style="max-width: 90vw; width: 800px;">
      <div class="q-title">Mia tago</div>
      <div class="q-subheading">190209</div>
      <p>Hodiaŭ mi devus legi dokumenton por la ekfirmao de mia amiko.</p>
      <p>Ankaux, mi rekontigxos kun mia kunkompustisto el mia klaso. Kaj mi laboros pri projekto por mia laboratorio, do hodaiŭ mi estas tre okupa!</p>
      <hr>
      <p>Do.. hodiaux ne estis tre bona.. Mi laboris, sed ne kiom mi volis.</p>
      <p>En bonnovajxo, nun mi estas (150/310)% aux 48.4% finita kun la kurso!</p>
      <div class="row">
        <q-btn color="purple" @click="showEsperanto = !showEsperanto" :label="showEsperanto ? 'Kasxi la foto' : 'Elmontri la foto'" />
      </div>
      <img v-if="showEsperanto" src="https://static.jcharante.com/blog/esperanto-tree-190209.png">
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
