<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>
                Blog
                <div slot="subtitle">John Zarate</div>
            </q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <div class="row justify-start">
                <blog-card repo="https://github.com/JCharante/haulers-channel-reward-calc"
                           title="The story of my most successful repo"
                           :pictures="['/statics/haulers-channel-reward-calc-e74940a0290e3165f2b6456e7e9f0aa0db66b1c4-ogb.html.png']"
                           link="blog/haulers-channel-reward-calc"
                           published="Sun Oct 1 '17"
                />
                <blog-card title="Pavlok"
                           :pictures="['https://cdn.shopify.com/s/files/1/0601/9629/products/square_2x-80.jpg?v=1496424343']"
                           link="blog/pavlok"
                           published="Sun Oct 1 '17"
                />
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
        QSideLink
    } from 'quasar'

    import Drawer from './Drawer.vue'
    import BlogCard from './BlogCard.vue'

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
            Drawer,
            BlogCard
        },
        data () {
            return {}
        }
    }
</script>
