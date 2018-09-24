<template>
    <q-layout ref="layout" view="lHh LpR lfr" :left-class="{'bg-grey-2': true}" :right-breakpoint="200">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Chau
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
                    <h4>Chau</h4>
                    <p>
                        <small>Thu Feb 01 '18</small>
                    </p>
                </div>
                <div class="container" v-scroll-spy="scrollPos">
                    <div>
                        <p>
                            When I was a young child, I think while at a friend's house, I was wrapping up a quick
                            conversation on the phone with my
                            parents when I said <L>ES: chau</L>. I forgot who it was, and I'm sure I can conjure up
                            an almost certainly false image of who it was in my head, but instead I'll just say it was
                            a generic adult. They heard me say <L>ES: chau</L> which exclusively means bye
                            (derived from <L>IT: ciao</L>),
                            but they heard <L>IT: ciao</L> because they said "isn't ciao an Italian word? and weren't you
                            speaking Spanish?"
                            I didn't know how to respond. Here was this person (who in hindsight was maybe expressing
                            genuine curiosity but at the time it seemed snarky) claiming that I was wrong to have used
                            that word, except that I had always used this word--and so had everyone else when I was
                            growing up. It was <em>the</em> word to use when
                            ending a conversation or leaving. There was no word like it, well, I guess there was
                            <L>ES: adiós</L> but no one ever said it. You would understand when someone said it but
                            you'd never personally say it. Just like you would never say "you're sister's outfit is
                            very provocative today" if their sister was wearing a meat dress and you were a vegan who knew
                            this was a deliberate act to annoy you. So here was my livelihood, my way of life, being
                            challenged on an unsuspecting Tuesday. And so I just shrugged, and she returned a very
                            specific look. A facial expression that to this very day I remember as the
                            "quit appropriating Italian culture" look.
                        </p>
                    </div>
                </div>
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
    import L from '../L.vue'

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
            Drawer,
            L
        },
        mounted () {
            this.$refs.layout.hideLeft()
        },
        data () {
            return {
                scrollPos: 0,
                code: []
            }
        }
    }
</script>
