<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <strong>เมนู &#9656; ร้านเสริมสวยแฮร์เบสภูเก็ต</strong>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <template v-for="cat in cates">
          <router-link
            class="navbar-item is-size-4"
            active-class="active"
            :to="cat[2]"
            :key="cat[0]"
          >
            <span>&#9752;</span>
            {{ cat[1] }}
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cates: [
        ['บริกราตัดสระซอยผม และอื่นๆ', 'บริการเสริมสวย', '/haircut-hairstyle'],
        ['บริการดูแลเส้นผมด้วยผลิตภัณฑ์ชั้นนำ', 'ดูแลเส้นผม', '/professional-haircare'],
        ['ทำสปา นวด ขัดผิว', 'สปา ทรีทเม้นท์', '/spa-treatments'],
        ['ร้านทำผม แฮร์เบส ภูเก็ต', 'ประวัติ+ที่ตั้งร้าน', '/phuket-hair-shop']
        // ,['กระดานสนทนา', 'กระดานสนทนา', '/webboard']
      ]
    }
  }
}
</script>

<style scoped>
</style>
