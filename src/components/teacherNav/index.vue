<template>
  <div id="tea-nav">
    <ul  class="tea-nav-ul clearfix">
      <li>个人中心</li>
      <p class="tea-nav-line"></p>
      <li>
        <router-link to="/teachercenter/msg">个人资料</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/course">课程发布</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/manage">课程管理</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/exam">试题发布</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/read">试题评阅</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/collect">我的收藏</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/record">我的记录</router-link>
      </li>
      <li>
        <router-link to="/teachercenter/question">我的问答</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name:'teacherNav',
  components:{
    
  }
}
</script>

<style lang="scss" scoped>
 #tea-nav{
   height: 600px;
   position: relative;
   .tea-nav-ul{
     position: absolute;
     top: 20px;
     left: 290px;
     box-shadow: -2px 3px 6px rgb(167, 165, 165);
     background-color: rgba(243, 243, 243, 0.527);
     .tea-nav-line{
       height: 1px;background-color: rgb(214, 213, 213);
     }
     li{
       width: 100px;
       height: 50px;
       line-height: 50px;
       text-align: center;
       a{
         color: black;
       }
     }
   }
 }
</style>