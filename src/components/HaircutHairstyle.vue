<template>
  <div>
    <TopSection fullhead/>
    <Navigation/>
    <div class="columns">
      <div class="column is-two-thirds blogdata">
        <h1 class="title">บริการของเรา</h1>
        <h2 class="subtitle">Haircut &amp; Style</h2>
        <div v-html="content"></div>
        <p class="has-text-centered">
          <img src="../../static/images/working.jpg" class="mt-20">
          <img src="../../static/images/shop4.jpg" class="mt-20">
        </p>
      </div>
      <div class="column aside box">
        <carousel :data="carouselData" :indicators="false" :interval="2500"/>
        <p>
          รับออกแบบทรงผมสุภาพบุรุษและสุภาพสตรี โดยทีมงานผู้เชี่ยวชาญสร้างสรรค์ด้วยฝีมือ
          เชื่อถือด้วยผลงาน
        </p>
        <p class="has-text-centered">
          <img src="../../static/images/kerafusion-2.jpg" class="mt-20">
          <img src="../../static/images/tools2.jpg" class="mt-20">
          <img src="../../static/images/scissors.jpg" alt="เสริมสวย ตัดผม ภูเก็ต" class="mt-20">
          <img src="../../static/images/shampooroom.jpg" alt="เสริมสวย ภูเก็ต" class="mt-20">
        </p>
      </div>
    </div>
    <FooterContact/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      carouselData: [
        '<img src="../static/slides/image-flash001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/image-flash002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/image-flash003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/image-flash004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/image-flash005.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >',
        '<img src="../static/slides/image-flash006.jpg" alt="Hair Best Phuket" title="Hair Best Phuket" >'
      ]
    }
  },
  beforeMount () {
    this.content = '<a class="button is-large is-loading">Button</a >'
  },
  created: function () {
    this.$http.get('get_page/?id=7').then(response => {
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
