<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>
                After Action Reports
                <div slot="subtitle">John Zarate</div>
            </q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding row justify-center">
            <div style="width: 500px; max-width: 90vw;">
                <q-list highlight>
                    <q-list-header>Recent Posts</q-list-header>
                    <blog-item title="Installing YOLO on Ubuntu 17.10"
                               published="Wed Dec 27 '17"
                               link="/aar/yolo"
                    />
                    <blog-item title="Taking The National Yee Hotline Serverless"
                               published="Wed Oct 18 '17"
                               link="/aar/taking-the-national-yee-hotline-serverless"
                    />
                    <blog-item title="Integrating Pavlok with the National Yee Emergency Hotline"
                               published="Thu Oct 12 '17"
                               link="/aar/integrating-pavlok-with-the-national-yee-emergency-hotline"
                    />
                    <blog-item title="National Yee Emergency Hotline"
                               link="aar/national-yee-emergency-hotline"
                               published="Wed Oct 4 '17"
                    />
                    <blog-item title="Quitting Reddit"
                               link="aar/quitting-reddit"
                               published="Tue Oct 3 '17"
                    />
                    <blog-item title="The Story of My Most Successful Repo"
                               link="aar/haulers-channel-reward-calc"
                               published="Sun Oct 1 '17"
                    />
                    <blog-item title="Pavlok"
                               link="aar/pavlok"
                               published="Sun Oct 1 '17"
                    />
                </q-list>
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
        QItemTile,
        QItemSide,
        QItemMain,
        QSideLink
    } from 'quasar'

    import Drawer from './Drawer.vue'
    import BlogCard from './BlogCard.vue'
    import BlogItem from './BlogItem'

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
            QItemTile,
            QItemSide,
            QItemMain,
            QSideLink,
            Drawer,
            BlogCard,
            BlogItem
        },
        data () {
            return {}
        }
    }
</script>
