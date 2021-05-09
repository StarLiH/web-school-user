<template>
  <div id="course-info">
    <el-steps :active="1" finish-status="success">
      <el-step title="课程信息填写"></el-step>
      <el-step title="创建章节"></el-step>
      <el-step title="确认"></el-step>
    </el-steps>

    <el-form label-width="120px">
      <div class="course-message-form">
        <el-form-item label="课程标题">
          <el-input
            v-model="courseInfo.title"
            placeholder=" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"
          />
        </el-form-item>

        <!-- 所属分类 TODO -->
        <el-form-item label="课程分类">
          <el-select
            v-model="courseInfo.subjectParentId"
            placeholder="一级分类"
            @change="subjectLevelOneChanged"
          >
            <el-option
              v-for="subject in subjectOneList"
              :key="subject.id"
              :label="subject.title"
              :value="subject.id"
            />
          </el-select>

          <!-- 二级分类 -->
          <el-select v-model="courseInfo.subjectId" placeholder="二级分类">
            <el-option
              v-for="subject in subjectTwoList"
              :key="subject.id"
              :label="subject.title"
              :value="subject.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="总课时">
          <el-input-number
            :min="0"
            v-model="courseInfo.lessonNum"
            controls-position="right"
            placeholder="请填写课程的总课时数"
          />
        </el-form-item>

        <!-- 课程简介 TODO -->
        <el-form-item label="课程简介">
          <el-input v-model="courseInfo.description" placeholder=" " />
        </el-form-item>

        <!-- 课程封面-->
        <el-form-item label="课程封面">
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            action="http://localhost:9001/xiyueoss/fileoss"
            class="avatar-uploader"
          >
            <img :src="courseInfo.cover" />
          </el-upload>
        </el-form-item>

        <!-- <el-form-item label="课程价格">
        <el-input-number
          :min="0"
          v-model="courseInfo.price"
          controls-position="right"
          placeholder="免费课程请设置为0元"
        />
        元
      </el-form-item> -->
      </div>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate"
          >保存并下一步</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import course from "api/course";
import cookie from "js-cookie";
import { ElMessage } from "element-plus";
export default {
  name: "info",
  data() {
    return {
      saveBtnDisabled: false,
      courseInfo: {
        title: "",
        subjectId: "", //二级分类id
        subjectParentId: "", //一级分类id
        teacherId: "",
        lessonNum: 0,
        description: "",
        cover: require("@/assets/img/0001.jpg"),
        price: 0,
      },
      courseId: "",
      subjectOneList: [], //一级分类
      subjectTwoList: [], //二级分类
    };
  },
  created() {
    //回显课程
    if (this.$route.params && this.$route.params.id) {
      this.courseId = this.$route.params.id;
      //赋值之后调用方法
      this.getInfo();
    } else {
      this.getOneSubject();
    }
  },
  methods: {
    //数据回显
    getInfo() {
      course.getChouseInfoId(this.courseId).then((response) => {
        this.courseInfo = response.data.data.courseInfoVo;
        //数据回显二级分类显示问题解决
        // 回显再去查询课程数据
        course.getSubjectList().then((response) => {
          this.subjectOneList = response.data.data.list;
          //遍历数组获取
          for (let i = 0; i < this.subjectOneList.length; i++) {
            let oneSubject = this.subjectOneList[i];
            if (this.courseInfo.subjectParentId == oneSubject.id) {
              this.subjectTwoList = oneSubject.children;
            }
          }
        });
      });
    },
    //查询一级与二级分类
    getOneSubject() {
      course.getSubjectList().then((response) => {
        this.subjectOneList = response.data.data.list;
      });
    },
    //查询二级分类
    subjectLevelOneChanged(value) {
      //遍历出一级里面的对应二级
      //console.log(this.subjectOneList.length)
      for (let i = 0; i < this.subjectOneList.length; i++) {
        let oneSubject = this.subjectOneList[i];
        if (value == oneSubject.id) {
          this.subjectTwoList = oneSubject.children;
        }
      }
      this.courseInfo.subjectId = "";
    },
    //定义添加与修改的方法
    addSubject() {
      if (
        this.courseInfo.title == "" ||
        this.courseInfo.subjectId == "" ||
        this.courseInfo.subjectParentId == ""
      ) {
        ElMessage.error("信息不能为空");
      } else {
        course.addCourseInfo(this.courseInfo).then((Response) => {
          //成功
          ElMessage.success({
            message: "添加成功",
            type: "success",
          });
          this.$router.push({
            path:
              "/teachercenter/manage/chapter/" + Response.data.data.courseId,
          });
        });
      }
    },
    //修改
    updateSubject() {
      course.updateChouseInfoId(this.courseInfo)
      .then((response) => {
        //成功
        ElMessage.success({
          message: "修改成功",
          type: "success",
        });
        this.$router.push({
          path: "/teachercenter/manage/chapter/" + this.courseId,
        });
      });
    },
    //判断当前是修改还是添加
    saveOrUpdate() {
      let teacherMsg = cookie.get("user_info");
      //整个是一个字符串，需要转换为对象
      let teacherId = JSON.parse(teacherMsg);
      this.courseInfo.teacherId = teacherId.id;
      //console.log(teacherId)
      if (!this.courseInfo.id) {
        this.addSubject();
      } else {
        this.updateSubject();
      }
    },
    //上传封面
    handleAvatarSuccess(res, file) {
      this.courseInfo.cover = res.data.url;
    },
    //上传之前调用的方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        ElMessage.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        ElMessage.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
#course-info {
  padding: 20px;
  .el-form {
    .course-message-form {
      height: 350px;
      overflow-y: auto;
      .el-form-item {
        img {
          height: 100px;
        }
      }
    }
  }
}
</style>