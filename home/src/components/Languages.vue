<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>Languages</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding" style="max-width: 90vw; width: 800px;">
            <p class="strong">English</p>
            <p>My everyday language, although it's actually my second language.</p>
            <p class="strong">Spanish</p>
            <p>My mother tongue. Not as strong as my English, but I still speak it on a daily basis.</p>
            <p>
                I started out speaking
                <a href="https://en.wikipedia.org/wiki/Peruvian_Ribere%C3%B1o_Spanish">Peruvian Ribereño Spanish</a>,
                but I've been practicing with Castilian Spanish
            </p>
            <p class="strong"><a href="https://en.wikipedia.org/wiki/Esperanto">Esperanto</a></p>
            <p>My favorite <a href="https://en.wikipedia.org/wiki/Constructed_language">conlang</a>.</p>
            <p>
                I practice speaking & writing Esperanto on a daily basis, and when I have time you may find me on
                <a href="http://webchat.freenode.net/?channels=##esperanto">freenode's ##esperanto</a> engaging in small
                talk.
            </p>
            <p>
                My laptop has Esperanto as the system language, and it does help keep me immersed, especially
                when working on projects written entirely in Esperanto.
            </p> <!-- TODO: Link to baterio project page -->
            <p class="strong">Italian</p>
            <p>
                I started learning
                <a href="http://www.loc.gov/standards/iso639-2/php/langcodes_name.php?iso_639_1=it"><em>it</em></a>
                on a whim over the summer of 2017.
            </p>
            <p>
                I'm currently learning it from Spanish, as they're both
                <a href="https://simple.wikipedia.org/wiki/Romance_languages">Romance languages</a>, but Esperanto has
                really helped with words such as <span class="token">[Io] mangiano</span>
                (<span class="token">[I] eat</span> in English) which would be <span class="token">[Yo] como</span> in
                Spanish, but <span class="token">[Mi] manĝas</span> in Esperanto. (I must admit that
                <span class="token">[Je] mange</span> from French helps a bit.)
            </p>
            <p class="strong">French</p>
            <p>
                My immediate family speaks French, but I just never learned it as a child. I've been doing some writing
                practice, and it certainly has paid off for making connections to new words when learning Esperanto &
                Italian, but for now it's not a priority.
            </p>
            <hr>
            <p class="strong">Duolingo</p>
            <p>
                I use Duolingo to start out on new languages. On there, I go by
                <a href="https://www.duolingo.com/sjbgiubb">sjbgiubb</a>. Unfortunately it looks like Duolingo isn't
                reporting my language levels for languages I'm not learning from English.
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

    import Drawer from './Drawer.vue'

    export default {
        name: 'languages',
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
