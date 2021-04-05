<template>
  <div id="top-nav" class="clearfix">
    <!-- 左侧导航 -->
    <ul class="left-nav clearfix">
      <li>
        <a href="">首页</a>
      </li>
      <li>
        <a href="">课程</a>
      </li>
      <li>
        <a href="">教师</a>
      </li>
    </ul>
    <!-- 中间搜索框 -->
    <div class="search">
      <form class="clearfix">
        <input type="text" placeholder="请输入您要搜索的内容...">
        <button type="submit">
          <svg-icon icon-class="search" class-name="size"></svg-icon>
        </button>
      </form>
    </div>
    <!-- 右侧登录注册以及个人中心 -->
    <ul class="login">
      <li>
        <a href="#">
          <router-link to="/login">登录 / 注册</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'TopNav'
}
</script>

<style lang="scss">
  #top-nav{
    min-width: 1200px;
    line-height: 50px;
    background-color: rgb(228, 228, 228);
    position: relative;
    box-shadow: 5px 5px 10px #c4c4c4;

    .left-nav{
      margin-left: 30px;
      float: left;
      li{
        margin: 0 50px;
        float: left;
      }
      a{
        color: black;
      }
    }
    .search{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      input{
        padding: 5px;
        height: 20px;
        border: 1px solid rgb(131, 131, 131);
        border-right: none;
        float: left;
      }
      button{
        height: 32px;
        width: 40px;
        border: 1px solid rgb(131, 131, 131);
        border-left: none;
        border-radius: 0;
        font-size:18px;
        float: left;
        background-color: #d8d8d8;
        color: rgb(255, 255, 255);
      }
      button:hover{
        color: rgb(74, 195, 252);
      }
    }
    .login{
      float: right;
      margin-right: 100px;
      a{
        color: black;
      }
    }
  }
</style>