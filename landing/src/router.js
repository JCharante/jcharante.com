import Vue from 'vue'
import VueRouter from 'vue-router'

import { AddressbarColor } from 'quasar'
AddressbarColor.set('#900C3F')

Vue.use(VueRouter)

function load (component) {
    // '@' is aliased to src/components
    return () => import(`@/${component}.vue`)
}

export default new VueRouter({
    /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

    routes: [
        { path: '/', component: load('Index') },
        { path: '/contact', component: load('Contact') },
        { path: '/projects', component: load('Projects') },
        { path: '/languages', component: load('Languages') },
        { path: '/aar', component: load('AAR') },
        { path: '/aar/pavlok', component: load('aar/Pavlok') },
        { path: '/aar/haulers-channel-reward-calc', component: load('aar/HaulersChannelRewardCalc') },
        { path: '/aar/quitting-reddit', component: load('aar/QuittingReddit') },
        { path: '/aar/national-yee-emergency-hotline', component: load('aar/NationalYeeEmergencyHotline') },
        // Always leave this last one
        { path: '*', component: load('Error404') } // Not found
    ]
})
