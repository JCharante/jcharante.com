<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>Projects</q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding" style="max-width: 90vw; width: 800px;">
            <div>
                <h5 class="disclaimer">Disclaimer</h5>
                <p>
                    I'm still working on adding projects and their details to this list. You can get a good view
                    over at my GitHub Profile <a href="https://github.com/JCharante">@JCharante</a>
                </p>
            </div>
            <hr>
            <div>
                <h5>This Website</h5>
                <p>
                    Frontend: Vue, Quasar Framework, Stylus
                </p>
                <p>
                    Backend: Hosted on an AWS S3 Bucket, Cloudflare
                </p>
                <p>
                    <a href="https://github.com/JCharante/jcharante.com">View the GitHub Repo</a>
                </p>
            </div>
            <hr>
            <div>
                <h5>National Yee Emergency Hotline</h5>
                <p>
                    The goal is to provide our clients who are yee depraved with the yee's necessary for them to go on
                    by operating an IVR that plays yee-remixes of songs.
                </p>
                <p>
                    Backend Tech: Twilio, Flask, AWS S3, Pavlok API, Cloudflare.
                </p>
                <p>
                    I have written about the creation of the Hotline which lightly covers TwiML
                    <router-link to="/aar/national-yee-emergency-hotline">in this AAR</router-link>.
                </p>
                <p>
                    I written about integrating my Pavlok so that it vibrates whenever someone calls the hotline
                    <router-link to="/aar/integrating-pavlok-with-the-national-yee-emergency-hotline">in this AAR</router-link>.
                </p>
                <p>
                    I've written about taking the yee hotline serverless with Zappa & AWS
                    <router-link to="/aar/taking-the-national-yee-hotline-serverless">in this AAR</router-link>.
                </p>
                <p>
                    <a href="https://github.com/JCharante/ivr">View the GitHub Repo</a>
                </p>
            </div>
            <hr>
            <div>
                <h5>baterio</h5>
                <p>
                    During robotics competitions, we go through a lot of batteries. If the battery fails, then so does
                    your robot. Batteries are a mission critical component, which is why I'm creating a data entry app
                    to register every interaction with the batteries, building a dataset, to do retrospective analysis
                    in order to determine which brand/models are best for us, and to categorize batteries into levels of
                    risk.
                </p>
                <p>
                    It's been a good experience since I haven't experimented with supporting i18n before, and I'm shipping
                    it as a Progressive Web App rather than creating a WebView wrapper with Cordova.
                </p>
                <p>
                    Frontend: Vue, Quasar Framework, GraphQL, i18n support
                </p>
                <p>
                    Backend: Graphene (Python GraphQL Implementation), Docker, Flask, SQLAlchemy, AWS RDS (MySQL), Cloudflare
                </p>
                <p>
                    <a href="https://github.com/frc5687/baterio">View the GitHub Repo</a>
                </p>
            </div>
            <hr>
            <div>
                <h5>achilles</h5>
                <p>
                    Automated data entry for pencil & paper scouting system by making forms digital.
                </p>
                <p>
                    MVP Frontend Tech: Bootstrap, jQuery, Cordova
                </p>
                <p>
                    MVP Backend Tech: Docker (hosted on hyper.sh), Flask, SQLAlchemy, AWS RDS (MySQL), Cloudflare
                </p>
                <p>
                    Rewrite Frontend Tech: Vue, Quasar Framework, GraphQL, Cordova
                </p>
                <p>
                    Rewrite Backend Tech: Docker, Flask, Graphene (Python GraphQL implementation), SQLAlchemy, AWS RDS (MySQL), Cloudflare
                </p>
                <p>
                    <a href="https://github.com/InnocuousAchilles/steamworks-scouting">View the GitHub Repo</a>
                </p>
            </div>
            <hr>
            <div>
                <h5>
                    <a href="https://github.com/JCharante/haulers-channel-reward-calc">
                        <strong>JCharante/haulers-channel-reward-calc</strong>
                    </a>
                </h5>
                <p>
                    An interstellar shipping expense calculator for an online community commissioned by a regional trading
                    mogul and operator of said community.
                </p>
                <p>
                    Frontend: jQuery, Materialize CSS
                </p>
                <p>
                    Backend: Hosted on GitHub Pages
                </p>
                <p>
                    <router-link to="blog/haulers-channel-reward-calc">View the writeup here</router-link>
                </p>
            </div>
        </div>
    </q-layout>
</template>

<style lang="stylus">
    @import '~variables'

    .disclaimer
        color: $info
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
