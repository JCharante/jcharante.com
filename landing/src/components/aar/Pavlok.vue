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

            <q-toolbar-title>
                Pavlok
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>
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
                <a href="https://buy.pavlok.com/products/order-a-pavlok-pre-order-pavlok-2">Pavlok 1 & Pavlok 2</a>.
                Since the Pavlok 2 is supposed to ship sometime in October, they say that they'll ship you a Pavlok 1
                now. I ordered it two weeks ago, but they never shipped the Pavlok 1, which is why I contacted support
                a week ago. As it turns out, soon after my purchase they put up a notice stating it was back-ordered for
                1-2 weeks. They offered a refund, but I really wanted the Pavlok, as negative reinforcement works really
                well for me.
            </p>
            <p>
                Yesterday, on Sat Sep 30, I got an email from Maneesh Sethi (Pavlok's CEO) titled
                <span class="token">An Apology from the Pavlok CEO</span> concerning the delayed shipment. It looks like
                they ran out of black wristbands and boxes, so they'll be shipping orders with alternate colored
                wristbands.
            </p>
            <div class="row justify-center">
                <img src="https://cdn.shopify.com/s/files/1/0601/9629/products/production-unit-order-a-pavlok-wristband-4.jpg?v=1489695489"
                     class="responsive" style="max-width: 30vw; max-height: 30vh;"/>
            </div>
            <p class="caption text-center">
                I just hope I don't get a pink wristband.
            </p>
            <p>
                A pretty bad first impression with the company, but hopefully the alarm clock feature makes up for it.
            </p>
            <p>
                I also wonder: Can I poke people in order to shock them?
            </p>
            <p>
                UPDATE Wed Dec 27 '17: That's not how electricity works.
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
