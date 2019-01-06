<template>
  <div>
    <TopSection/>
    <div class="columns">
      <div class="column welcomeSlide">
        <carousel :data="carouselData" :interval="2500"/>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered welcome is-three-fifths is-offset-one-fifth">
        <section v-html="content" @click="go2page"></section>
        <section style="overflow:hidden">
          <iframe
            src="https://player.vimeo.com/video/17958638?color=ff003c&amp;title=0&amp;byline=0&amp;portrait=0"
            width="380"
            height="300"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            data-crossorigin="y"
          ></iframe>
          <p>
            <a href="https://vimeo.com/17958638">ร้านเสริมสวย</a> by
            <a href="https://vimeo.com/user5518415">แฮร์เบสภูเก็ต</a> on
            <a href="https://vimeo.com">Vimeo</a>.
            <br>ถ่ายทำรายการโทรทัศน์ ออกอากาศทางช่องเคเบิลทีวีจังหวัดภูเก็ต
          </p>
        </section>
      </div>
    </div>
    <FooterContact/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hair Best Phuket',
      content: '',
      seoTitle: '',
      seoDesc: '',
      seoKeyword: '',
      carouselData: [
        '<div class="slide-index"><img src="../static/slides/loop001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div>',
        '<div class="slide-index"><img src="../static/slides/loop002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div>',
        '<div class="slide-index"><img src="../static/slides/loop003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div>',
        '<div class="slide-index"><img src="../static/slides/loop004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div>',
        '<div class="slide-index"><img src="../static/slides/loop005.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div>'
      ]
    }
  },
  beforeMount () {
    this.content = '<a class="button is-large is-loading">Button</a >'
  },
  methods: {
    go2page: function () {
      this.$router.push('haircut-hairstyle')
    }
  },
  created: function () {
    this.$http.get('get_page/?id=5').then(response => {
      // console.log(response.body.page)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
