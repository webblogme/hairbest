<template>
  <div>
    <div class="navbar">
      <Navigation/>
    </div>
    <h1>SpaTreatments</h1>
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
      msg: 'xxxxx',
      content: ''
    }
  },
  created: function () {
    this.$http.get('get_page/?id=16').then(response => {
      // console.log(response.body.page.content)
      this.content = response.body.page.content
    })
  }
}
</script>

<style scoped>
</style>
