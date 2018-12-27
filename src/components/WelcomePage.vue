<template>
  <div class="container">
    <div class="hero" v-html="content"></div>
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
  name: 'WelcomePage',
  components: {
    Navigation,
    FooterContact
  },
  data () {
    return {
      msg: 'Hair Best Phuket',
      content: ''
    }
  },
  created: function () {
    this.$http.get('get_page/?id=5').then(response => {
      // console.log(response.body.page.content)
      this.content = response.body.page.content
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  color: #42b983;
}
p {
  color: red;
  span {
    font-weight: bold;
    &:hover {
      color: blue;
    }
  }
}
</style>
