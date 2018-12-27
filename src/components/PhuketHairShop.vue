<template>
  <div>
    <div class="navbar">
      <Navigation/>
    </div>
    <h1>PhuketHairShop</h1>
    <div v-html="content1"></div>
    <div v-html="content2"></div>
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
      msg: 'xxxxx',
      content1: '',
      content2: ''
    }
  },
  created: function () {
    this.$http.get('get_page/?id=19').then(response => {
      // console.log(response.body.page.content)
      this.content1 = response.body.page.content
    })
    this.$http.get('get_page/?id=21').then(response => {
      console.log(response.body.page.content)
      this.content2 = response.body.page.content
    })

  }
}
</script>

<style scoped>
</style>
