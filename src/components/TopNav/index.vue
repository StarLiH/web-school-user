<template>
  <div id="top-nav" class="clearfix">
    <!-- 左侧导航 -->
    <ul class="left-nav clearfix">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/courses">全部课程</router-link>
      </li>
      <li>
        <router-link to="/teachers">全部教师</router-link>
      </li>
    </ul>
    <!-- 中间搜索框 -->
    <div class="search">
      <form class="clearfix">
        <input type="text" placeholder="请输入您要搜索的内容..." />
        <button type="submit">
          <svg-icon icon-class="search" class-name="size"></svg-icon>
        </button>
      </form>
    </div>
    <!-- 右侧登录注册以及个人中心 -->
    <ul class="login">
      <li v-if="!logininfo.id">
        <a href="#">
          <router-link to="/join/login">登录 / 注册</router-link>
        </a>
      </li>
      <li class="ucenter clearfix" v-if="logininfo.id&&radioId==1">
        <a href="/studentcenter" target="_blank">
          <p><img :src="logininfo.headportrait" alt="头像" /></p>
          <span>{{ logininfo.nickname }}</span>
        </a>
        <a href="javascript:;">我的消息</a>
        <a href="javascript:void(0);" @click="signOut()">退出登录</a>
      </li>
      <li class="ucenter clearfix" v-if="logininfo.id&&radioId==0">
        <a href="/teachercenter/msg" target="_blank">
          <p><img :src="logininfo.headportrait" alt="头像" /></p>
          <span>{{ logininfo.nickname }}</span>
        </a>
        <a href="javascript:;">我的消息</a>
        <a href="javascript:void(0);" @click="signOut()">退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
import cookie from "js-cookie";
export default {
  name: "TopNav",
  data() {
    return {
      //登录数据
      token: "",
      logininfo: {
        id: "",
        age: "",
        headportrait: "",
        nickname: "",
        sex: "",
        phonenumber: "",
      },
      //身份判断
      radioId:''
    };
  },
  created() {
    //页面渲染之前执行
    this.showInfo();
  },
  methods: {
    //从cookie获取用户信息
    showInfo() {
      let showUser = cookie.get("user_info");
      this.radioId = cookie.get("radio")
      //整个是一个字符串，需要转换为对象
      if (showUser) {
        this.logininfo = JSON.parse(showUser);
      }
    },
    //退出登录
    signOut() {
      this.$confirm("是否退出登录", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //清空cookie
          cookie.set("user_token", "", { domain: "localhost" });
          cookie.set("user_info", "", { domain: "localhost" });
          cookie.set('radio',"",{domain:'localhost'})
          //跳转首页
          window.location.href = "/";
          this.$message({
            type: "success",
            message: "退出成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#top-nav {
  min-width: 1200px;
  line-height: 70px;
  background-color: rgba(252, 252, 252,0.6);
  position: relative;
  box-shadow: 3px 3px 7px #c4c4c4;
  .left-nav {
    margin-left: 30px;
    float: left;
    li {
      margin: 0 50px;
      float: left;
    }
    a {
      color: rgb(14, 13, 13);
    }
    a:hover {
      color: rgb(74, 187, 252);
    }
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      padding: 5px;
      padding-left: 10px;
      height: 20px;
      border: 1px solid rgb(131, 131, 131);
      border-right: none;
      float: left;
    }
    button {
      height: 32px;
      width: 40px;
      border: 1px solid rgb(131, 131, 131);
      border-left: none;
      border-radius: 0;
      font-size: 18px;
      float: left;
      background-color: #d8d8d8;
      color: rgb(255, 255, 255);
    }
    button:hover {
      color: rgb(74, 195, 252);
    }
  }
  .login {
    float: right;
    margin-right: 100px;
    a {
      color: black;
      display: block;
      float: left;
      line-height: 70px;
      margin: 0 10px;
    }
    a:hover {
      color: rgb(89, 200, 252);
    }
    .ucenter {
      p {
        float: left;
        height: 65px;
        width: 65px;
        margin-top: 1px;
        margin-right: 8px;
        border-radius: 50%;
        img {
          height: 65px;
          width: 65px;
          display: block;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>