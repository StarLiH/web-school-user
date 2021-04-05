<template>
  <div id="register">
    <form action="#">
      <input class="username" type="text" placeholder="请输入昵称">
      <input class="user" type="text" placeholder="请使用号码或者邮箱注册">
      <input class="passa" type="password" placeholder="请输入密码">
      <input class="passb" type="password" placeholder="请再次入密码">
      <div class="vd clearfix">
        <input class="vcode" type="text" placeholder="请输入验证码">
        <p><a href="javascript:;">获取验证码</a></p>
      </div>
    </form>
    <button>注册</button>
    <router-link to="login"><a class="vs" href="javascript:;">已有账号，去登录</a></router-link>
  </div>
</template>

<script>
export default {
  name:'Register'
}
</script>

<style lang="scss">
  #register{
    height: 500px;
    overflow: hidden;
    background-color: rgb(179, 250, 255);
    input{
      height:20px;
      width: 300px;
      padding-left:10px;
      padding-top:10px;
      padding-bottom:10px;
    }
    .username,.user,.passa,.passb{
      margin: 30px 80px;
    }
    .vd{
      margin: 30px 80px;
      position: relative;
      input{
        width: 150px;
        float: left;
      }
      p{
        position: absolute;
        right: 30px;
        padding: 0 5px;
        box-shadow: 3px 3px 5px #c4c4c4;
        height: 42px;
        line-height: 42px;
        border: 1px solid rgb(219, 217, 217);
        border-radius: 10px;
        background-color: rgb(232, 238, 243);
        a{
          color: black;
        }
        a:hover{
          color: rgb(103, 170, 247);
        }
      }
    }
    button{
      position: absolute;
      width: 100px;
      height: 40px;
      background-color: rgb(190, 247, 220);
      font-size: 20px;
      box-shadow: 3px 3px 5px #c4c4c4;
      bottom: 150px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid rgb(219, 217, 217);
      border-radius: 10px;
    }
    .vs{
      position: absolute;
      padding: 10px;
      color: black;
      border-radius: 10px;
      box-shadow: 3px 3px 5px #c4c4c4;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgb(221, 221, 221);
    }
    .vs:hover{
      color: #0273f5;
    }
  }
</style>