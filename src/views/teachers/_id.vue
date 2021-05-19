<template>
  <div id="top-bar">
    <div class="teacher-message clearfix">
      <div class="tea-head">
        <img :src="oneTeacher.headportrait" alt="" />
      </div>
      <div class="teacher-info">
        <p>教师名字：{{ oneTeacher.name }}</p>
        <p class="intro">教师简介：{{ oneTeacher.intro }}</p>
        <p>教师等级：{{ oneTeacher.career }}</p>
        <p>教师年龄：{{ oneTeacher.age }}</p>
        <p>教师性别：{{ oneTeacher.sex === 0 ? "男" : "女" }}</p>
        <p>联系方式：{{ oneTeacher.phonenumber }}</p>
        <p>
          <el-upload
            class="upload-demo"
            action="http://localhost:9001/xiyueoss/fileoss"
            multiple
            :limit="1"
            :show-file-list="false"
            :on-success="addMyExam"
          >
            <el-button size="small" type="primary">提交作业</el-button>
          </el-upload>
        </p>
      </div>
    </div>
    <ul class="one-course clearfix">
      <li v-for="(courses, index) in oneCourse" :key="courses.id">
        <div class="course-cover">
          <a :href="'/courses/' + courses.id" target="_blank"
            ><img :src="courses.cover" alt="课程封面"
          /></a>
        </div>
        <a :href="'/courses/' + courses.id" target="_blank">{{
          courses.title
        }}</a>
        <p>总课时数：{{ courses.lessonNum }}</p>
      </li>
    </ul>
    <ul class="my-exam">
      <p style="font-size: 16px; padding-left: 10px">上传的资源</p>
      <li v-if="myExam.length == 0">没有数据</li>
      <li class="exam-li" v-for="(exam, index) in myExam" :id="index">
        <span>资源名称：{{ exam.title }}</span>
        <p class="dow">
          <!-- :href="exam.examUrl" -->
          <a :href="exam.examUrl">下载资源</a>
        </p>
      </li>
    </ul>
  </div>
</template>


<script>
import show from "api/show";
import { ElMessage } from "element-plus";
import exam from "api/exam";
import cookie from "js-cookie";
export default {
  name: "teachersId",
  data() {
    return {
      oneTeacher: "",
      oneCourse: "",
      myExam: [],
      index: 0,
      addExam: {
        title: "",
        teacherId: "",
        studentId: "",
        studentName: "",
        examUrl: "",
        isUpdate: 0,
      },
    };
  },
  created() {
    this.getOneTeacher();
    this.getMyExam();
  },
  methods: {
    getOneTeacher() {
      show.getOneTeacher(this.$route.params.id).then((response) => {
        //赋值教师数据
        this.oneTeacher = response.data.data.teacher;
        this.oneCourse = response.data.data.courseList;
        //console.log(this.oneCourse);
      });
    },
    //查询资源
    getMyExam() {
      exam.getMyExam(this.$route.params.id).then((response) => {
        this.myExam = response.data.data.myList;
        //console.log(this.myExam)
      });
    },
    //加入资源
    addMyExam(file, fileList) {
      //console.log(fileList)
      let user = JSON.parse(cookie.get("user_info"));
      this.addExam.title = fileList.name;
      this.addExam.teacherId = this.$route.params.id;
      this.addExam.studentId = user.id;
      this.addExam.studentName = user.nickname;
      this.addExam.examUrl = file.data.url;
      //console.log(this.addExam.studentId)
      exam.submitMyExam(this.addExam).then((response) => {
        ElMessage.success({
          message: "添加成功",
          type: "success",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#top-bar {
  background-color: rgb(255, 255, 255);
  .teacher-message {
    div {
      float: left;
    }
    .tea-head {
      margin: 10px;
      margin-left: 30%;
      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        box-shadow: 1px 1px 3px rgb(139, 139, 139);
      }
    }
    .teacher-info {
      margin-top: 50px;
      margin-left: 10px;
      p {
        margin: 10px 20px;
      }
      .intro {
        width: 300px;
      }
    }
  }
  .one-course {
    height: 500px;
    margin: 10px 20px;
    margin-top: 100px;
    margin-bottom: 0;
    overflow: auto;
    img {
      height: 200px;
      width: 358px;
    }
    li {
      float: left;
      margin-left: 30px;
      a {
        color: rgb(68, 68, 68);
      }
      a:hover {
        color: rgb(85, 163, 252);
      }
    }
  }
  .my-exam {
    width: 1000px;
    height: 400px;
    margin-left: 50px;
    overflow-y: auto;
    li {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      padding-right: 10px;
      margin: 10px 0;
      background-color: rgb(223, 223, 223);
      border-radius: 10px;
    }
    .dow {
      float: right;
    }
  }
}
</style>