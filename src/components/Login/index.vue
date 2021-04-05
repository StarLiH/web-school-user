<template>
  <div id="join">
    <form action="#">
      <input class="user" type="text" placeholder="请输入号码或者学号">
      <input class="pass" type="password" placeholder="请输入密码">
      <input class="vcode" type="text" placeholder="验证码">
    </form>
    <button>登录</button>
    <router-link to="/register"> <a class="ls" href="javascript:;">还没有账号？注册</a></router-link>
  </div>
</template>

<script>
export default {
  name:'login'
}
</script>

<style lang="scss">
  #join{
    height: 500px;
    overflow: hidden;
    background-color: rgb(157, 235, 245);
    input{
      height:30px;
      padding-left:49px;
      padding-top:10px;
      padding-bottom:10px;
      margin: 40px 70px;
    }
    .user{
      background: url('../../assets/png/userlogo.png') no-repeat rgb(247, 248, 248);
      background-size: 30px 30px;
      background-position: 5px 10px;
      width:300px;
      margin-top: 30px;
    }
    .pass{
      background: url('../../assets/png/password.png') no-repeat rgb(247, 248, 248);
      background-size: 30px 30px;
      background-position: 5px 10px;
      width:300px;
    }
    .vcode{
      padding-left: 25px;
      background-color: rgb(247, 248, 248);
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
    .ls{
      position: absolute;
      padding: 10px;
      color: black;
      background-color: rgb(221, 221, 221);
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
      box-shadow: 3px 3px 5px #c4c4c4;
    }
    .ls:hover{
      color: #0273f5;
    }
  }
</style>