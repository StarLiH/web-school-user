<template>
  <div id="course-info">
    <h2 style="text-align: center">发布新课程</h2>

    <el-steps
      :active="3"
      process-status="wait"
      align-center
      style="margin-bottom: 40px"
    >
      <el-step title="填写课程基本信息" />
      <el-step title="创建课程大纲" />
      <el-step title="最终发布" />
    </el-steps>

    <div class="ccInfo">
      <img :src="coursePublish.cover" />
      <div class="main">
        <h2>{{ coursePublish.title }}</h2>
        <p class="gray">
          <span>共{{ coursePublish.lessonNum }}课时</span>
        </p>
        <p>
          <span
            >所属分类：<br />
            {{ coursePublish.subjectLevelOne }} —
            {{ coursePublish.subjectLevelTwo }}</span
          >
        </p>
        <p>
          课程讲师：<br />
          {{ coursePublish.teacherName }}
        </p>
      </div>
    </div>

    <el-form label-width="120px">
      <el-form-item>
        <el-button @click="previous">返回修改</el-button>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="publish"
          >发布课程</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import course from "api/course";
import { ElMessage } from "element-plus";
export default {
  name: "publish",
  data() {
    return {
      saveBtnDisabled: false, // 保存按钮是否禁用
      courseId: "",
      coursePublish: {},
    };
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      this.courseId = this.$route.params.id;
      //调用方法回显数据
      this.getCoursePublishInfo();
    }
  },

  methods: {
    //回显数据
    getCoursePublishInfo() {
      course.getCoursePublish(this.courseId).then((response) => {
        this.coursePublish = response.data.data.publishCourse;
        console.log(this.coursePublish);
      });
    },
    previous() {
      console.log("previous");
      this.$router.push({
        path: "/teachercenter/manage/info/" + this.courseId,
      });
    },

    publish() {
      course.publishCourse(this.courseId).then((response) => {
        ElMessage.success({
          message: "发布成功",
          type: "success",
        });
        this.$router.push({ path: "/teachercenter/administer" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#course-info {
  .ccInfo {
    margin-left: 30px;
    margin-bottom: 5px;
    height: 320px;
    width: 765px;
    overflow-y: auto;
    background-color: rgb(228, 227, 227);
    box-shadow: 1px 1px 2px rgb(160, 159, 159);
    img {
      float: left;
      margin-left: 20px;
      height: 300px;
      width: 500px;
      margin-top: 10px;
    }
    .main {
      margin-top: 10px;
      float: left;
      h2 {
        margin: 25px;
        margin-left: 10px;
      }
      p {
        margin: 25px;
        margin-left: 10px;
      }
    }
  }
}
</style>