<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>Index</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding" style="max-width: 90vw; width: 800px;">
            <p>Hey, I'm John.</p>
            <p>
                I'm a software developer who favors Vue over React.
            </p>
            <p>
                I main Ubuntu but I dual boot Windows on my Desktop in order to play video games.
            </p>
            <p>
                I learned of Aaron Swartz posthumously (unfortunately), but I still learn from
                <a href="http://www.aaronsw.com/weblog/">his lessons</a>.
            </p>
            <p>
                I love romance languages, and am currently learning Esperanto & Italian.
            </p>
            <p>
                I try to be Vegan, but fall back to vegetarianism pretty often.
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
        name: 'index',
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
