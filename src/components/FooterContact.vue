<template>
  <div class="theCenter">
    ร้านเสริมสวย "แฮร์เบสท์" 70/150 ถนนเจ้าฟ้าตะวันออก (100เมตร จากไฟแดงภูเก็ตวิลล่า 3 ตรงข้ามตลาดมุมเมือง) ตำบลวิชิต อำเภอเมือง ภูเก็ต 83000
    เปิดบริการทุกวัน | โทร 076-245-554 | อีเมล info@hairbestphuket.com
    &copy; {{ year }} - Webdesing &nbsp; Hosting by
    <a
      href="http://www.allyouneedforweb.com"
      target="_blank"
      title="Allyouneedforweb"
    >Allyouneedforweb</a>
  </div>
</template>

<script>
// Return today's date and time
var currentTime = new Date()
// returns the year (four digits)
var year = currentTime.getFullYear()

export default {
  name: 'FooterContact',
  data () {
    return {
      year: year
    }
  }
}
</script>

<style scoped lang="less">
.theCenter {
  text-align: center;
}
</style>
