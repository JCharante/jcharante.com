<template>
    <q-layout ref="layout" view="lHh LpR lfr" :left-class="{'bg-grey-2': true}" :right-breakpoint="200">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Taking The National Yee Hotline Serverless
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>

            <q-btn flat @click="$refs.layout.toggleRight()">
                <q-icon name="list"/>
            </q-btn>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding row" style="max-width: 100%; width: 850px;">
            <div class="col">
                <div>
                    <h4>Taking The National Yee Hotline Serverless</h4>
                    <p>
                        <small>Published Wed Oct 18 '17 (Refactored Wed Dec 27 '17)</small>
                    </p>
                </div>
                <p>
                    This is Part 3 of the National Yee Emergency Hotline series.
                    <router-link to="/aar/national-yee-emergency-hotline">Part 1</router-link> &
                    <router-link to="/aar/integrating-pavlok-with-the-national-yee-emergency-hotline">Part 2</router-link>.
                </p>
                <div class="container" v-scroll-spy="scrollPos">
                    <div>
                        <h3>Background</h3>
                        <p>
                            Monday night I was checking my email, when I came across a promotional email from AWS.
                            Now I (and you, I'm not special [unless everyone else unsubscribes from them :thinking:])
                            get these all the time and honestly, I don't really care for them. Sometimes, I just skim
                            them and move on, but truthfully, most of the time I just read the subject line and click the
                            checkmark. But in this case, I'm so glad that I actually read it.
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/aws-email.png"/>
                        <p class="caption text-center"><a href="https://www.reddit.com/r/Eve/comments/1ftvub/pl_forum_watermarking_unmasked_and_explained/">I hope there's no tracking watermarks in this</a></p>
                        <p>
                            I was a bit intrigued, because I knew that the current way I was running the IVR worked for
                            now, but if Digital Ocean restarted the VM it would take forever until I found out, and we
                            just can't tolerate such downtimes. I know I can set it up to run the app server on startup,
                            but I just didn't like what I had set up. It relied on hand scaling to respond to demand,
                            I needed to maintain yet another server. I wanted out, and this email showed me that the
                            promised land is very real, and that I just need to work on getting there.
                        </p>
                        <p>
                            I started looking around, and found that there's a serverless "frameworK" for node.js that
                            lets you deploy applications easily, which led to discovering
                            <a href="https://github.com/Miserlou/Zappa">Miserlou/Zappa</a>
                        </p>
                    </div>
                    <div>
                        <h3>Zappa</h3>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/zappa-logo.jpg"
                             style="margin-bottom: 50px; margin-top: 50px;"
                        />
                        <p>
                            When I first saw the above picture, which is showcased in their readme, I thought
                            "That's a stupid picture to use. No one is <em>that</em> excited about a tool that helps you
                            deploy existing flask applications onto the AWS serverless stack. It's just bonkers to compare
                            it to a concert". And oh boy, how wrong was I! The last time I found something this neat was
                            in May with <a href="http://quasar-framework.org/">Quasar Framework</a>.
                        </p>
                        <p>
                            I quickly started their 3 line example, and ran into some problems.
                        </p>
                        <pre>
                            <code>{{ code0 }}</code>
                        </pre>
                        <p>
                            I didn't have the permissions to do certain things, so I created a role and started adding
                            permissions on a trial by trial basis. Eventually I figured out about the Administrator Job
                            Role, and got it to deploy successfully.
                        </p>
                        <pre>
                            <code>{{ code1 }}</code>
                        </pre>
                        <p>
                            I went to the endpoint and, success!
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/zappa-deploy-dev-success.png"
                         />
                        <p>
                            I eventually remembered that I needed to provide it some environment variables. At first
                            I tried storing them in the <span class="token">zappa_settings.json</span> config file, but
                            I didn't like the idea having credentials inside of a git repo even if they were ignored.
                        </p>
                        <pre>
                            <code>{{ code2 }}</code>
                        </pre>
                        <p>
                            I was tired, and wanted a easy way to store my environment variables so I didn't have to
                            modify any application code, which led to providing them via an S3 file as recommended by
                            Zappa (prior to being able to set environment variables in AWS Lambda).
                        </p>
                        <pre>
                            <code>{{ code3 }}</code>
                        </pre>
                        <pre>
                            <code>{{ code4 }}</code>
                        </pre>
                        <p>
                            Eventually, I found the correct way with AWS Lambda's GUI.
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/aws-lambda-environment-variables.png"
                         />
                        <p>
                            So now that I had my flask app working, all I need to do is configure the API Gateway to let
                            me CNAME a subdomain to the api we just created. I've done it for an S3 bucket before, so
                            it should be pretty simple, right?
                        </p>
                    </div>
                    <div>
                        <h3>DNS</h3>
                        <blockquote>
                            <p>Fuck DNS. I want to kill myself</p>
                            <small>@JCharante <cite title="Quasar Framework">11:26 AM - 17 Oct 2017</cite></small>
                        </blockquote>
                        <p>
                            The most time consuming part of this migration was getting DNS to play nice. At first I
                            tried what everyone recommended, which is to create a Custom Domain Name under AWS API
                            Gateway
                        </p>
                        <div class="row justify-center">
                            <img class="responsive"
                                 src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/aws-api-gateway-custom-domain-name-1.png"
                             />
                        </div>
                        <p>
                            Except that at the time, I didn't have a certificate setup in AWS Certificate Manager.
                            I used cloudflare and I was slightly lost, but thanks to
                            <a href="http://www.leanx.eu/tutorials/set-up-amazons-api-gateway-custom-domain-with-cloudflare">this guide</a>
                            I was able to import one into ACM.
                        </p>
                        <p>
                            Afterwards I was finally able to create the Custom Domain Name, and after waiting for an
                            excruciating 30+ minutes, the Custom Domain Name's ACM Certificate finished setting up.
                        </p>
                        <div class="row justify-center">
                            <img class="responsive"
                                 src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/aws-api-gateway-custom-domain-name-2.png"
                            />
                        </div>
                        <p>
                            So I went ahead and CNAME'd <span class="token">ivr.jcharante.com</span> to
                            <span class="token">xxxxxxxxxxxxxx.cloudfront.net</span> and got stuck in a redirect loop
                        <p>
                            And so I whipped out curl, and saw that <span class="token">ivr.jcharante.com</span> was
                            returning a 301 redirect to itself. I found a
                            <a href="https://support.cloudflare.com/hc/en-us/articles/203487280">cloudflare support page</a>
                            about this, and I was using Flexible SSL at the time. It warned about making sure that
                            your origin server wasn't redirecting HTTP to HTTPS, but the API Gateway did exactly that,
                            and there was <a href="https://aws.amazon.com/api-gateway/faqs/">no way to turn it off</a>.
                        </p>
                        <p>
                            And so my very logical self (/s) decided that instead of doing breadth first solution
                            testing, I would focus on finding a way around AWS API Gateway's lack of HTTP support.
                            I ended up creating a CloudFront distribution to forward traffic to the API, except when
                            I CNAME'd that, I would end up being redirected to my api endpoint with a 301 instead of
                            staying at <span class="token">ivr.jcharante.com</span>. I was way out of
                            my comfort zone and so confused.
                        </p>
                        <p>
                            Now I don't mind being out of my comfort zone, I want to be out of it, or else I'll be stuck
                            writing CRUD apps for the rest of my life, which would be very boring and not at all
                            comfortable. But it's the fact that it takes forever for the AWS side of things to react to
                            my changes, and that I'm so close yet I don't know how to do the last 5%.
                        </p>
                        <p>
                            I then gave up on using the CloudFront distribution manually (because the API Gateway uses
                            it under the hood) and went back to using API Gateway's Custom Domain Names. I then enabled
                            <span class="token>">Full</span> SSL on CloudFlare, and saw that it didn't work and broke my
                            static site, so I went back to creating a CloudFront distribution manually but this time
                            with a subdomain wild card certificate, which of course made no difference so I went back to
                            using API Gateway's Custom Domain Names, but using Full (Strict) SSL on
                            CloudFlare, and it finally worked.
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/cloudflare.png"
                        />
                        <p>
                            But since I enabled <span class="token">Full (Strict)</span>, my website & static assets
                            served from an s3 bucket weren't accessible, so I had to create a CloudFront distribution
                            and then CNAME those target domains to get it to work.
                        </p>
                    </div>
                    <div>
                        <h3>Postmortem</h3>
                        <p>
                            Figuring out that I needed to switch CloudFlare's SSL to Full (Strict) took the
                            majority of the time, but at least now I know since I plan to deploy new projects such as
                            ponto & baterio with Zappa. I'm also going to try to do more breadth first testing of
                            solutions rather than focusing my time on one possible solution which would happen with
                            depth first search.
                        </p>
                        <hr>
                        <p>
                            Do you like the new section header? I think it looks a lot better than from when it was
                            in the right side drawer.
                        </p>
                        <p>I've also increased the width of this content column to 850px.</p>
                    </div>
                </div>
            </div>
            <div class="col-auto gt-lg section-selector">
                <q-list link no-border>
                    <q-list-header>Sections</q-list-header>
                    <q-item @click="$scrollTo(0)" :class="{'router-link-active': scrollPos === 0}">
                        <q-item-main>Background</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(1)" :class="{'router-link-active': scrollPos === 1}">
                        <q-item-main>Zappa</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(2)" :class="{'router-link-active': scrollPos === 2}">
                        <q-item-main>DNS</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(3)" :class="{'router-link-active': scrollPos === 3}">
                        <q-item-main>Postmortem</q-item-main>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-layout>
</template>

<style scoped lang="stylus">
    @import '~variables'

    .router-link-active
        color: $primary
        font-weight: bold

    h3
        color: $primary

    pre
        overflow-x: auto
        max-width: 100%
        margin-top: -24px

    img
        margin-top: 2em
        margin-bottom: 2em

    .section-selector
        z-index: 10
        position: fixed
        right: 20px
</style>

<script>
    import {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QListHeader,
        QItem,
        QItemSide,
        QItemMain,
        QSideLink,
        QVideo
    } from 'quasar'

    import Drawer from '../Drawer.vue'

    export default {
        components: {
            QLayout,
            QToolbar,
            QToolbarTitle,
            QBtn,
            QIcon,
            QList,
            QListHeader,
            QItem,
            QItemSide,
            QItemMain,
            QSideLink,
            QVideo,
            Drawer
        },
        mounted () {
            this.$refs.layout.hideLeft()
        },
        data () {
            return {
                scrollPos: 0,
                code0: `
    $ pip install zappa
    $ zappa init
    $ zappa deploy`,
                code1: `
    (.venv) jcharante@Thinky:~/Projects/ivr$ zappa deploy dev
    Calling deploy for stage dev..
    Creating ivr-dev-ZappaLambdaExecutionRole IAM Role..
    Creating zappa-permissions policy on ivr-dev-ZappaLambdaExecutionRole IAM Role.
    Downloading and installing dependencies..
    Packaging project as zip.
    Uploading ivr-dev-1508250385.zip (8.3MiB)..
    100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████| 8.73M/8.73M [00:18<00:00, 505KB/s]
    Scheduling..
    Scheduled ivr-dev-zappa-keep-warm-handler.keep_warm_callback with expression rate(4 minutes)!
    Uploading ivr-dev-template-1508250409.json (1.5KiB)..
    100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████| 1.58K/1.58K [00:00<00:00, 4.26KB/s]
    Waiting for stack ivr-dev to create (this can take a bit)..
    100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 4/4 [00:12<00:00,  4.41s/res]
    Deploying API Gateway..
    Deployment complete!: https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev`,
                code2: `
    zappa_settings.json:

    {
        "dev": {
            "app_function": "yee.app.app",
            "aws_region": "us-east-1",
            "profile_name": "default",
            "project_name": "ivr",
            "runtime": "python3.6",
            "s3_bucket": "zappa-ivr-dev",
            "environment_variables": {
                "PROXIED_NUM": "+1-XXX-XXX-XXXX",
                "PAVLOK_ACCESS_TOKEN": "vv6l2ds1wolj3sd3ysmndr33j0ucph8jddf3viin2ra5fbl1b9fyfop8sm4pnhb0"
            }
        }
    }`,
                code3: `
    zappa_settings.json:

    {
        "dev": {
            "app_function": "yee.app.app",
            "aws_region": "us-east-1",
            "profile_name": "default",
            "project_name": "ivr",
            "runtime": "python3.6",
            "s3_bucket": "zappa-ivr-dev",
            "remote_env": "s3://my-config-bucket/super-secret-config.json"
        }
    }`,
                code4: `
    super-secret-config.json:

    {
        "PROXIED_NUM": "+1-XXX-XXX-XXXX",
        "PAVLOK_ACCESS_TOKEN": "vv6l2ds1wolj3sd3ysmndr33j0ucph8jddf3viin2ra5fbl1b9fyfop8sm4pnhb0"
    }`
            }
        }
    }
</script>
