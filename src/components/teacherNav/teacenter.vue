<template>
  <div id="tea-msg">
    <p class="mm">我的资料</p>
    <p class="tea-msg-line"></p>
    <el-form ref="form" :model="teacher" label-width="100px">
      <div class="msg-avatar clearfix">
        <div class="avatar text-a">我的头像：</div>
        <div class="avatar box-avatar">
          <img
            :src="teacher.headportrait"
            alt="头像"
          />
        </div>
        <div class="avatar up-avatar">
          <span>更换头像：</span>
          <el-upload
            class="avatar-uploader"
            action="http://localhost:9001/xiyueoss/fileoss"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <el-form-item label="我的昵称：">
        <el-input v-model="teacher.name"></el-input>
      </el-form-item>
      <el-form-item label="我的账号：">
        <el-input v-model="teacher.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="我的简介：">
        <el-input type="textarea" v-model="teacher.intro"></el-input>
      </el-form-item>
      <div class="msg-radio clearfix">
        <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
        <label v-for="(item, index) in raditems">
          <input type="radio" name="user" :value="item.id" v-model="radValue" />
          {{ item.label }}
        </label>
      </div>
      <div class="msg-next">
        <el-button type="primary" @click="saveMyInfo()">保存</el-button>
      </div>
    </el-form>
  </div>
</template>


<script>
import cookie from "js-cookie";
import user from "api/user";
import login from "api/login";
import { ElMessage } from "element-plus";
export default {
  name: "msg",
  data() {
    return {
      teacher: {
        name: "",
        headportrait: "",
        phonenumber: "",
        intro: "",
        sex: "",
      },
      radValue: "",
      raditems: [
        { label: "男", id: 0 },
        { label: "女", id: 1 },
      ],
      loginInfo:''
    };
  },
  created() {
    //页面渲染之前执行
    this.teacherMsg();
  },
  methods: {
    //初始显示教师信息
    teacherMsg() {
      let showteacher = cookie.get("user_info");
      this.teacher = JSON.parse(showteacher);
      this.radValue=this.teacher.sex
      //console.log(this.teacher.headportrait)
    },
    handleAvatarSuccess(res) {
      //上传之后
      this.teacher.headportrait = res.data.url;
    },
    saveMyInfo() {
      this.teacher.sex = this.radValue
      user.updateTeacher(this.teacher).then((response) => {
        login.teacherInfo().then((response) => {
          this.loginInfo = response.data.data.teachersInfo;
          //获取返回的用户信息，放入cookie
          cookie.set("user_info", this.loginInfo, { domain: "localhost" });
          //身份判断放入cook
          ElMessage.success({
            message: "修改成功",
            type: "success",
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#tea-msg {
  position: absolute;
  top: 20px;
  left: 390px;
  border: 1px solid rgb(214, 213, 213);
  border-top: none;
  width: 800px;
  height: 551px;
  box-shadow: 4px 3px 6px rgb(167, 165, 165);
  background-color: rgb(255, 255, 255);
  .mm {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }
  .tea-msg-line {
    height: 1px;
    background-color: rgb(214, 213, 213);
  }
  .el-form {
    width: 550px;
    margin: 40px;
    .msg-avatar {
      margin-bottom: 10px;
      .text-a {
        height: 120px;
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 200px;
      }
      .avatar {
        float: left;
        margin-left: 19px;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          box-shadow: 0px 2px 5px rgb(179, 179, 179);
        }
      }
      .box-avatar {
        width: 120px;
        height: 124px;
      }
      .up-avatar {
        margin-top: 70px;
        margin-left: 40px;
        .avatar-uploader {
          float: right;
          width: 40px;
          height: 40px;
          border: 1px dashed #d9d9d9;
        }
        .avatar-uploader:hover {
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 16px;
          color: #8c939d;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      }
    }
    .el-input {
      width: 300px;
    }
    .msg-radio {
      margin-left: 20px;
      input {
        margin: 0 16px;
        float: left;
        margin-right: 5px;
      }
      label {
        font-size: 14px;
        color: rgb(105, 105, 105);
        float: left;
      }
    }
    .msg-next {
      margin: 10px 300px;
    }
  }
}
</style>