<template>
  <div>
    <h1>PhuketHairShop {{ msg }}</h1>
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
  name: 'PhuketHairShop',
  components: {
    Navigation,
    FooterContact
  },
  data () {
    return {
      msg: 'xxxxx'
    }
  }
}
</script>

<style scoped>
</style>
