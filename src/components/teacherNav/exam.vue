<template>
  <div id="tea-exam">
    <p class="mm">试题发布</p>
    <p class="tea-msg-line"></p>
    <div class="app-container">
      <el-upload
        class="upload-demo"
        action="http://localhost:9001/xiyueoss/fileoss"
        multiple
        :show-file-list="false"
        :limit="1"
        :on-success="updataExam"
      >
        <el-button size="small" type="primary">上传试题</el-button>
      </el-upload>
    </div>
    <p class="tea-msg-line"></p>
    <div class="show-exam">
      <ul class="my-exam">
        <p style="font-size: 16px; padding-left: 10px">我的资源</p>
        <li v-if="myExam.length == 0">没有数据</li>
        <li v-for="(exam, index) in myExam">
          <span>资源名称：{{ exam.title }}</span>
          <p>
            <a href="javascript:;" @click="removeMyExam(exam.id)">删除资源</a>
          </p>
        </li>
      </ul>
      <ul id="dome" class="submit-exam">
        <p style="font-size: 16px; padding-left: 10px">学生提交</p>
        <li v-if="submitExam.length == 0">没有数据</li>
        <li class="submit-li" v-for="(subExam, id) in submitExam" :id="subExam.id">
          <span>学生名称：{{ subExam.studentName }}</span>
          /
          <span>试题名称：{{ subExam.title }}</span>
          <p>
            评阅情况：{{ subExam.isUpdate === 0 ? "没有评阅" : "已经评阅" }}
          </p>
          <p v-if="subExam.isUpdate === 0">
            <a :href="subExam.examUrl">收取作业</a>
          </p>
          <p v-if="subExam.isUpdate === 0">
            <el-upload
              class="upload-demo"
              action="http://localhost:9001/xiyueoss/fileoss"
              multiple
              :show-file-list="false"
              :limit="1"
              :on-success="readExam"
            >
              <el-button size="small" type="primary" @click="addRead(subExam.id)">上传评阅</el-button>
            </el-upload>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import cookie from "js-cookie";
import { ElMessage } from "element-plus";
import exam from "api/exam";
export default {
  name: "exam",
  data() {
    return {
      examInfo: {
        title: "",
        teacherId: "",
        teacherName: "",
        examUrl: "",
        isDeleted: 0,
      },
      myExam: [],
      submitExam: [],
      id:'',
      subExam:{
        id:'',
        title:'',
        examUrl:'',
        isUpdate:1
      }
    };
  },
  created() {
    //let showUser = cookie.get("user_info");
    //整个是一个字符串，需要转换为对象
    //let aa = JSON.parse(cookie.get("user_info"));
    //console.log(aa.id)
    this.getMyExam();
    this.getSubmitExam();
  },
  methods: {
    updataExam(file, fileOne) {
      //整个是一个字符串，需要转换为对象
      let user = JSON.parse(cookie.get("user_info"));
      this.examInfo.examUrl = file.data.url;
      this.examInfo.title = fileOne.name;
      this.examInfo.teacherId = user.id;
      this.examInfo.teacherName = user.name;
      //console.log(fileList.name)
      exam.addTeacherExam(this.examInfo).then((response) => {
        ElMessage.success({
          message: "添加成功",
          type: "success",
        });
        this.getMyExam();
      });
    },
    //查询资源
    getMyExam() {
      let user = JSON.parse(cookie.get("user_info"));
      exam.getMyExam(user.id).then((response) => {
        this.myExam = response.data.data.myList;
        //console.log(this.myExam)
      });
    },
    //查询提交
    getSubmitExam() {
      let user = JSON.parse(cookie.get("user_info"));
      exam.getSubmitExam(user.id).then((response) => {
        this.submitExam = response.data.data.SubmitList;
      });
    },
    //评阅
    readExam(file,fileone) {
      //console.log(this.id)
      this.subExam.id = this.id
      this.subExam.title = fileone.name
      this.subExam.examUrl = file.data.url
      //console.log(this.subExam.title)
      exam.addSubmitExam(this.subExam).then((response) => {
        ElMessage.success({
          message: "上传成功",
          type: "success",
        });
        this.getSubmitExam()
      });
    },
    addRead(examId){
      this.id=examId
      //console.log(this.id)
    },
    //删除资源
    removeMyExam(id) {
      this.$confirm("此操作将删除资源, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //删除
          exam.removeMySubmit(id).then((response) => {
            ElMessage.success({
              message: "删除成功",
              type: "success",
            });
            this.getMyExam();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#tea-exam {
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
  .app-container {
    margin: 10px;
  }
  .show-exam {
    .my-exam {
      width: 100%;
      height: 200px;
      overflow-y: auto;
      box-shadow: 1px 1px 3px rgb(172, 172, 172);
      li {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px 0;
        background-color: rgb(223, 223, 223);
        border-radius: 10px;
        p {
          float: right;
        }
      }
    }
    .submit-exam {
      width: 100%;
      height: 232px;
      margin-top: 10px;
      overflow-y: auto;
      box-shadow: 1px 1px 3px rgb(172, 172, 172);
      li {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px 0;
        background-color: rgb(223, 223, 223);
        border-radius: 10px;
        p {
          float: right;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>