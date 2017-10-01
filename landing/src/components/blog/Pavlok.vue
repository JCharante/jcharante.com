<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <!--
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>
            -->
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>Blog</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <h4>Pavlok</h4>
            <p>
                <small>Sun Oct 1 '17</small>
            </p>
            <p>
                I'm not sure if you've heard of the <a href="https://pavlok.com/">Pavlok</a>,
                but it's basically a bracelet that can shock you on demand. I'm not sure about the Pavlok 1, but the
                Pavlok 2 will have <a href="https://ifttt.com/pavlok">IFTT support</a>, along with a standard API, so if
                your CI build fails, you can get punished for it!
            </p>
            <p>
                It sounds like a lot of fun, so I ordered the
                <a href="https://buy.pavlok.com/products/order-a-pavlok-pre-order-pavlok-2">Pavlok 1 & Pavlok 2</a>,
                since the Pavlok 2 is supposed to ship sometime in October they say that they'll ship you a Pavlok 1
                now. I ordered it two weeks ago, but they never shipped the Pavlok 1, which is why I contacted support
                a week ago. Apparently, soon after I purchased it they got around to putting up a notice that it was
                back-ordered for 1-2 weeks.
            </p>
            <hr>
            <p>
                It appears that I actually got an email from Maneesh Sethi yesterday concerning the delayed shipment.
            </p>
            <p>
                Looks like they ran out of black wristbands and boxes, so they'll be shipping orders with alternate
                colored wristbands. I just hope I don't get Pink.
            </p>
            <p>
                Terrible first impression with the company, but hopefully the alarm clock feature makes up for it.
            </p>
            <p>
                I also wonder if I can hug people in order to shock them with me.
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
