<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link
        class="navbar-brand"
        to="/haircut-hairstyle"
        title="บริกราตัดสระซอยผม และอื่นๆ"
      >บริการเสริมสวย</router-link>
      <router-link
        class="navbar-brand"
        to="/professional-haircare"
        title="บริการดูแลเส้นผมด้วยผลิตภัณฑ์ชั้นนำ"
      >ดูแลเส้นผม</router-link>
      <router-link class="navbar-brand" to="/spa-treatments" title="ทำสปา นวด ขัดผิว">สปา ทรีทเม้นท์</router-link>
      <router-link
        class="navbar-brand"
        to="/phuket-hair-shop"
        title="ร้านทำผม แฮร์เบส ภูเก็ต"
      >ประวัติและที่ตั้งร้าน</router-link>
      <router-link class="navbar-brand" to="/webboard" title="ร้านทำผม แฮร์เบส ภูเก็ต">กระดานสนทนา</router-link>
    </div>
  </nav>
</template>

<script>

// dont know why not work...
/* let theLink = [
  ['บริกราตัดสระซอยผม และอื่นๆ', 'บริการเสริมสวย', '/HelloWorld'],
  ['บริการดูแลเส้นผมด้วยผลิตภัณฑ์ชั้นนำ', 'ดูแลเส้นผม', '/page1'],
  ['ทำสปา นวด ขัดผิว', 'สปา ทรีทเม้นท์', '/page2'],
  ['ร้านทำผม แฮร์เบส ภูเก็ต', 'ประวัติและที่ตั้งร้าน', '/HelloWorld'],
  ['ร้านทำผม แฮร์เบส ภูเก็ต', 'กระดานสนทนา', '/HelloWorld']
]
let element = document.createElement('div')
element.className = 'navbar-brand'
for (let index = 0; index < theLink.length; index++) {
  var elem = document.createElement('router-link')
  elem.className = 'navbar-brand'
  elem.setAttribute('to', theLink[index][2])
  elem.setAttribute('title', theLink[index][0])
  elem.innerHTML = theLink[index][1]
  element.appendChild(elem)
}
console.log(element)
let ell = document.querySelector('.navbar')
ell.appendChild(element) */

export default {
}
</script>

<style scoped lang="less">
.navbar-brand {
  flex-grow: 1;
  justify-content: center;
}
</style>
