<template>
  <div>
    <TopSection fullhead/>
    <Navigation/>
    <div class="columns">
      <div class="column is-two-thirds blogdata">
        <h1 class="title">ผลิตภัณฑ์ดูแลเส้นผม</h1>
        <h2 class="subtitle">Professional Haircare</h2>
        <div v-html="content3"></div>

        <br>

        <carousel
          :data="carouselData2"
          direction="up"
          :controls="false"
          :indicators="false"
          :interval="3000"
        />
      </div>
      <div class="column aside">
        <carousel :data="carouselData" :indicators="false" :interval="2500"/>
        <p>
          รับออกแบบทรงผมสุภาพบุรุษและสุภาพสตรี โดยทีมงานผู้เชี่ยวชาญสร้างสรรค์ด้วยฝีมือ
          เชื่อถือด้วยผลงาน
        </p>
        <p class="is-centered-text">
          <img src="../../static/images/products.jpg" alt="ผลิตภัณฑ์เสริมสวยชั้นนำ" class="mt-20">
          <img src="../../static/images/ultima.jpg">
        </p>
      </div>
    </div>

    <!-- /.columns -->
    <div class="columns">
      <!-- /.column is-two-thirds -->
      <div class="column is-full blogdata">
        <img
          src="../../static/images/banner1.png"
          alt="เสริมสวย ด้วยการดูแลเส้นผมจากผู้เชี่ยวชาญ"
          class="mb-30"
        >
        <div v-html="content1"></div>
        <div v-for="x in content2.slice().reverse()" :key="x.id">
          <div v-html="x.content"></div>
        </div>
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
      content1: '',
      content2: '',
      content3: '',
      carouselData: [
        '<img src="../static/slides/care001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/care002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/care003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/care004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/care005.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">'
      ],
      carouselData2: [
        '<img src="../static/slides/treatment01.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/treatment02.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/treatment03.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">',
        '<img src="../static/slides/treatment04.jpg" alt="Hair Best Phuket" title="Hair Best Phuket">'
      ]
    }
  },
  beforeMount () {
    this.content1 = '<a class="button is-large is-loading">Button</a >'
  },
  created: function () {
    this.$http.get('get_page/?id=25').then(response => {
      // console.log(response.body.page.content)
      this.content1 = response.body.page.content
    })
    this.$http.get('get_posts').then(response => {
      // console.log(response.body)
      this.content2 = response.body.posts
    })
    this.$http.get('get_page/?id=10').then(response => {
      // console.log(response.body.page.content)
      this.content3 = response.body.page.content
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
