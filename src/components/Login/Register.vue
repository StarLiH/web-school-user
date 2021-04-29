<template>
  <div id="register">
    <form action="#">
      <div class="username">
        <input type="text" placeholder="请输入昵称">
        <div class="msg">请输入昵称</div>
      </div>
      <div class="user">
        <input type="text" placeholder="请输入号码">
        <div class="msg">11</div>
      </div>
      <div class="passa">
        <input type="password" placeholder="请输入密码">
        <div class="msg">请输入密码</div>
      </div>
      <div class="passb">
        <input type="password" placeholder="请再次入密码">
        <div class="msg">请再次输入密码</div>
      </div>
      <div class="cod">
        <div class="vd clearfix">
          <input type="text" placeholder="请输入验证码">
          <div id="c-code" @click="refreshCode()">
            <canvas-code :identifyCode="identifyCode"></canvas-code>
          </div>
        </div>
        <div class="msg">11</div>
      </div>
      <div class="radio clearfix">
        <label><input type="radio" name="user" value="0">学生</label>
        <label><input type="radio" name="user" value="1">教师</label>
      </div>
    </form>
    <button>注册</button>
    <router-link to="login"><a class="vs" href="javascript:;">已有账号，去登录</a></router-link>
  </div>
</template>

<script>
import CanvasCode from './CanvasCode.vue'
export default {
  name:'Register',
  data(){
    return{
      identifyCode:'',
      identifyCodes:'123456789abcdefghigk'
    }
  },
  components: { CanvasCode },
  methods:{
    //刷新验证码
    refreshCode (){
      this.identifyCode=''
      this.makeCode(this.identifyCodes,4);
    },
    makeCode(o,l){
      for(let i=0;i<l;i++){
        this.identifyCode += this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]
      }
    },
    randomNum(min,max){
      return Math.floor(Math.random()*(max-min)+min)
    }
  },
  mounted(){
    //初始化验证码
    this.identifyCode=''
    this.makeCode(this.identifyCodes,4)
  }
}
</script>

<style lang="scss">
  #register{
    height: 500px;
    overflow: hidden;
    background-color: rgb(179, 250, 255);
    .msg{
      position: absolute;
      left: 80px;
      height: 15px;
      font-size: 12px;
      color: red
    }
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
    .cod{
      margin-bottom: 30px;
    }
    .vd{
      margin: 10px 80px;
      position: relative;
      margin-bottom: 0;
      input{
        width: 170px;
        float: left;
        margin-right: 20px;
      }
    }
    .radio{
      position: absolute;
      left: 70px;
      input{
        width: 15px;
        margin: 0 10px;
        float: left;
      }
      label{
        float: left;
      }
    }
    button{
      position: absolute;
      width: 100px;
      height: 40px;
      background-color: rgb(190, 247, 220);
      font-size: 20px;
      box-shadow: 3px 3px 5px #c4c4c4;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid rgb(219, 217, 217);
      border-radius: 10px;
    }
    button:hover{
      color: #6eacfc;
      box-shadow: 5px 5px 7px #c4c4c4;
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
      box-shadow: 5px 5px 7px #c4c4c4;
    }
  }
</style>