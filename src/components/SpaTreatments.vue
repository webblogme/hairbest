<template>
  <div>
    <TopSection fullhead/>
    <Navigation/>
    <div class="columns">
      <div class="column is-two-thirds blogdata">
        <h1 class="title">สปา ทรีทเม้นท์</h1>
        <h2 class="subtitle">Spa Treatments</h2>
        <img src="../../static/images/spas.jpg" class="mb-20">
        <div v-html="content"></div>
        <img src="../../static/images/dermalogica.jpg" class="mt-20">
      </div>
      <div class="column aside">
        <carousel :data="carouselData" :indicators="false" :interval="2500"/>
        <p class="is-centered-text">
          <img src="../../static/images/spas-purple.jpg" class="mt-10">
        </p>
        <p>
          รับออกแบบทรงผมสุภาพบุรุษและสุภาพสตรี โดยทีมงานผู้เชี่ยวชาญสร้างสรรค์ด้วยฝีมือ
          เชื่อถือด้วยผลงาน
        </p>
      </div>
    </div>
    <LowerPart/>
    <FooterContact/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      carouselData: [
        '<img src="../static/slides/spa001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/spa002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/spa003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/spa004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">'
      ]
    }
  },
  beforeMount () {
    this.content = '<a class="button is-large is-loading">Button</a >'
  },
  created: function () {
    this.$http.get('get_page/?id=16').then(response => {
      // console.log(response.body.page.content)
      this.content = response.body.page.content
    })
  },
  metaInfo: {
    title: 'Hair Best Phuket', // set a title
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
