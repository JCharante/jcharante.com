<template>
    <q-layout ref="layout" view="lHh LpR lfr" :left-class="{'bg-grey-2': true}" :right-breakpoint="200">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Saluton
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
                    <h4>Saluton</h4>
                    <p>
                        <small>Tue Jan 30 '18</small>
                    </p>
                </div>
                <div class="container" v-scroll-spy="scrollPos">
                    <div>
                        <p>
                            Why is the more common translation of <L>EO: Saluton</L> <L>EN: Hello</L> rather than
                            <L>EN: Salutations</L>? Even in Spanish
                            <a href="https://www.duolingo.com/dictionary/esperanto/saluton/51bc8928173da4d7353a9edc57a7418d">
                                Duolingo regards it as
                            </a><L>ES: Hola</L> which is a direct translation
                            of <L>EN: Hello</L>, although on a second thought I don't know what it would be were it not
                            <L>ES: Hola</L>.
                        </p>
                        <p>
                            I hear <L>EO: Saluton</L> comes from <L>FR: Salut</L>, and according to the latest edit
                            on wiktionary it in turn comes from <L>LA: Salūs</L>, which as a noun it can be a
                            greeting/salutation. So I wouldn't be wrong to translate <L>EO: Saluton</L> as
                            <L>EN: Salutations</L>, but then why isn't it a more popular translation?
                        </p>
                        <p>
                            I think it's helpful to learn a language from one that is already close to it. Therefore
                            recognizing similarities for English speakers to use when learning Esperanto can only help.
                            For example, I'm learning Italian from Spanish, because they have more similarities than
                            Italian and English. Some would say that it's not the best idea
                            because some words don't share a common meaning which could mess someone up, but I've only
                            run into that once when I was learning Esperanto. <L>EO: Ni</L> is a first-person plural
                            (we, us), however in Chinese, <L>你</L>, which in pinyin looks like <L>Nǐ</L>, refers to the
                            person being spoken or written to.
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
