<template>
  <q-page>
    <SimplePage>
      <div>
        <p>Hey,</p>
        <p>Here I just have write ups about what I think at the time of writing. Of course people will disagree on some things,
          and I'm always open to having my mind changed. So feel free to email me with comments.</p>
        <p>(note: list elements without hyperlinks are still incomplete and may be a future topic I'm interested in writing about)</p>
        <ul>
          <li><router-link to="thoughts/190110">190110</router-link> (Jan '19)</li>
          <li><router-link to="thoughts/190108">190108</router-link> (Jan '19)</li>
          <li><a href="thoughts/hello-talk-kvin">Hello Talk: Fifth Update</a> (Nov '18)</li>
          <li><a href="thoughts/hello-talk-kvar">Hello Talk: Fourth Update</a> (Nov '18)</li>
          <li><a href="thoughts/hello-talk-tri">Hello Talk: Third Update</a> (Nov '18)</li>
          <li><a href="thoughts/hello-talk-du">Hello Talk: Second Update</a> (Nov '18)</li>
          <li><a href="thoughts/hello-talk">Hello Talk: First Impressions</a> (Nov '18)</li>
          <li><a href="thoughts/breakup">How to break up</a> (Nov '18)</li>
          <li><a href="thoughts/texas-too-hot">Texas is too hot</a> (Nov '18)</li>
          <li><a href="thoughts/drops-500">Drops: 500 Words Later</a> (Nov '18)</li>
          <!--<li><a href="thoughts/veganism">Thoughts on "Veganism", PETA, and the IVA</a> (Fri Nov 23 '18)</li>-->
          <li><a href="thoughts/south-street-diner">Food at the South Street Diner</a> (Nov '18)</li>
          <li><a href="thoughts/drops-la-seta">Drops: La Seta</a> (Nov '18)</li>
          <li><a href="thoughts/simple-look">Why the simple look?</a> (Nov '18)</li>
          <li>Kio estas FRC?</li>
          <li>Robot Atheists</li>
          <li>The overuse of the word "terrorist"</li>
          <li>GitHub Pro badge</li>
        </ul>
      </div>
    </SimplePage>
  </q-page>
</template>

<script>
import SimplePage from '../../components/SimplePage.vue'
export default {
  components: {
    SimplePage
  }
}
</script>
