<template>
  <div id="join">
    <form action="#">
      <div class="user">
        <input
          id="in01"
          type="text"
          placeholder="请输入号码"
          v-model="user.phonenumber"
        />
        <div class="msg" v-if="errorphone.length > 0">
          {{ errorphone.join() }}
        </div>
      </div>
      <div class="pass">
        <input
          id="in02"
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        />
        <div class="msg" v-if="errorpassword.length > 0">
          {{ errorpassword.join() }}
        </div>
      </div>
      <div class="code">
        <div class="vcode clearfix">
          <input id="in03" type="text" placeholder="验证码" v-model="code" />
          <div id="c-code" @click="refreshCode()">
            <canvas-code :identifyCode="identifyCode"></canvas-code>
          </div>
        </div>
        <div class="msg" v-if="errorcode.length > 0">
          {{ errorcode.join() }}
        </div>
      </div>
      <div class="radio clearfix">
        <label v-for="(item,index) in raditems">
          <input type="radio"
          name="user"
          :value="item.id"
          v-model="radValue" />
          {{item.label}}
        </label>
      </div>
    </form>
    <button :plain="true" @click="regbtn()">登录</button>
    <router-link to="/register">
      <a class="ls" href="javascript:;">还没有账号？注册</a></router-link
    >
  </div>
</template>

<script>
import CanvasCode from "./CanvasCode.vue";
import login from '@/api/login'
import cookie from 'js-cookie'
import { ElMessage } from 'element-plus'
export default {
  name: "login",
  data() {
    return {
      //验证码
      identifyCode: "",
      identifyCodes: "123456789abcdefghijk",
      //用户输入信息
      user:{
        phonenumber:'',
        password:''
      },
      code: "",
      //获取的用户信息
      loginInfo:{},
      //提示信息
      errorphone: [],
      errorpassword: [],
      errorcode: [],
      //单选框
      radValue:1,
      raditems:[
        {label:"教师",id:0},
        {label:"学生",id:1}
      ]
    };
  },
  components: { CanvasCode },
  methods: {
    //刷新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //表单验证信息
    valiphone: function () {
      //号码验证
      let input01 = document.getElementById("in01");
      let _this = this;
      input01.onblur = function () {
        _this.errorphone = [];
        if (_this.user.phonenumber == "") {
          _this.errorphone.push("请输入账号");
        } else {
          let rulephone = /^1(3[0-9]|5[0-3,5-9]|4[0-1,4-9]|5[0-3,5-9]|6[2,5,6,7]|8[0-9]|9[0-3,5-9])\d{8}$/;
          if (!rulephone.test(_this.user.phonenumber)) {
            _this.errorphone.push("号码有误");
          }
        }
      };
    },
    valipassword: function () {
      //密码验证
      let _this = this;
      let input02 = document.getElementById("in02");
      input02.onblur = function () {
        _this.errorpassword = [];
        if (_this.user.password == "") {
          _this.errorpassword.push("请输入密码");
        } else {
          let rulepass = /^(?![0-9]+$)(?![a-z,A-Z]+$)[0-9,A-Z,a-z]{6,18}$/;
          if (!rulepass.test(_this.user.password)) {
            _this.errorpassword.push("密码需为字母与数字组合且为6~18位");
          }
        }
      };
    },
    valicode: function () {
      //验证码提示
      let _this = this;
      let input03 = document.getElementById("in03");
      input03.onblur = function () {
        _this.errorcode = [];
        if (_this.code == "") {
          _this.errorcode.push("请输入验证码");
        }else{
          if(_this.code!=_this.identifyCode){
            _this.errorcode.push("验证码有误")
          }
        }
      };
    },
    //登录
    regbtn(){
      if(this.user.phonenumber==''
      ||this.user.password==''
      ||this.code==''){
        ElMessage.warning({
          message: '信息不完全',
          type: 'warning'
        })
      }else
      if(this.errorphone.length!=0
      ||this.errorpassword.length!=0
      ||this.errorcode.length!=0){
        ElMessage.error('信息有误');
      }else
      if(this.radValue==1
      &&this.errorphone.length==0
      &&this.errorpassword.length==0
      &&this.errorcode.length==0){
        login.studlogin(this.user)
        .then(response=>{
          //获取学生登录token,并且放入cookie里面(参数分别为：名称，值，作用域)
          cookie.set("user_token",response.data.data.token,{domain:'localhost'})
          //在request里面创建拦截器
          //调用接口获取用户信息
          login.studentInfo()
          .then(response=>{
            this.loginInfo=response.data.data.studentsInfo
            //获取返回的用户信息，放入cookie
            cookie.set('user_info',this.loginInfo,{domain:'localhost'})
            if(!this.loginInfo){
              ElMessage.error('账号或者密码错误');
            }else{
              ElMessage.success({
                message:'登录成功',
                type:'success'
              })
              //跳转到首页
              window.location.href='/'
            }
          })
        })
      }else
      if(this.radValue==0
      &&this.errorphone.length==0
      &&this.errorpassword.length==0
      &&this.errorcode.length==0){
        login.teachlogin(this.user)
        .then(response=>{
          //获取教师登录token,并且放入cookie里面(参数分别为：名称，值，作用域)
          cookie.set("user_token",response.data.data.token,{domain:'localhost'})
          //在request里面创建拦截器
          //调用接口获取用户信息
          login.teacherInfo()
          .then(response=>{
            this.loginInfo=response.data.data.teachersInfo
            //获取返回的用户信息，放入cookie
            cookie.set('user_info',this.loginInfo,{domain:'localhost'})
            if(!this.loginInfo){
              ElMessage.error('账号或者密码错误');
            }else{
              ElMessage.success({
                message:'登录成功',
                type:'success'
              })
              //跳转到首页
              window.location.href='/'
            }
          })
        })
      }else{
        ElMessage.error('错误');
      }
    }
  },
  mounted() {
    //初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    //调用表单验证
    this.valiphone();
    this.valipassword();
    this.valicode();
  },
};
</script>

<style lang="scss">
#join {
  height: 500px;
  overflow: hidden;
  background-color: rgb(157, 235, 245);
  .msg {
    position: absolute;
    left: 70px;
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }
  input {
    height: 20px;
    padding-left: 49px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 40px 70px;
  }
  .user {
    input {
      background: url("../../assets/png/userlogo.png") no-repeat
        rgb(247, 248, 248);
      background-size: 30px 30px;
      background-position: 5px 5px;
      width: 280px;
    }
    .msg {
      top: 82px;
    }
  }
  .pass {
    input {
      background: url("../../assets/png/password.png") no-repeat
        rgb(247, 248, 248);
      background-size: 30px 30px;
      background-position: 5px 5px;
      width: 280px;
    }
    .msg {
      top: 164px;
    }
  }
  .code {
    .vcode {
      input {
        margin: 0 10px 30px 70px;
        padding-left: 10px;
        float: left;
        background: rgb(247, 248, 248);
      }
    }
    .msg {
      top: 246px;
    }
  }
  .radio {
    position: absolute;
    left: 60px;
    input {
      margin: 0 10px;
      float: left;
    }
    label {
      float: left;
    }
  }
  button {
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
  button:hover {
    color: #6eacfc;
    box-shadow: 5px 5px 7px #c4c4c4;
  }
  .ls {
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
  .ls:hover {
    color: #0273f5;
    box-shadow: 5px 5px 7px #c4c4c4;
  }
}
</style>