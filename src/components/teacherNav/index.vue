<template>
  <div id="tea-nav">
    <ul  class="tea-nav-ul clearfix">
      <li>个人中心</li>
      <p class="tea-nav-line"></p>
      <li class="tea-li one-li" @click="change('a')" :id="'a'">
        <router-link to="/teachercenter/msg">个人资料</router-link>
      </li>
      <li class="tea-li" @click="change('b')" :id="'b'">
        <router-link to="/teachercenter/course">大纲列表</router-link>
      </li>
      <li class="tea-li" @click="change('c')" :id="'c'">
        <router-link to="/teachercenter/administer">课程管理</router-link>
      </li>
      <li class="tea-li" @click="change('d')" :id="'d'">
        <router-link to="/teachercenter/manage/info">课程发布</router-link>
      </li>
      <li class="tea-li" @click="change('e')" :id="'e'">
        <router-link to="/teachercenter/exam">试题发布</router-link>
      </li>
      <li class="tea-li" @click="change('f')" :id="'f'">
        <router-link to="/teachercenter/read">试题评阅</router-link>
      </li>
      <li class="tea-li" @click="change('g')" :id="'g'">
        <router-link to="/teachercenter/collect">我的收藏</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'teacherNav',
  data(){
    return{
      ibdex:0
    }
  },
  methods:{
    change(id){
      //改变当前颜色
      let allLi = document.getElementsByClassName("tea-li")
      allLi[0].classList.remove("one-li")
      //console.log(allLi[0].id === id)
      for(let i=0;i<allLi.length;i++){
        if(allLi[i].id === id){
          allLi[i].style.backgroundColor = "rgb(11, 145, 255)"
        }else{
          allLi[i].style.backgroundColor = ''
        }
      }
    },
  },
  
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
     .one-li{
       background-color: rgb(11, 145, 255);
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