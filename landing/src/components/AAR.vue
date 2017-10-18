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

        <div class="layout-padding">
            <div class="row justify-start">
                <blog-card repo="https://github.com/JCharante/ivr"
                           title="Taking The National Yee Hotline Serverless"
                           :pictures="['https://static.jcharante.com/aar/taking-the-national-yee-emergency-hotline-serverless/zappa-logo.jpg']"
                           link="/aar/taking-the-national-yee-hotline-serverless"
                           published="Wed Oct 18 '17"
                />
                <blog-card repo="https://github.com/JCharante/ivr"
                           title="Integrating Pavlok with the National Yee Emergency Hotline"
                           :pictures="['https://static.jcharante.com/aar/nationa-yee-emergency-hotline-2/pavlok-1-black-wristband.jpg']"
                           link="/aar/integrating-pavlok-with-the-national-yee-emergency-hotline"
                           published="Thu Oct 12 '17"
                />
                <blog-card repo="https://github.com/JCharante/ivr"
                           title="National Yee Emergency Hotline"
                           :pictures="['https://static.jcharante.com/aar/national-yee-emergency-hotline/yee-animated.gif']"
                           link="aar/national-yee-emergency-hotline"
                           published="Wed Oct 4 '17"
                />
                <blog-card repo="https://github.com/JCharante/quit-reddit"
                           title="Quitting Reddit"
                           :pictures="['https://static.jcharante.com/aar/quitting-reddit/reddit-logo.png']"
                           link="aar/quitting-reddit"
                           published="Tue Oct 3 '17"
                />
                <blog-card repo="https://github.com/JCharante/haulers-channel-reward-calc"
                           title="The Story of My Most Successful Repo"
                           :pictures="['/statics/haulers-channel-reward-calc-e74940a0290e3165f2b6456e7e9f0aa0db66b1c4-ogb.html.png']"
                           link="aar/haulers-channel-reward-calc"
                           published="Sun Oct 1 '17"
                />
                <blog-card title="Pavlok"
                           :pictures="['https://cdn.shopify.com/s/files/1/0601/9629/products/square_2x-80.jpg?v=1496424343']"
                           link="aar/pavlok"
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
