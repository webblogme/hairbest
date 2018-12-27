<template>
  <div>
    <h1>ProfessionalHaircare {{ msg }}</h1>
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
  name: 'ProfessionalHaircare',
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
