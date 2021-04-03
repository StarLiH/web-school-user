<template>
  <div id="top-page">
    <top-nav></top-nav>
    <carousel-map></carousel-map>
  </div>
</template>


<script>
import TopNav from 'components/TopNav/index'
import CarouselMap from 'components/CarouselMap/index.vue'
export default {
  name:'Home',
  components:{
    TopNav,
    CarouselMap
  }
}
</script>

<style lang="scss">
  #top-page{
    position: relative;
  }
</style>