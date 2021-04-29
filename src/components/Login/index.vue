<template>
  <div id="join">
    <form action="#">
      <div class="user">
        <input type="text" placeholder="请输入号码" v-model="phonenumber">
        <div class="msg" v-if="errorphone.length>0">{{errorphone.join()}}</div>
      </div>
      <div class="pass">
        <input type="password" placeholder="请输入密码" v-model="password">
        <div class="msg" v-if="errorpassword.length>0">{{errorpassword.join()}}</div>
      </div>
      <div class="code">
        <div class="vcode clearfix">
          <input type="text" placeholder="验证码" v-model="code">
          <div id="c-code" @click="refreshCode()">
            <canvas-code :identifyCode="identifyCode"></canvas-code>
          </div>
        </div>
        <div class="msg" v-if="errorcode.length>0">{{errorcode.join()}}</div>
      </div>
      <div class="radio clearfix">
        <label><input type="radio" name="user" value="0">学生</label>
        <label><input type="radio" name="user" value="1">教师</label>
      </div>
    </form>
    <button>
      <router-link to="/">登录</router-link>
    </button>
    <router-link to="/register"> <a class="ls" href="javascript:;">还没有账号？注册</a></router-link>
  </div>
</template>

<script>
import CanvasCode from './CanvasCode.vue'
export default {
  name:'login',
  data(){
    return{
      //验证码
      identifyCode:'',
      identifyCodes:'123456789abcdefghijk',
      //用户输入信息
      phonenumber:'',
      password:'',
      code:'',
      errorphone:[],
      errorpassword:[],
      errorcode:[]
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
    },
    //表单验证信息
    valiphone: function(){
      this.errorphone=[]
      if(this.phonenumber == ''){
        this.errorphone.push('请输入账号')
      }else{
        let rulephone = /^1(3[0-9]|5[0-3,5-9]|4[0-1,4-9]|5[0-3,5-9]|6[2,5,6,7]|8[0-9]|9[0-3,5-9])\d{8}$/;
        if(!rulephone.test(this.phonenumber)){
          this.errorphone.push('号码有误')
        }
      }
    },
    valipassword:function(){
      this.errorpassword=[]
      if(this.password == ''){
        this.errorpassword.push('请输入密码')
      }else{
        let rulepass = /^(?![0-9]+$)(?![a-z,A-Z]+$)[0-9,A-Z,a-z]{6,18}$/
        if(!rulepass.test(this.password)){
          this.errorpassword.push('密码需为字母与数字组合且为6~18位')
        }
      }
    },
    valicode:function(){
      this.errorcode=[]
      if(this.code == ''){
        this.errorcode.push('请输入验证码')
      }
    }
  },
  mounted(){
    //初始化验证码
    this.identifyCode=''
    this.makeCode(this.identifyCodes,4)
    this.valiphone()
    this.valipassword()
    this.valicode()
  }
}
</script>

<style lang="scss">
  #join{
    height: 500px;
    overflow: hidden;
    background-color: rgb(157, 235, 245);
    .msg{
      position: absolute;
      left: 70px;
      font-size: 12px;
      color: red;
      margin-top: 5px;
    }
    input{
      height:20px;
      padding-left:49px;
      padding-top:10px;
      padding-bottom:10px;
      margin: 40px 70px;
    }
    .user{
      input{
        background: url('../../assets/png/userlogo.png') no-repeat rgb(247, 248, 248);
        background-size: 30px 30px;
        background-position: 5px 5px;
        width:280px;
      }
      .msg{
        top: 82px;
      }
    }
    .pass{
      input{
        background: url('../../assets/png/password.png') no-repeat rgb(247, 248, 248);
        background-size: 30px 30px;
        background-position: 5px 5px;
        width:280px;
      }
      .msg{
        top: 164px;
      }
    }
    .code{
      .vcode{
        input{
          margin: 0 10px 30px 70px;
          padding-left: 10px;
          float: left;
          background: rgb(247, 248, 248);
        }
      }
      .msg{
        top: 246px;
      }
    }
    .radio{
      position: absolute;
      left: 60px;
      input{
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
      bottom: 160px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid rgb(219, 217, 217);
      border-radius: 10px;
    }
    button:hover{
      color: #6eacfc;
      box-shadow: 5px 5px 7px #c4c4c4;
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
      box-shadow: 5px 5px 7px #c4c4c4;
    }
  }
</style>