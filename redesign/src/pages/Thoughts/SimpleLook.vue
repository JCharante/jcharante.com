<template>
  <q-page>
    <SimplePage>
      <div>
        <p><b>Thoughts: Why the simple look?</b> I just find it refreshing. I'm still working on making my site
        more mobile friendly, but regarding the aesthetic (of text with no fancy elements or components) I do fear
        that it will look like it's made by a kid cranking out the .html files by hand.</p>
        <p>Which to be honest it's not too terrible far off. I thought about creating a serverless aura instance on
        AWS, creating a serverless GraphQL API with the DB as the storage, and another site that will act as the CMS,
        and then having the server powering this site pull page content from the API, but my currently method works for me.</p>
        <p>My current method consists of</p>
        <ol>
          <li>Entering my project folder on my laptop or desktop</li>
          <li>Modifying a file or copy pasting a template, and then just adding it to routes.js</li>
          <li>running $ npm run build:ssr-now and $ npm run deploy:ssr-now</li>
          <li>Taking a look at jcharante.com to make sure it updated</li>
          <li>Comitting the changes to git and pushing my branch.</li>
        </ol>
        <p>And it works perfectly fine. I don't forsee myself having to update my website off my phone, for which
        the API based solution work work well for.</p>
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
