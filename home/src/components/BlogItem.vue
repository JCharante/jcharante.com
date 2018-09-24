<template>
    <q-item :to="link">
        <q-item-main>
            <q-item-tile label>{{ title }}</q-item-tile>
        </q-item-main>
        <q-item-side right>
            <q-item-tile stamp>{{ published }}</q-item-tile>
        </q-item-side>
    </q-item>
    <!--
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
    -->
</template>

<script>
    import {
        QItem,
        QItemMain,
        QItemTile,
        QItemSide
    } from 'quasar'

    export default {
        components: {
            QItem,
            QItemMain,
            QItemTile,
            QItemSide
        },
        props: ['pictures', 'title', 'repo', 'link', 'published']
    }
</script>
