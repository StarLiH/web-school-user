<template>
  <div id="register">
    <form action="#">
      <div class="username">
        <input
          id="in04"
          type="text"
          placeholder="请输入昵称"
          v-model="userinfo.nickname"
        />
        <div class="msg" v-if="errorname.length > 0">
          {{ errorname.join() }}
        </div>
      </div>
      <div class="user">
        <input
          id="in05"
          type="text"
          placeholder="请输入号码"
          v-model="userinfo.phonenumber"
        />
        <div class="msg" v-if="errorphone.length > 0">
          {{ errorphone.join() }}
        </div>
      </div>
      <div class="passa">
        <input
          id="in06"
          type="password"
          placeholder="请输入密码"
          v-model="userinfo.password"
        />
        <div class="msg" v-if="errorpassa.length > 0">
          {{ errorpassa.join() }}
        </div>
      </div>
      <div class="passb">
        <input
          id="in07"
          type="password"
          placeholder="请再次入密码"
          v-model="passb"
        />
        <div class="msg" v-if="errorpassb.length > 0">
          {{ errorpassb.join() }}
        </div>
      </div>
      <div class="cod">
        <div class="vd clearfix">
          <input
            id="in08"
            type="text"
            placeholder="请输入验证码"
            v-model="code"
          />
          <div id="c-code" @click="refreshCode()">
            <canvas-code :identifyCode="identifyCode"></canvas-code>
          </div>
        </div>
        <div class="msg" v-if="errorcode.length > 0">
          {{ errorcode.join() }}
        </div>
      </div>
      <div class="radio clearfix">
        <label v-for="(item,index) in radioitems">
          <input type="radio"
          name="user"
          :value="item.id"
          v-model="radioValue"
          />
          {{item.label}}
        </label>
      </div>
    </form>
    <button @click="registerbtn()">注册</button>
    <router-link to="login">
      <a class="vs" href="javascript:;">已有账号，去登录</a>
    </router-link>
  </div>
</template>

<script>
import CanvasCode from "./CanvasCode.vue";
//引入注册请求
import register from "@/api/register";
export default {
  name: "Register",
  data() {
    return {
      //验证码
      identifyCode: "",
      identifyCodes: "123456789abcdefghigk",
      //用户信息
      userinfo: {
        nickname: "",
        phonenumber: "",
        password: "",
      },
      passb: "",
      code: "",
      //提示信息
      errorname: [],
      errorphone: [],
      errorpassa: [],
      errorpassb: [],
      errorcode: [],
      //单选框信息
      radioValue: 1,
      radioitems: [
        { label: "教师", id: 0 },
        { label: "学生", id: 1 }
      ],
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
    //表单验证
    formname: function () {
      //昵称
      let _this = this;
      let input04 = document.getElementById("in04");
      input04.onblur = function () {
        _this.errorname = [];
        if (_this.userinfo.nickname == "") {
          _this.errorname.push("请输入昵称");
        }
      };
    },
    //号码
    fromphone: function () {
      let _this = this;
      let input05 = document.getElementById("in05");
      input05.onblur = function () {
        _this.errorphone = [];
        if (_this.userinfo.phonenumber == "") {
          _this.errorphone.push("请输入号码");
        } else {
          let rulephone = /^1(3[0-9]|5[0-3,5-9]|4[0-1,4-9]|5[0-3,5-9]|6[2,5,6,7]|8[0-9]|9[0-3,5-9])\d{8}$/;
          if (!rulephone.test(_this.userinfo.phonenumber)) {
            _this.errorphone.push("号码有误");
          }
        }
      };
    },
    //密码1
    frompassa: function () {
      let _this = this;
      let input06 = document.getElementById("in06");
      input06.onblur = function () {
        _this.errorpassa = [];
        _this.errorpassb = [];
        if (_this.userinfo.password == "") {
          _this.errorpassa.push("请输入密码");
        } else {
          let rulepass = /^(?![0-9]+$)(?![a-z,A-Z]+$)[0-9,A-Z,a-z]{6,18}$/;
          if (!rulepass.test(_this.userinfo.password)) {
            _this.errorpassa.push("密码需为字母与数字组合且为6~18位");
          }
        }
      };
    },
    //密码2
    frompassb: function () {
      let _this = this;
      let input07 = document.getElementById("in07");
      input07.onblur = function () {
        _this.errorpassb = [];
        if (_this.passb == "") {
          _this.errorpassb.push("请再次输入密码");
        } else {
          if (_this.passb != _this.userinfo.password) {
            _this.errorpassb.push("两次输入密码不同");
          }
        }
      };
    },
    fromcode: function () {
      //验证码提示
      let _this = this;
      let input08 = document.getElementById("in08");
      input08.onblur = function () {
        _this.errorcode = [];
        if (_this.code == "") {
          _this.errorcode.push("请输入验证码");
        }else{
          if(_this.code != _this.identifyCode){
            _this.errorcode.push("验证码不一致")
          }
        }
      };
    },
    //注册提交的方法
    registerbtn() {
      let name = this.userinfo.nickname
      let phone = this.userinfo.phonenumber
      let passa = this.userinfo.password
      let passb = this.userinfo.passb
      if(name==''||phone==''||passa==''||passb==''||this.code==''){
        alert('信息不完全')
      }else 
      if(this.errorname.length!=0 
      || this.errorphone.length!=0 
      || this.errorpassa.length!=0
      || this.errorpassb.length!=0
      || this.errorcode.length!=0){
        alert("信息有误")
      }else
      if(this.radioValue == 1 
      && this.errorname.length==0 
      && this.errorphone.length==0 
      && this.errorpassa.length==0
      && this.errorpassb.length==0
      && this.errorcode.length==0){
        register.studregister(this.userinfo)
        .then(response =>{
          //注册成功以及跳转登录页面
          alert("注册成功")
          this.$router.push({path:'/login'})
        })
      }else
      if(this.radioValue == 0 
      && this.errorname.length==0 
      && this.errorphone.length==0 
      && this.errorpassa.length==0
      && this.errorpassb.length==0
      && this.errorcode.length==0){
        register.teachregister(this.userinfo)
        .then(response=>{
          //注册成功以及跳转
          alert("注册成功")
          this.$router.push({path:'/login'})
        })
      }else{
        alert("error")
      }
    },
  },
  mounted() {
    //初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    //调用验证
    this.formname();
    this.fromphone();
    this.frompassa();
    this.frompassb();
    this.fromcode();
  },
};
</script>

<style lang="scss">
#register {
  height: 500px;
  overflow: hidden;
  background-color: rgb(179, 250, 255);
  .msg {
    position: absolute;
    left: 80px;
    height: 15px;
    font-size: 12px;
    color: red;
  }
  input {
    height: 20px;
    width: 300px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .username,
  .user,
  .passa,
  .passb {
    margin: 30px 80px;
  }
  .cod {
    margin-bottom: 30px;
  }
  .vd {
    margin: 10px 80px;
    position: relative;
    margin-bottom: 0;
    input {
      width: 170px;
      float: left;
      margin-right: 20px;
    }
  }
  .radio {
    position: absolute;
    left: 70px;
    input {
      width: 15px;
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
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid rgb(219, 217, 217);
    border-radius: 10px;
  }
  button:hover {
    color: #6eacfc;
    box-shadow: 5px 5px 7px #c4c4c4;
  }
  .vs {
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
  .vs:hover {
    color: #0273f5;
    box-shadow: 5px 5px 7px #c4c4c4;
  }
}
</style>