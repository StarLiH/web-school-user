<template>
  <div id="tea-nav-bar">
    <top-nav></top-nav>
    <div class="user-back"><img src="../../assets/img/back-user.jpg" alt=""></div>
    <div class="user-center">
      <teacher-nav></teacher-nav>
      <router-view/>
    </div>
    <com-footer></com-footer>
  </div>
</template>


<script>
import TopNav from 'components/TopNav/index'
import teacherNav from 'components/teacherNav/index'
import comFooter from 'components/footer/index'
export default {
  name:'teacher',
  components:{
    TopNav,
    comFooter,
    teacherNav
  }
}
</script>

<style lang="scss" scoped>
  #tea-nav-bar{
    .user-back{
      img{
        width: 100%;
        height: 100px;
        vertical-align: bottom;
      }
    }
    .user-center{
      position: relative;
    }
  }
</style>