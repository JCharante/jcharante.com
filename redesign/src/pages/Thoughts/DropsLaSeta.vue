<template>
  <q-page>
    <SimplePage>
      <div>
        <p><b>Drops: La Seta</b> (Sun Nov 18)</p>
        <p>Yesterday, while searching for apps either like Amikumu or something to help build my vocabulary, I ran into
        an app* called Drops.</p>
        <p>*because they actually have the "Drops" app, whose favicon is flag-neutral, but then they have a version of
        their app for each language, whose favicon is based off the language. You might think, oh that's handy, it's like
        a full version of the app plus "lite" editions which only feature that language.. Now that would make sense,
        except each edition of the app can actually download the language pack for the other languages, so you could be
        learning Esperanto on the Esperanto, Vietnamese, and Drops version of the app, and your progress is synced
        between them when you create an account.</p>
        <p>(cont'd) so then why would someone install more than 1 SKU of the app? Well, their monetization model is that
        every 10 hours, you're granted 5 minutes of using the app (not accumulative). If you want extra time,
        then every 10 hours you're able to watch an ad for an extra minute of time. Except, the time is not synced
        through their servers (either intentionally to boost their DAUs or by accident), so if you want to study
        1 hour of Esperanto every 10 hours, then you need to install Drops + 11 editions of Drops, or you can just
        pay $10/mo (with discounts for longer periods of time).</p>
        <p>(cont'd) I initially started doing that but then just coughed up the $10/mo.</p>
        <p>So Drops is pretty different from other language learning apps, where you just focus on learning vocabulary.
        There are topics (Food, More Food, Numbers, More Numbers, Relationships, etc..) with a certain set of words in
        each topic and the puzzles which prove proficiency are spelling the word through a boggle-esque board,
        choosing which icon the word belongs to (2 or 4 options are present), or if an icon matches the word. The words
        that are used to populate the incorrect answers in the puzzles are pulled from your vocabulary, which consists
        of words that you know or are in the process of learning. Now I decided to give it a try with the Castilian version
        of Spanish (I later found out there's a latin american version) and I started with the lesson/topic on food.</p>
        <p>When you begin a topic, it loops through the lists of words that will be in the lesson and asks you to separate them into two
          categories, words you want hidden (because you already know them) and words you want to learn.
          As expected, I was pretty proficient, and there was only one word I didn't know ("La Seta" >> "The Mushroom"), so when
        I moved onto the puzzle stage of the lesson, I just had to pick out "La Seta" over and over again, for 4 minutes.</p>
        <p>I don't believe anyone has spent that long learning that word before, so I consider myself an expert on the
          very narrow subject.</p>
      </div>
    </SimplePage>
  </q-page>
</template>

<script>
import SimplePage from '../../components/SimplePage.vue'
export default {
  components: {
    SimplePage
  }
}
</script>
