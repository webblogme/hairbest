<template>
  <div>
    <TopSection fullhead/>
    <Navigation/>
    <div class="columns">
      <div class="column is-two-thirds blogdata">
        <h1 class="title">แฮร์เบสท์ ภูเก็ต</h1>
        <h2 class="subtitle">สถาบัน HAIR BEST BY IN TREND HAIR STYLE</h2>
        <div v-html="content1" class="mb-20"></div>
        <carousel
          :data="carouselData"
          direction="up"
          :controls="false"
          :indicators="false"
          :interval="2500"
        />
        <img src="../../static/images/shop4.jpg" class="mt-30">
      </div>
      <div class="column aside">
        <p class="is-centered-text">
          <img
            src="../../static/images/map.png"
            alt="ร้านเสริมสวย แฮร์เบสท์"
            title="ร้านเสริมสวย แฮร์เบสท์"
          >
          <img src="../../static/images/shop3.jpg" class="mt-10 mb-10" alt="เสริมสวย">
        </p>
        <p>
          รับออกแบบทรงผมสุภาพบุรุษและสุภาพสตรี โดยทีมงานผู้เชี่ยวชาญสร้างสรรค์ด้วยฝีมือ
          เชื่อถือด้วยผลงาน
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full blogdata" v-html="content2"></div>
    </div>
    <LowerPart/>
    <FooterContact/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content1: '',
      content2: '',
      carouselData: [
        '<img src="../static/slides/shop0001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/shop0002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/shop0003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/shop0004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/shop0005.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/shop0006.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">'
      ]
    }
  },
  beforeMount () {
    this.content1 = '<a class="button is-large is-loading">Button</a >'
  },
  created: function () {
    this.$http.get('get_page/?id=19').then(response => {
      // console.log(response.body.page.content)
      this.content1 = response.body.page.content
    })
    this.$http.get('get_page/?id=21').then(response => {
      // console.log(response.body.page.content)
      this.content2 = response.body.page.content
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
