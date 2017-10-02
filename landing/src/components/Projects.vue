<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>Projects</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <p>
                <a href="https://github.com/JCharante/haulers-channel-reward-calc">
                    <strong>JCharante/haulers-channel-reward-calc</strong>
                </a>
            </p>
            <p>
                An interstellar shipping expense calculator for an online community commissioned by a regional trading
                mogul and operator of said community.
            </p>
            <p>
                <router-link to="blog/haulers-channel-reward-calc">View the writeup here</router-link>
            </p>
            <hr>
            <p>
                I'm still working on adding content, so for now you can just look at
                <a href="https://github.com/JCharante">my Github profile</a>.
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
