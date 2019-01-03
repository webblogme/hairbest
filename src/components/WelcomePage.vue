<template>
  <div>
    <TopSection/>
    <div class="columns">
      <div class="column">
        <carousel :data="carouselData" :indicators="hover" :interval="2500"/>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered welcome">
        <section v-html="content"></section>
        <section>
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
            <a href="https://vimeo.com">Vimeo</a>. ถ่ายทำรายการโทรทัศน์ ออกอากาศทางช่องเคเบิลทีวีจังหวัดภูเก็ต
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
      carouselData: [
        '<div class="slide-index"><img src="../static/slides/loop001.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div?',
        '<div class="slide-index"><img src="../static/slides/loop002.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div?',
        '<div class="slide-index"><img src="../static/slides/loop003.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div?',
        '<div class="slide-index"><img src="../static/slides/loop004.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div?',
        '<div class="slide-index"><img src="../static/slides/loop005.jpg" alt="Hair Best Phuket" title="Hair Best Phuket"></div?'
      ]
    }
  },
  beforeMount () {
    this.content = '<a class="button is-large is-loading">Button</a >'
  },
  created: function () {
    this.$http.get('get_page/?id=5').then(response => {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
