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
      seoTitle: '',
      seoDesc: '',
      seoKeyword: '',
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
      this.seoTitle = response.body.page.custom_fields.title[0]
      this.seoDesc = response.body.page.custom_fields.desc[0]
      this.seoKeyword = response.body.page.custom_fields.keyword[0]
    })
  },
  metaInfo () {
    return {
      title: this.seoTitle, // set a title
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: this.seoDesc },
        { name: 'keywords', content: this.seoKeyword }
      ],
      link: [
        { rel: 'favicon', href: '../static/favicon.ico', type: 'image/x-icon' },
        { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
