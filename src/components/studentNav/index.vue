<template>
  <div id="stu-nav">
    <ul class="stu-nav-ul clearfix">
      <li>个人中心</li>
      <p class="stu-nav-line"></p>
      <li class="stu-li one-li" @click="change('a')" :id="'a'">
        <router-link to="stumsg">个人资料</router-link>
      </li>
      <li class="stu-li" @click="change('b')" :id="'b'">
        <router-link to="stucourse">我的课程</router-link>
      </li>
      <li class="stu-li" @click="change('c')" :id="'c'">
        <router-link to="stuexam">我的试题</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "studentNav",
  methods: {
    change(id) {
      //改变当前颜色
      let allLi = document.getElementsByClassName("stu-li");
      allLi[0].classList.remove("one-li");
      //console.log(allLi[0].id === id)
      for (let i = 0; i < allLi.length; i++) {
        if (allLi[i].id === id) {
          allLi[i].style.backgroundColor = "rgb(11, 145, 255)";
        } else {
          allLi[i].style.backgroundColor = "";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#stu-nav {
  height: 600px;
  position: relative;
  .stu-nav-ul {
    position: absolute;
    top: 20px;
    left: 290px;
    box-shadow: -2px 3px 6px rgb(167, 165, 165);
    background-color: rgba(243, 243, 243, 0.527);
    .stu-nav-line {
      height: 1px;
      background-color: rgb(214, 213, 213);
    }
    .one-li {
      background-color: rgb(11, 145, 255);
    }
    li {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      a {
        color: black;
      }
    }
  }
}
</style>