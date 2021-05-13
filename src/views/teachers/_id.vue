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
      </div>
    </div>
    <ul class="one-course clearfix">
      <li v-for="(courses, index) in oneCourse" :key="courses.id">
        <div class="course-cover">
          <a :href="'/courses/' + courses.id" target="_blank"><img :src="courses.cover" alt="课程封面" /></a>
        </div>
        <a :href="'/courses/' + courses.id" target="_blank">{{ courses.title }}</a>
        <p>总课时数：{{ courses.lessonNum }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import show from "api/show";
export default {
  name: "teachersId",
  data() {
    return {
      oneTeacher: "",
      oneCourse: "",
    };
  },
  created() {
    this.getOneTeacher();
  },
  methods: {
    getOneTeacher() {
      show.getOneTeacher(this.$route.params.id).then((response) => {
        //赋值教师数据
        this.oneTeacher = response.data.data.teacher;
        this.oneCourse = response.data.data.courseList;
        console.log(this.oneCourse);
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
    height: 900px;
    margin: 10px 20px;
    margin-top: 100px;
    margin-bottom: 0;
    overflow: auto;
    img {
      height: 200px;
    }
    li {
      float: left;
      margin-left: 30px;
      a{
        color: rgb(68, 68, 68);
      }
      a:hover{
        color: rgb(85, 163, 252);
      }
    }
  }
}
</style>