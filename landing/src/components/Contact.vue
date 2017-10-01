<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>Contact</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <p class="strong">Email</p>
            <p>You can always email me at contactme@jcharante.com</p>

            <p class="strong">GitHub</p>
            <p>I'm <a href="https://github.com/JCharante">JCharante</a> on Github.</p>
            <gh-btns-follow user="JCharante" show-count></gh-btns-follow> <p style="visibility: hidden">a</p>

            <p class="strong">WeChat</p>
            <p>Feel free to add me on WeChat (@JCharante).</p>

            <p class="strong">Mail</p>
            <p>If you want to send me some foreign vegan candy, you can do so to </p>
            <blockquote>
                <p>John Zarate</p>
                <p>533 Congress Street</p>
                <p>Portland, ME 04101</p>
            </blockquote>
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
