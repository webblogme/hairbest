<template>
  <footer class="footer has-text-centered">
    <div class="navbar">
      <template v-for="cat in cates">
        <router-link
          class="navbar-item navbar-center is-size-4"
          active-class="active"
          :to="cat[2]"
          :key="cat[0]"
          style="border-top:none"
        >
          <span>&#9752;</span>
          {{ cat[1] }}
        </router-link>
      </template>
    </div>
    <div class="content has-text-centered">
      <h6 class="is-size-5">ร้านเสริมสวย "แฮร์เบสท์"</h6>
      <p class="is-size-7">
        70/150 ถนนเจ้าฟ้าตะวันออก (100เมตร จากไฟแดงภูเก็ตวิลล่า 3 ตรงข้ามตลาดมุมเมือง)
        ตำบลวิชิต อำเภอเมือง ภูเก็ต 83000
        <br>เปิดบริการทุกวัน | โทร 076-245-554 | อีเมล info@hairbestphuket.com
      </p>
      <p class="is-size-7">
        &copy; {{ year }} - Webdesing &nbsp; Hosting by
        <a
          href="http://www.allyouneedforweb.com"
          target="_blank"
          title="Allyouneedforweb"
        >Allyouneedforweb</a>
      </p>
    </div>
  </footer>
</template>

<script>
// Return today's date and time
var currentTime = new Date()
// returns the year (four digits)
var year = currentTime.getFullYear()

export default {
  data () {
    return {
      year: year,
      cates: [
        ['บริกราตัดสระซอยผม และอื่นๆ', 'บริการเสริมสวย', '/haircut-hairstyle'],
        ['บริการดูแลเส้นผมด้วยผลิตภัณฑ์ชั้นนำ', 'ดูแลเส้นผม', '/professional-haircare'],
        ['ทำสปา นวด ขัดผิว', 'สปา ทรีทเม้นท์', '/spa-treatments'],
        ['ร้านทำผม แฮร์เบส ภูเก็ต', 'ประวัติ+ที่ตั้งร้าน', '/phuket-hair-shop']
      ]
    }
  }
}
</script>

<style>
.footer {
  background: none;
}
footer > .navbar {
  flex-grow: 1;
  justify-content: center;
  padding-top: 2rem;
}
.navbar {
  margin-bottom: 2rem;
}
</style>
