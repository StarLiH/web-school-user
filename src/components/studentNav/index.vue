<template>
  <div id="stu-nav">
    <ul  class="stu-nav-ul clearfix">
      <li>个人中心</li>
      <p class="stu-nav-line"></p>
      <li>
        <router-link to="/studentcenter/msg">个人资料</router-link>
      </li>
      <li>
        <router-link to="/studentcenter/avatar">我的头像</router-link>
      </li>
      <li>
        <router-link to="/studentcenter/safe">账号安全</router-link>
      </li>
      <li>
        <router-link to="/studentcenter/course">我的课程</router-link>
      </li>
      <li>
        <router-link to="/studentcenter/exam">我的试题</router-link>
      </li>
      <li>
        <router-link to="/studentcenter/question">我的问答</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name:'studentNav',
  components:{
    
  }
}
</script>

<style lang="scss" scoped>
 #stu-nav{
   height: 600px;
   position: relative;
   .stu-nav-ul{
     position: absolute;
     top: 20px;
     left: 290px;
     box-shadow: -2px 3px 6px rgb(167, 165, 165);
     background-color: rgba(243, 243, 243, 0.527);
     .stu-nav-line{
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