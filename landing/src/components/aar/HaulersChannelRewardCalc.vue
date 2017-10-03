<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                The Story of My Most Successful Repo
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <h4>The Story of My Most Successful Repo</h4>
            <p>
                <small>Sun Oct 1 '17</small>
            </p>
            <p>
                I guess I should talk about
                <a href="https://github.com/JCharante/haulers-channel-reward-calc">
                    JCharante/haulers-channel-reward-calc
                </a>, what I consider to be my most successful repository on Github, because it's been forked and improved
                on by complete strangers.
            </p>
            <div class="row justify-center">
                <p style="visibility: hidden;">.</p>
                <gh-btns-fork slug="JCharante/haulers-channel-reward-calc" show-count></gh-btns-fork>
                <p style="visibility: hidden;">.</p>
            </div>
            <div class="row justify-center">
                <p class="caption">I know it's not a lot, but it's all I have!</p>
            </div>
            <p>
                It first started out in <a href="https://en.wikipedia.org/wiki/Eve_Online">Eve Online</a>. I don't want
                to get too deep into it, but there's a community in the game called Hauler's Channel, created by
                Rita Jita, a regional trading mogul. In the game, there are couriers who move people's cargo for a fee.
            </p>
            <p>
                When starting out with regional trading, it may be worth it to move your own items, but when you're
                moving dozens of billions of Interstellar Kredits everyday, you have to change your strategy to
                one that can scale, where how many items you can transport isn't a bottleneck.
            </p>
            <p>
                Now there are companies such as <a href="http://red-frog.org">Red Frog Freight</a> or
                <a href="https://www.pushx.net/">PushX</a> who can move cargo, but you have to pay a premium for the
                reputation and reliability due to the organizational overhead. This is why some people may opt to choose
                Hauler's Channel.
            </p>
            <p>
                Those companies that I mentioned all have price calculator, but at the time Hauler's Channel was lacking
                one. All it had was a suggested equation in the channel MOTD.
            </p>
            <p>
                One day, I saw that he [Rita] was playing around with a google sheet that people could then make a copy
                of in order to get a price estimate. I immediately got to work creating an MVP. It wasn't the
                <a
                    href="https://rawgit.com/JCharante/haulers-channel-reward-calc/3f99d2ffbb0e5b15334df98d492b7b9675bd99e9/index.html"
                >
                    prettiest
                </a>
                looking. Actually I just checked, it's terrible!
            </p>
            <img
                class="responsive"
                src="/statics/haulers-channel-reward-calc-3f99d2ffbb0e5b15334df98d492b7b9675bd99e9-index.html.png"
            />
            <p class="caption text-center">
                <strong>UI:</strong>
                At the time, I was using <a href="http://materializecss.com/">materialize css</a>, but nowadays I like
                to use <a href="http://quasar-framework.org/">Quasar Framework</a>.
            </p>
            <p>
                Rita Jita saw the potential this had, and commissioned an improved version.
            </p>
            <p>
                Over the next week, I had made it look nice and pretty, but then disaster struck. At the time, Eve
                Online had an In Game Browser, which had no support for HTML5, making my hard work look terrible when
                used as intended. Thankfully, it wasn't much work to get it to be compatible, although I had to make a
                work around by
                <a
                    href="https://github.com/JCharante/haulers-channel-reward-calc/commit/83733b9ffe0de8c86267757d518b3c7b450d3789"
                >
                    redirecting the user to the correct page based on the user agent.
                </a>
            </p>
            <img
                class="responsive"
                src="/statics/haulers-channel-reward-calc-e74940a0290e3165f2b6456e7e9f0aa0db66b1c4-ogb.html.png"
            />
            <p class="caption text-center">
                <a
                    href="https://rawgit.com/JCharante/haulers-channel-reward-calc/e74940a0290e3165f2b6456e7e9f0aa0db66b1c4/ogb.html"
                >
                    The end result was more visually pleasing
                </a>, but if I were to recreate it today with what I know, I like to think it'd look a lot better.
            </p>
            <p>
                After the project was done, I forgot about it for a while, and then someone forked it! I couldn't
                believe that someone thought it'd be easier to modify my code (and
                <a href="https://github.com/JCharante/haulers-channel-reward-calc/pull/2">modify</a> it
                <a href="https://github.com/JCharante/haulers-channel-reward-calc/pull/1">they did</a>
                ) than to start from scratch.
                I created <a href="https://github.com/JCharante/haulers-channel-reward-calc/issues/3">an issue</a>
                for removing In Game Browser support, because the game had recently removed their outdated IGB.
                I had intended to do it myself, but the madman himself (
                <a href="https://github.com/cyramica">cyramica</a>)
                <a href="https://github.com/JCharante/haulers-channel-reward-calc/pull/4">beat me to it!</a>
            </p>
            <p>
                And even though it was just one person, I felt like I was a kid again, playing
                <a href="https://en.wikipedia.org/wiki/Empire_Earth_II">Empire Earth II</a>, ordering my
                troops around. I was at the top of the world; It felt great. I think that may have been the defining
                moment, for when I was truly hooked into FOSS.
            </p>
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
        QSideLink
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
            Drawer
        },
        data () {
            return {}
        }
    }
</script>
