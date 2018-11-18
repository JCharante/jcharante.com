<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Quitting Reddit
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding">
            <h4>Quitting Reddit</h4>
            <p>
                <small>Tue Oct 3 '17</small>
            </p>
            <p>
                This evening, after getting into an argument* about load balancing I decided to just quit reddit for
                the most part. I had been meaning to for a while (since it's unproductive), so I was glad that this
                opportunity had presented itself. Besides, <a href="https://news.ycombinator.com/">HN</a> is better.
            </p>
            <p>
                *I say argument instead of debate, because of their use of ad hominem attacks.
            </p>
            <p>
                Two years ago I worked on a Reddit comment analyzer, and so I quickly pulled it up to see what I had
                used. The only thing that seemed salvageable was my use of
                <a href="https://github.com/praw-dev/praw">PRAW</a>, "an acronym for "Python Reddit API Wrapper.""
            </p>
            <p>
                I knew of existing open source scripts for overwriting comments, but I didn't want those annoying
                placeholders that they come with.
            </p>
            <blockquote>
                This comment has been overwritten by an open source script to protect this user's privacy.
                <br>
                <br>
                If you would like to do the same, add the browser extension TamperMonkey for Chrome (or GreaseMonkey for Firefox) and add this open source script.
                <br>
                <br>
                Then simply click on your username on Reddit, go to the comments tab, and hit the new OVERWRITE button at the top.
                <small>
                    <cite>
                        <a href="https://www.reddit.com/r/AskReddit/comments/3crh4c/what_is_something_rich_people_buy_that_poor/csywhyf/">
                            ornothumper
                        </a>
                    </cite>
                </small>
            </blockquote>
            <p>
                I wanted to use something obscure enough where it's possible that I was writing giberish at the time,
                but still pretty obvious when you think about it. And so, I decided to use the lyrics to
                <a href="https://www.youtube.com/watch?v=4dNRtJ9ZEGY">Tiel la Mondo Iras</a> that I obtained from this
                <a href="https://www.reddit.com/r/Esperanto/comments/6bcb9z/juliano_hern%C3%A1ndez_angulo_tiel_la_mondo_iras/dhlfgj7/">
                    reddit comment
                </a>.
            </p>
            <blockquote class="text-right">
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mondo.
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mond'.
                <br>
                <br>
                Lundo, merkredo, sabato, mardo, ĵaŭdo kaj dimanĉo
                <br>
                jen milito, jen la paco, jen infano kun malsato.
                <br>
                La misiloj preskaŭ falas, la kolomboj malkonsentas,
                <br>
                estas tiel, estas tiel.
                <br>
                <br>
                Jen virino kiu ne sidas, ĉar laboro ĉiam estas,
                <br>
                kaj la patro kiu ne alvenas, ĉar la poŝo estas malplena.
                <br>
                Tiom da manoj kiuj konstruas, kaj la aliaj kiuj detruas,
                <br>
                estas tiel, estas tiel.
                <br>
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mondo.
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mond'.
                <br>
                <br>
                Dekses horoj kiuj sonoras kaj ok horoj kiuj silentas
                <br>
                Multaj homoj kiuj rapidas, jam la alia tago venas.
                <br>
                Ni profitu la momenton, ĉar la vivo ne atendas,
                <br>
                estas tiel, estas tiel
                <br>
                <br>
                Lundo, merkredo, sabato, mardo, jaŭdo kaj dimanĉo
                <br>
                jen milito, jen la paco, jen infano kun malsato.
                <br>
                La misiloj preskaŭ falas, la kolomboj malkonsentas,
                <br>
                estas tiel, estas tiel.
                <br>
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mondo.
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mond'.
                <br>
                <br>
                Iras por mi, iras por vi,
                <br>
                iras por ŝi, iras por li, tiel la mondo
                <br>
                Iras por mi, iras por vi,
                <br>
                iras por ŝi, iras por li, tiel la mondo
                <br>
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mondo.
                <br>
                Tiel la mondo iras, tiel la mondo iras.
                <br>
                Tiel la mondo iras, tiel la mond-ooo iiirrrr-aaass
                <small>Juliano Hernández Angulo, <cite title="Tiel la Mondo Iras">Tiel la Mondo Iras</cite></small>
            </blockquote>
            <p>
                And so I created <a href="https://github.com/JCharante/quit-reddit">JCharante/quit-reddit</a> after
                deliberating for a minute or two whether to go with a straight forward name for the repo, or one that
                has nothing to do with quitting reddit and probably the name of an animal in a foreign language.
            </p>
            <p>
                So I quickly threw the script together, making sure not to delete comments made in a subreddit that
                I'm a moderator of, and tested it out.
            </p>
            <img src="https://static.jcharante.com/aar/quitting-reddit/1.png" class="responsive"/>
            <p class="caption text-center">Success!</p>
            <p>
                So there was about 34 minutes between when I first
                <a href="https://github.com/JCharante/quit-reddit/commit/160fc09ccc30b4affc5068a09bd3907ffb5a5152">
                    created the repo with the GitHub Web UI
                </a>, and
                <a href="https://github.com/JCharante/quit-reddit/commit/b05ded4ed7c2ceaf0b8c537716e08c74572236c2">
                    committed the initial working version
                </a>, which I think is pretty decent since I initially started with using the
                <a href="https://github.com/reddit/reddit/wiki/OAuth2">
                    OAuth2 api
                </a>but then pivoted to the much easier
                <a href="https://github.com/reddit/reddit/wiki/OAuth2-Quick-Start-Example">
                    script & username/password authentication
                </a>.
            </p>
            <p>
                I of course went back and wrote some documentation to include in the README, and I think it was a pretty
                good use of an hour.
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
