<template>
  <q-page>
    <div class="layout-padding" style="max-width: 90vw; width: 800px;">
      <div class="q-title">Mia tago</div>
      <div class="q-subheading">190206</div>
      <br>
      <p>Bonan matenon! La alia tago mi finita mia Esperanta arbo en Duolingo (por la dua fojo)</p>
      <div class="row">
        <q-btn color="purple" @click="showEsperanto = !showEsperanto" :label="showEsperanto ? 'Kasxi la foto' : 'Elmontri la foto'" />
      </div>
      <img v-if="showEsperanto" src="https://static.jcharante.com/blog/esperanto-tree-190206.png">
      <div class="spacer"></div>
      <p>Do vi povas vidi ke mi ne havas nivelo kvin (5) en la tuta kurso/arbo. Estas sesdek du (62) "kapabloj" aux "kategorioj", kaj mia tuta nivelo estas 113. Do mi estas (113/310)% = 36.45% finita kun la kurso.</p>
      <p>Mi volas fini la kurso cxi-monato, do mi devus gajni cent nauxdek sep (197) niveloj en dudek tri (23) tagoj. Do 8.5 niveloj per tago. </p>
      <hr>
      <p>Nun mi devas kolekti mian pakadon el la cxambro de posxto.</p>
      <hr>
      <div class="row">
        <q-btn color="purple" @click="showEsperanto1 = !showEsperanto1" :label="showEsperanto1 ? 'Kasxi la foto' : 'Elmontri la foto'" />
      </div>
      <img v-if="showEsperanto1" src="https://static.jcharante.com/blog/esperanto-tree-190206-desktop.png">
      <div class="spacer"></div>
      <p>Mi estas finita por hodiaux! (Mi gajnis 9 niveloj hodiaux, do 39.4% finita kun la arbo)</p>
      <p>(nur kun Duolingo.. mi havas multe de hejmtasko kaj laboro ke mi devas fari...)</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: '190206',
  data: function () {
    return {
      showEsperanto: true,
      showEsperanto1: true
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
