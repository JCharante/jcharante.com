<template>
    <q-layout ref="layout" view="lHh LpR lfr" :left-class="{'bg-grey-2': true}" :right-breakpoint="200">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Integrating Pavlok with the National Yee Emergency Hotline
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>

            <q-btn flat @click="$refs.layout.toggleRight()">
                <q-icon name="list"/>
            </q-btn>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding row" style="max-width: 90vw; width: 800px;">
            <div class="col">
                <div>
                    <h4>Integrating Pavlok with the National Yee Emergency Hotline</h4>
                    <p>
                        <small>Thu Oct 12 '17</small>
                    </p>
                </div>
                <p>
                    This is Part 2 of the National Yee Emergency Hotline series.
                    <router-link to="/aar/national-yee-emergency-hotline">Part 1</router-link> &
                    <router-link to="/aar/taking-the-national-yee-hotline-serverless">Part 3</router-link>.
                </p>
                <div class="container" v-scroll-spy="scrollPos">
                    <div>
                        <h3>Introduction</h3>
                        <p>
                            Yesterday, my Pavlok 1 finally arrived. I began to test it out, and decided to start the Everyman
                            sleep cycle. So far I failed by not taking my second nap, but I'll elaborate in another AAR.
                        </p>
                        <p>
                            The Pavlok 1 has a
                            <a href="http://pavlok-mvp.herokuapp.com/docs/index.html">well documented api</a>, which is expected
                            since it's current version (0.0.1) only has 4 endpoints. Currently
                            <a href="https://github.com/Behavioral-Technology-Group/Pavlok_Node_Module/issues/6">
                                there's an issue open</a>
                            requesting access to its sensors, but it hasn't been addressed after two months.
                        </p>
                        <p>
                            The four endpoints are to control the led, vibration, shocking, and beeping. The vibration &
                            shock endpoints require an intensity value, from 1 through 255. The led and beeping intensity values
                            go from 1 through 4.
                        </p>
                    </div>
                    <div>
                        <h3>Authentication</h3>
                        <img class="responsive" src="https://static.jcharante.com/aar/nationa-yee-emergency-hotline-2/pavlok-applications-register.png"/>
                        <p>
                            Pavlok uses OAuth2, and using
                            <a href="http://pavlok-mvp.herokuapp.com/docs/oauth.html">their instructions</a> you can go to
                            the
                            <a href="http://pavlok-mvp.herokuapp.com/oauth/applications">applications page</a>
                            to create a new application. All you need is a name and a redirect URI. You can use
                            <span class="token">urn:ietf:wg:oauth:2.0:oob</span> as the redirect URI for local tests, which
                            will display a simple but functional page that will display your access token.
                        </p>
                        <p>
                            After registering your application, you should be able to GET
                            <span class="token">
                        http://pavlok-mvp.herokuapp.com/oauth/authorize?client_id={id}&redirect_uri={uri}&response_type=code
                    </span>, or click the handy Authenticate button on the applications page
                        </p>
                        <img class="responsive" src="https://static.jcharante.com/aar/nationa-yee-emergency-hotline-2/pavlok-applications-authorize.png">
                        <p class="caption text-center">
                            The Client ID & Secret are lowercase alpha numerical strings with a length of 64.
                            I generated fake identifiers as to not reveal my actual Client ID or Secret.
                        </p>
                        <p>
                            If you used the URI for local tests, that will bring you to a page like this:
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/nationa-yee-emergency-hotline-2/pavlok-uri-local-tests-page.png"
                             style="margin: 50px 0 50px 0;"
                        />
                        <p>
                            From here, we need to make a POST request to
                            <span class="token">https://pavlok-mvp.herokuapp.com/oauth/token</span>
                            with the following body.
                        </p>
                        <pre>
                        <code>
                            {{ code0 }}
                        </code>
                    </pre>
                        <p>
                            Which will return the following:
                        </p>
                        <pre>
                        <code>
                            {{ code1 }}
                        </code>
                    </pre>
                        <p>
                            Now we have our access token
                            <span class="token">v190u2w6ka3zvw6wen6mu1icenkforh589qecomhjtmfcom6a3o1kzz2xssxkv39</span>
                            which means we can start using the endpoints.
                        </p>
                    </div>
                    <div>
                        <h3>Testing out Endpoints</h3>
                        <p>
                            Arduino's "Hello World" program is Blink, so let's work on something similar.
                        </p>
                        <p>
                            The endpoint <span class="token">/api/v1/stimuli/led/:value</span> will blink the LED lights
                            on the pavlok. <span class="token">:value</span> is the intensity. For the LED, this is how
                            many times it will blink. Let's go ahead with a value of 4.
                        </p>
                        <p>
                            Since the base url of the api is <span class="token">https://pavlok-mvp.herokuapp.com</span>
                            we'll make a POST request to
                            <span class="token">https://pavlok-mvp.herokuapp.com/api/v1/stimuli/led/4</span>. We still
                            need to include the access token, in the form of a query string, so we'll actually send
                            the post request to
                            <span class="token">https://pavlok-mvp.herokuapp.com/api/v1/stimuli/led/4?access_token=v190u2w6ka3zvw6wen6mu1icenkforh589qecomhjtmfcom6a3o1kzz2xssxkv39</span>
                        </p>
                        <p>
                            You should now see the LEDs on your pavlok blinking. Now you probably saw this coming so it
                            won't <em>shock</em> you: let's make a POST request to shock ourselves!
                        </p>
                        <p>
                            The endpoint for the shock stimuli is <span class="token">/api/v1/stimuli/shock/:value</span>,
                            so we just need to set the intensity and add our access token as a query string like before.
                            Let's take it easy on ourselves and choose 50 out of 255. Just send a POST request to
                            <span class="token">https://pavlok-mvp.herokuapp.com/api/v1/stimuli/shock/50?access_token=v190u2w6ka3zvw6wen6mu1icenkforh589qecomhjtmfcom6a3o1kzz2xssxkv39</span> and you'll start to realize the possibilities! I only wish Duolingo would be willing
                            to call a webhook so it can shock us when we get a question wrong.
                        </p>
                    </div>
                    <div>
                        <h3>Integration with Hotline</h3>
                        <p>
                            How the hotline works is that there's two numbers. The first number is kept a secret, and
                            when called returns the TwiML from <span class="token">/</span>. The second number returns
                            the TwiML from <span class="token">/forward</span>. The TwiML instructs Twilio to Dial the
                            first number and to start recording. Since <span class="token">/forward</span> is served
                            from a flask server, we just need to send the POST request prior to returning the TwiML.
                        </p>
                        <p>
                            First we need to setup what we want to happen. In this case I want my pavlok to vibrate
                            at the max setting. You may also notice that I'm giving a reason query string.
                            The Pavlok App lets you look at the log, which is the list of reasons why your pavlok has
                            given off stimuli. The reason will show up in your log as that reason, along with the name
                            of the registered application.
                        </p>
                        <pre>
                        <code>
                            {{ code2 }}
                        </code>
                    </pre>
                        <p>
                            Now we need to actually call the function. The Twilio request sent to <span class="token">/</span>
                            includes the number that is initiating the request under the <span class="token">From</span>
                            key. With this knowledge, we can then call the method at the start of the route handler as
                            seen below
                        </p>
                        <pre>
                        <code>
                            {{ code3 }}
                        </code>
                    </pre>
                        <p>
                            And there we have it! Whenever our hotline gets a call, we get a notification via vibration.
                        </p>
                        <p>
                            You can view the repository at <a href="https://github.com/JCharante/ivr">JCharante/ivr</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-auto gt-lg section-selector">
                <q-list link no-border>
                    <q-list-header>Sections</q-list-header>
                    <q-item @click="$scrollTo(0)" :class="{'router-link-active': scrollPos === 0}">
                        <q-item-main>Introduction</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(1)" :class="{'router-link-active': scrollPos === 1}">
                        <q-item-main>Authentication</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(2)" :class="{'router-link-active': scrollPos === 2}">
                        <q-item-main>Testing out Endpoints</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(3)" :class="{'router-link-active': scrollPos === 3}">
                        <q-item-main>Integration with Hotline</q-item-main>
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
    {
        "client_id": "gljfi0vre0pllhqzcfdcbf30yvh354j1fqkd3cvqlmol2y7v8hzk0r54dv630c13",
        "client_secret": "y6h1ip5dxm0ukb0x7j6zy9hlgguetnxw2z6t1zucu1zoby4nxzotvvhr0for184o",
        "code": "w9vfcqdux3syiOpuq96almc8gb3tg8745rvjhuzr2g2t9xepl8xkOhq6fi3bxpsh",
        "grant_type": "authorization_code",
        "redirect_uri": "urn:ietf:wg:oauth:2.0:oob"
    }`,
                code1: `
    {
        "access_token": "v190u2w6ka3zvw6wen6mu1icenkforh589qecomhjtmfcom6a3o1kzz2xssxkv39",
        "token_type": "bearer",
        "expires_in": 2592000,
        "refresh_token": "mr94k0r6me5v11ewcxwipbnc6sqsj7vbmohxk46dd9fpqs2j1rwkd0frw70yns0j",
        "scope": "user",
        "created_at": 1507851097,
        "user": {
            "id": 12345,
            "gender": null,
            "age": null,
            "location": null,
            "developer": false,
            "onboarded": false,
            "picture_url": null
        },
        "device": "pavlok",
        "unique_hash": "3xz0dxt1e0km30c0u4ue0bxp9d2i8yknxn8pqhrbm3slk1jc2j7qla9vgfwjvjuv"
    }`,
                code2: `
    def trigger_pavlok(caller):
        if 'PAVLOK_ACCESS_TOKEN' in os.environ:
            pavlok_access_token = os.environ['PAVLOK_ACCESS_TOKEN']
            stimulant = 'vibration'
            intensity = 255
            payload = {
                'access_token': pavlok_access_token,
                'reason': f'Call from {caller}'
            }
            requests.post(f'http://pavlok-mvp.herokuapp.com/api/v1/stimuli/{stimulant}/{intensity}', params=payload)`,
                code3: `
    @app.route("/forward", methods=['GET', 'POST'])
    def forward():
        trigger_pavlok(request.values.get('From', 'Unknown'))
        resp = VoiceResponse()
        dial = Dial(number=os.environ['PROXIED_NUM'], record="record-from-ringing-dual")
        resp.append(dial)
        return str(resp)`
            }
        }
    }
</script>
