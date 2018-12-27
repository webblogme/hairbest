<template>
  <div>
    <h1>HaircutHairstyle {{ msg }}</h1>
    <br>
    <div class="navbar">
      <Navigation/>
      <FooterContact/>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import FooterContact from './FooterContact'

export default {
  name: 'HaircutHairstyle',
  components: {
    Navigation,
    FooterContact
  },
  data () {
    return {
      msg: 'xxx'
    }
  },
  metaInfo: {
    title: 'My Example App', // set a title
    titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  }
}
</script>

<style scoped>
</style>
