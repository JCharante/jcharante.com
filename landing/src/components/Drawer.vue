<template>
    <div>
        <q-list no-border link inset-delimiter>
            <q-list-header>Curated List of Links</q-list-header>
            <q-side-link item to="/" exact>
                <q-item>
                    <q-item-side icon="home" />
                    <q-item-main label="Home"/>
                </q-item>
            </q-side-link>
            <q-side-link item to="/projects" exact>
                <q-item>
                    <q-item-side icon="work" />
                    <q-item-main label="Projects" sublabel="A good way to spend time"/>
                </q-item>
            </q-side-link>
            <q-side-link item to="/languages" exact>
                <q-item>
                    <q-item-side icon="language" />
                    <q-item-main label="Languages" sublabel="They're fun to speak"/>
                </q-item>
            </q-side-link>
            <q-side-link item to="/contact" exact>
                <q-item>
                    <q-item-side icon="contacts" />
                    <q-item-main label="Contact Info" sublabel="Talking to me is fun"/>
                </q-item>
            </q-side-link>
        </q-list>
    </div>
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
            QSideLink
        }
    }
</script>
