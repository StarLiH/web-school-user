<template>
  <div id="stu-nav-bar">
    <top-nav></top-nav>
    <div class="user-back"><img src="../../assets/img/back-user.jpg" alt=""></div>
    <div class="user-center">
      <student-nav></student-nav>
      <router-view/>
    </div>
    <com-footer></com-footer>
  </div>
</template>


<script>
import TopNav from 'components/TopNav/index'
import studentNav from 'components/studentNav/index'
import comFooter from 'components/footer/index'
export default {
  name:'student',
  components:{
    TopNav,
    comFooter,
    studentNav
  }
}
</script>

<style lang="scss" scoped>
  #stu-nav-bar{
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