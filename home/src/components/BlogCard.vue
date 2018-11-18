<template>
    <q-card>
        <q-card-media v-if="pictures">
            <router-link :to="link">
                <black-bar-image :picture="pictures[0]"/>
            </router-link>
        </q-card-media>
        <q-card-title>
            <router-link :to="link">
                {{ title }}
            </router-link>
            <span slot="subtitle">{{ published }}</span>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
            <router-link :to="link">
                <q-btn color="primary">Read</q-btn>
            </router-link>
            <a :href="repo" v-if="repo">
                <q-btn no-caps color="secondary" outline>GitHub Repo</q-btn>
            </a>
        </q-card-main>
    </q-card>
</template>

<style>
    .q-card {
        width: 350px;
    }
</style>

<script>
    import {
        QCard,
        QCardTitle,
        QCardSeparator,
        QCardMain,
        QCardMedia,
        QBtn
    } from 'quasar'

    import BlackBarImage from './BlackBarImage'

    export default {
        components: {
            BlackBarImage,
            QCard,
            QCardTitle,
            QCardSeparator,
            QCardMain,
            QCardMedia,
            QBtn
        },
        props: ['pictures', 'title', 'repo', 'link', 'published']
    }
</script>
