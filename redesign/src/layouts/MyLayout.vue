<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          jcharante.com
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item to="/" exact>
          <q-item-side icon="home" />
          <q-item-main label="Home" />
        </q-item>
        <q-item to="/projects" exact>
          <q-item-side icon="work" />
          <q-item-main label="Projects"/>
        </q-item>
        <q-item to="/thoughts">
          <q-item-side icon="chat_bubble" />
          <q-item-main label="Thoughts" />
        </q-item>
        <q-item to="/about">
          <q-item-side icon="face" />
          <q-item-main label="About" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/JCharante/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/JCharante" />
        </q-item>
        <q-item @click.native="openURL('https://news.ycombinator.com/user?id=JCharante')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Hacker News Profile" sublabel="HN/user?id=JCharante" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
