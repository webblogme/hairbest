<template>
  <div>
    <h1>SpaTreatments {{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium sed molestiae dolorum rem, dignissimos aliquam soluta magnam eaque. Repellendus quisquam quos magni vero saepe, non facere atque dolor molestias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium sed molestiae dolorum rem, dignissimos aliquam soluta magnam eaque. Repellendus quisquam quos magni vero saepe, non facere atque dolor molestias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium sed molestiae dolorum rem, dignissimos aliquam soluta magnam eaque. Repellendus quisquam quos magni vero saepe, non facere atque dolor molestias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium sed molestiae dolorum rem, dignissimos aliquam soluta magnam eaque. Repellendus quisquam quos magni vero saepe, non facere atque dolor molestias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium sed molestiae dolorum rem, dignissimos aliquam soluta magnam eaque. Repellendus quisquam quos magni vero saepe, non facere atque dolor molestias.</p>
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
  name: 'SpaTreatments',
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
