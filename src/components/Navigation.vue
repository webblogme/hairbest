<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-hidden-desktop">
      <a class="navbar-item" href="./">HairBest Chaofas</a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <template v-for="cat in cates">
          <router-link
            class="navbar-item navbar-center is-size-4"
            active-class="active"
            :to="cat[2]"
            :key="cat[0]"
          >{{ cat[1] }}</router-link>
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
.navbar-start {
  /* flex-grow: 1;
  justify-content: center; */
}
</style>
