<template>
  <div>
    <div class="navbar">
      <Navigation/>
    </div>
    <h1>HaircutHairstyle</h1>
    <div v-html="content"></div>
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
  components: {
    Navigation,
    FooterContact
  },
  data () {
    return {
      msg: 'xxx',
      content: ''
    }
  },
  created: function () {
    this.$http.get('get_page/?id=7').then(response => {
      // console.log(response.body.page.content)
      this.content = response.body.page.content
    })
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
