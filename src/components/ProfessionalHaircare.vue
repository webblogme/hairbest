<template>
  <div>
    <div class="navbar">
      <Navigation/>
    </div>
    <h1>ProfessionalHaircare</h1>
    <div v-html="content1"></div>
    <div v-for="x in content2" :key="x.id">
      <div v-html="x.content"></div>
    </div>
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
    this.$http.get('get_page/?id=10').then(response => {
      // console.log(response.body.page.content)
      this.content = response.body.page.content
    })

    this.$http.get('get_posts').then(response => {
      // console.log(response.body)
      this.content2 = response.body.posts
    })
  }
}
</script>

<style scoped>
</style>
