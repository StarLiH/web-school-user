<template>
  <div id="tea-coll">
    <p class="mm">我的收藏</p>
    <p class="tea-msg-line"></p>
    <ul class="my-courses">
      <li v-for="(course, index) in myCourse">
        <div class="sub-cover">
          <a
            :href="'/courses/' + course.courseId"
            :title="course.courseTitle"
            target="_blank"
            ><img :src="course.cover" :alt="course.courseTitle"
          /></a>
        </div>
        <div class="sub-msg">
          <p>
            <a
              :href="'/courses/' + course.courseId"
              :title="course.courseTitle"
              target="_blank"
              >课程名称：{{ course.courseTitle }}</a
            >
          </p>
          <p>
            <a
              :href="'/teachers/' + course.teacherId"
              :title="course.teacherName"
              target="_blank"
              >教师名称：{{ course.teacherName }}</a
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import cookie from "js-cookie";
import collection from "api/collection";
export default {
  name: "collect",
  data() {
    return {
      logininfo: "",
      myCourse: [],
    };
  },
  created() {
    this.getMyCourses();
  },
  methods: {
    //查询我的课程
    getMyCourses() {
      let showUser = cookie.get("user_info");
      //整个是一个字符串，需要转换为对象
      this.logininfo = JSON.parse(showUser);
      collection.getCollection(this.logininfo.id).then((response) => {
        this.myCourse = response.data.data.list;
        //console.log(this.myCourse[0].cover)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#tea-coll {
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
  .my-courses {
    width: 760px;
    height: 450px;
    margin: 20px;
    overflow: auto;
    li {
      float: left;
      margin: 10px;
      box-shadow: 1px 1px 2px rgb(175, 175, 175);
    }
    li:hover {
      box-shadow: 3px 3px 5px rgb(175, 175, 175);
    }
    .sub-cover {
      img {
        width: 300px;
        height: 150px;
        vertical-align: bottom;
      }
    }
    .sub-msg {
      padding-left: 10px;
      overflow: hidden;
      background-color: rgb(178, 197, 250);
      p {
        margin: 5px 0;
      }
    }
  }
}
</style>