<template>
  <div>
    <iframe v-if="fullhead" src="../../static/swf-row.html" class="roller"></iframe>
    <header v-if="fullhead">
      <div class="columns">
        <div class="column is-5">
          <a href="./">
            <img alt="เสริมสวย" class="mt-10" src="../../static/images/hairbestphuket.png">
          </a>
        </div>
        <div class="column textContactTop is-5">
          <p>076 245 554</p>
          <p>ร้านเสริมสวย "แฮร์เบสท์" </p>
          <p>ถนนเจ้าฟ้าตะวันออก (ตรงข้ามตลาดมุมเมือง)</p>
          <p>เปิดบริการเสริมสวยทุกวัน 8:00-21:00</p>
          <p>
            <router-link :to="url">คลิกที่นี่เพื่อดูแผนที่</router-link>
          </p>
        </div>
      </div>
    </header>
    <header v-else>
      <div class="columns">
        <div class="column cc">
          <img
            @click="go2page"
            alt="เสริมสวย"
            class="mt-10"
            src="../../static/images/hairbestphuket.png"
          >
        </div>
      </div>
      <div class="columns cc is-size-7">Professional hair care &amp; stylish in Phuket</div>
    </header>
  </div>
</template>

<script>
export default {
  props: { fullhead: Boolean },
  data () {
    return {
      url: '/phuket-hair-shop'
    }
  },
  methods: {
    go2page: function () {
      this.$router.push('haircut-hairstyle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cc {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
