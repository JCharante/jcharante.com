<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                National Yee Emergency Hotline
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <div class="row justify-start" style="max-width: 40em;">
                <div>
                    <h4 style="width: 100%">National Yee Emergency Hotline</h4>
                    <p>
                        <small>Wed Oct 4 '17</small>
                    </p>
                </div>
                <p>
                    This is Part 1 of the National Yee Emergency Hotline series.
                    <router-link to="/aar/integrating-pavlok-with-the-national-yee-emergency-hotline">Part 2</router-link> &
                    <router-link to="/aar/taking-the-national-yee-hotline-serverless">Part 3</router-link>.
                </p>
                <p>
                    Last night, I finally had time to work on a side project
                    <router-link to="/aar/quitting-reddit">
                        since I wasn't wasting time on reddit anymore.
                    </router-link>
                    I had heard that Twilio was incredibly easy to start using, and decided to give it a try.
                </p>
                <p>
                    I've always wanted to have my own call queue, and if someone called when I was probably sleeping,
                    it would give the caller an option to wake me up by activating
                    <router-link to="/aar/pavlok">my Pavlok</router-link>. Unfortunately, my Pavlok hasn't arrived yet
                    (or even shipped! but they say that they'll ship it "soon.")
                </p>
                <p>
                    I needed to come up with something to learn the Twilio API with, and I'm so happy with what I came up
                    with. I'm not sure if you've heard of <a href="http://knowyourmeme.com/memes/yee">Yee</a>, but even if
                    you have you'll still want to watch this video.
                </p>
                <div class="row justify-center" style="width: 100%; margin-bottom: 50px;">
                    <q-video
                        src="https://www.youtube.com/embed/q6EoRBvdVPQ?rel=0"
                        style="max-width: 70vw; width: 500px; height: 300px"
                    />
                </div>
                <p>
                    All I wanted was to have it answer the phone, give the user options for what to dial, and then play
                    a music file corresponding to their choice. The idea is fairly simple, and the execution was even
                    simpler than I thought! The simplicity of the Twilio API is just something you won't understand
                    until you try it yourself. Now of course I know it gets exponentially harder when dealing with
                    something more serious than a meme, but I severely overestimated how long it would take for an MVP.
                </p>
                <p>
                    Twilio uses what they call <a href="https://www.twilio.com/docs/api/twiml">TwiML</a>. It's XML with
                    their well documented tags. Whenever there's an incoming call, you can set it up to GET a URL.
                    In my case, I wanted it to fetch <span class="token">/</span>. This would be the part that
                    displays the options for the caller to choose from.
                </p>
                <p>
                    This is what it looks like in TwiML
                </p>
                <pre>
                    <code class="language-xml">{{ code0 }}</code>
                </pre>
                <p>
                    This is how it looks like on my Flask server using their python library.
                </p>
                <pre>
                    <code class="language-python">{{ code1 }}</code>
                </pre>
                <p>
                    Now you may wonder what's up with the <span class="token">/handle-key</span> action. When someone
                    presses a button, it will make a request to that URL. So our request goes from
                    <span class="token">/</span> to <span class="token">/handle-key</span>. Now this is where having
                    a server comes in handy. We need to determine that key was pressed, and return the corresponding
                    XML document by comparing the value of Digits.
                </p>
                <pre>
                    <code class="language-python">{{ code2 }}</code>
                </pre>
                <p>
                    So if Digits is equal to <span class="token">"1"</span>, because the user dialed 1, then this XML
                    would be returned:
                </p>
                <pre>
                    <code class="language-xml">{{ code3 }}</code>
                </pre>
                <h3 class="text-primary">Results</h3>
                <div class="row justify-center" style="width: 100%; margin-top: 50px; margin-bottom: 30px;">
                    <audio controls style="width: 80%;">
                        <source src="https://static.jcharante.com/aar/national-yee-emergency-hotline/call-compilation.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <p class="caption">
                        Twilio can split the caller's voice into the left channel, and yours onto the right.
                    </p>
                </div>
                <p>
                    So that's most of it, it was a good use of a night, and I definitely can't wait to integrate Twilio
                    with my Pavlok. You can explore the repo at
                    <a href="https://github.com/JCharante/ivr">JCharnate/ivr</a>.
                </p>
            </div>
        </div>
    </q-layout>
</template>

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
        data () {
            return {
                code0: `
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say>Thank you for calling the National</Say>
        <Play>https://static.jcharante.com/yee/yee.mp3</Play>
        <Say>Emergency Hotline.</Say>
        <Say>This call may be recorded for quality assurance purposes</Say>
        <Gather action="/handle-key" method="POST" numdigits="1">
            <Say>To listen to a Standard Yee, Press 0.
                 To listen to A-ha - Take on Yee, Press 1.
                 Press any other key to start over.
            </Say>
        </Gather>
    </Response>`,
                code1: `
    @app.route("/", methods=['GET', 'POST'])
    def hello_monkey():
        resp = VoiceResponse()
        resp.say("Thank you for calling the National")
        resp.play("https://static.jcharante.com/yee/yee.mp3")
        resp.say("Emergency Hotline.")
        resp.say("This call may be recorded for quality assurance purposes")

        g = Gather(num_digits=1, action="/handle-key", method="POST")
        g.say("""To listen to a Standard Yee, Press 0.
                 To listen to A-ha - Take on Yee, Press 1.
                 Press any other key to start over.""")
        resp.append(g)

        return str(resp)
                `,
                code2: `
    @app.route("/handle-key", methods=['GET', 'POST'])
    def handle_key():
        """Handle key press from a user."""

        # Get the digit pressed by the user
        digit_pressed = request.values.get('Digits', None)
        if digit_pressed == "0":
            resp = VoiceResponse()
            resp.play("https://static.jcharante.com/yee/standard-yee.mp3")
            return str(resp)
        elif digit_pressed == "1":
            resp = VoiceResponse()
            resp.play("https://static.jcharante.com/yee/take-on-yee-full-version.mp3")
            return str(resp)
        else:
            return redirect("/")
                `,
                code3: `
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Play>https://static.jcharante.com/yee/take-on-yee-full-version.mp3</Play>
    </Response>`
            }
        }
    }
</script>
