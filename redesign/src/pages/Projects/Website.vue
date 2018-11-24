<template>
  <q-page>
    <SimplePage>
      <div>
        <p><b>This website</b> (Sun Nov 18 '18)</p>
        <p>
          I figure that one of the first projects I should write about is this website. In Spring of last year, I
          ran into Quasar Framework and gave it a try. One of the many things I used it for was my personal website,
          which ended up being a static Single Page Application hosted on AWS S3 with Cloudfront.
        </p>
        <p>
          Eventually I realized that having a SPA with no SSR was far from ideal for SEO purposes, so I realized that
          eventually I'd need to port it over to SSR. This summer, Quasar Framework (in v0.17) added support for SSR,
          so I went ahead and started working on it. I felt like rewriting the website from scratch instead of porting
          over my old quasar code, and I ended up with a much simpler design.
        </p>
        <p>
          It may have taken a while (started Sep 24, so 55 days) but finally my workflow is at a state where I'm willing to
          merge my experimental ssr branch.
        </p>
        <p>
          So how does it work now? Well, I have my local dev server ($ quasar dev -m ssr), and I write code and see
          the local version of the website update instantly. When I'm satisfied, I run two scripts and the changes are
          live on jcharante.com within seconds. So how does it work?
        </p>
        <p>
          First you have to get now.sh working with your quasar project. The following is my now.json file located in
          my project folder (same folder with package.json).
        </p>
        <p>
          <code>
            {
            "version": 1,
            "alias": [
            "redesign-jcharante.now.sh",
            "jcharante.com"
            ]
            }
          </code>
        </p>
        <p>
          There's really only two things going on here, we set the framework (not CLI!) version of now.sh to v1. I know
          there's v2 out, but I haven't gotten the node-server nor modifying quasar to work with functions as a service
          yet. Then we set our aliases. This is because everytime we deploy a new version of our project, we receive
          a unique url for it (my project folder is called redesign, so it's redesign-xxxxx.now.sh). So we are saving
          the names of our aliases to this config file, so that when we run ($ now alias) we will alias the
          new deployment to those urls, without having to copy-paste anything.
        </p>
        <p>Next up is adding these scrips to our package.json</p>
        <p>
          <code>
            "build:ssr-now": "quasar build -m ssr && cp now.json dist/ssr-mat",
            "deploy:ssr-now": "cd dist/ssr-mat && now --public && now alias",
          </code>
        </p>
        <p>
          So whenever we make our changes to our website, we just need to run ($ npm run build:ssr-now && npm run deploy:ssr-now)
          in our for our site to be updated. What happens is that first ($ quasar build -m ssr) is run, which populates our
          "dist/ssr-mat" folder. Then we copy our "now.json" file into the "dist/ssr-mat" folder. Then when deploying, we
          cd into the "dist/ssr-mat" folder, and run ($ now --public). This deploys our now project, and we use the public
          flag to acknowledge that our source code (located in "dist/ssr-mat) will be publicly visible (as we're on the free
          plan). Then once it's deployed, we run ($ now alias) to get our domain to point towards the new deployment url.
        </p>
        <p>
          At a future date I'll cover now.sh's alias commands in depth, as I imported my domain from Google and Cloudflare.
        </p>
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
