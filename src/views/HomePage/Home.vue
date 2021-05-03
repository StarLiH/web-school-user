<template>
  <div id="top-page">
    <top-nav></top-nav>
    <router-view/>
    <com-footer></com-footer>
  </div>
</template>


<script>
import TopNav from 'components/TopNav/index'
import comFooter from 'components/footer/index'
export default {
  name:'Home',
  components:{
    TopNav,
    comFooter
  }
}
</script>

<style lang="scss" scoped>
  #top-page{
    min-width: 1200px;
    height: 1400px;
    position: relative;
    min-height: 1400px;
    background: url("../../assets/img/back01.png") no-repeat;
    background-size: auto 100%;
  }
</style>