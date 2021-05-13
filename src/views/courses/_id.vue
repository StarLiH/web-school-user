<template>
  <div id="top-bar">
    <div class="course-item">
      <p class="item-sub">
        当前课程分类：
        {{ courseWebVo.subjectLevelOne }}
        \
        {{ courseWebVo.subjectLevelTwo }}
      </p>
      <div class="course-cover clearfix">
        <div>
          <img :src="courseWebVo.cover" :alt="courseWebVo.title" />
        </div>
        <div class="subject-msg clearfix">
          <ul class="sub-top">
            <li class="sub-top-li">
              <p>
                课时 <br />
                {{ courseWebVo.lessonNum }}
              </p>
            </li>
            <p class="line"></p>
            <li class="sub-top-li">
              <p>
                浏览数
                <br />
                {{ courseWebVo.viewCount }}
              </p>
            </li>
          </ul>
          <ul class="sub-tit">
            <li class="sub-tit-li">{{ courseWebVo.title }}</li>
            <p class="line"></p>
            <li class="sub-tit-li tit-li">
              <a :href="'/teachers/' + courseWebVo.teacherId" title="教师">
                教师：{{ courseWebVo.teacherName }}
              </a>
            </li>
            <li class="sub-tit-li tit-li">
              <a title="收藏" href="javascript:;" @click="myCollection()">
                <i :class="icon" />
                收藏
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="course-info clearfix">
      课程介绍：{{ courseWebVo.description }}
    </div>
    <div class="course-subject">
      <p style="font-size: 20px; margin-bottom: 10px">章节目录</p>
      <p class="line"></p>
      <ul class="course-ul">
        <!-- 文件目录 -->
        <li v-for="chapter in chapterVoList" :key="chapter.id">
          <div class="subjec-tit">
            {{ chapter.title }}
          </div>
          <div
            class="subject-vod"
            v-for="video in chapter.children"
            :key="video.id"
          >
            <a :href="'/player/' + video.videoSourceId" target="_blank">
              {{ video.title }}
            </a>
            <p>
              立即播放
              <a :href="'/player/' + video.videoSourceId" target="_blank">
                <i class="el-icon-caret-right" />
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import show from "api/show";
import cookie from "js-cookie";
import collection from "api/collection";
import { ElMessage } from "element-plus";
export default {
  name: "courses",
  data() {
    return {
      icon: "el-icon-star-off",
      courseWebVo: "",
      chapterVoList: [],
      logininfo: "",
      collect: {
        userId: "",
        teacherId:'',
        courseId: "",
        courseTitle: "",
        cover:'',
        teacherName:''
      },
    };
  },
  created() {
    //调用
    this.getOneCourse();
  },
  methods: {
    getOneCourse() {
      show.getCourseMessage(this.$route.params.id).then((response) => {
        //成功之后赋值
        this.courseWebVo = response.data.data.courseWebVo;
        this.chapterVoList = response.data.data.chapterVoList;
        //console.log(this.chapterVoList);
        let user = cookie.get("user_info");
        this.logininfo = JSON.parse(user);
        collection.getCollection(this.logininfo.id).then((response) => {
          //console.log(response.data.data.list.length === 0);
          let list = response.data.data.list;
          if (list.length === 0) {
            this.icon = "el-icon-star-off";
            //console.log("el-icon-star-off");
          } else {
            for (let i = 0; i < list.length; i++) {
              if (this.courseWebVo.id === list[i].courseId) {
                this.icon = "el-icon-star-on";
              }
            }
          }
        });
      });
    },
    //点击收藏或者取消收藏
    myCollection() {
      let user = cookie.get("user_info");
      this.logininfo = JSON.parse(user);
      //console.log(this.icon === 'el-icon-star-off')
      if(this.icon === 'el-icon-star-off'){
        this.offCollection()
      }else{
        this.onCollection()
      }
    },
    //收藏
    offCollection() {
      //console.log(this.courseWebVo.title)
      this.collect.userId = this.logininfo.id;
      this.collect.teacherId = this.courseWebVo.teacherId
      this.collect.courseId = this.courseWebVo.id;
      this.collect.courseTitle = this.courseWebVo.title;
      this.collect.cover = this.courseWebVo.cover;
      this.collect.teacherName = this.courseWebVo.teacherName;
      collection.addCollection(this.collect).then((response) => {
        this.icon = "el-icon-star-on";
        ElMessage.success({
          message: "收藏成功",
          type: "success",
        });
      });
    },
    //取消收藏
    onCollection() {
      collection
        .removeCollection(this.logininfo.id, this.courseWebVo.id)
        .then((response) => {
          this.icon = "el-icon-star-off";
          ElMessage.success({
            message: "取消成功",
            type: "success",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#top-bar {
  height: 1400px;
  background-color: rgb(253, 252, 252);
  overflow: hidden;
  .line {
    height: 1px;
    background-color: rgb(158, 158, 158);
  }
  .course-item {
    margin-top: 10px;
    margin-left: 150px;
    .item-sub {
      font-size: 24px;
    }
    .course-cover {
      margin-top: 10px;
      img {
        width: 700px;
        height: 400px;
        vertical-align: bottom;
      }
      div {
        float: left;
        box-shadow: -1px 1px 3px rgb(146, 146, 146);
      }
      .subject-msg {
        width: 300px;
        height: 400px;
        box-shadow: 1px 1px 3px rgb(146, 146, 146);
        overflow: hidden;
        ul {
          float: left;
        }
        .sub-top {
          width: 80px;
          height: 400px;
          .sub-top-li {
            height: 200px;
            background-color: rgb(80, 220, 255);
            position: relative;
            p {
              width: 50px;
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .sub-tit {
          width: 200px;
          height: 380px;
          padding: 10px;
          background-color: rgb(252, 193, 85);
          .sub-tit-li {
            font-size: 20px;
            margin-bottom: 10px;
          }
          .tit-li {
            margin-top: 30px;
          }
        }
      }
    }
  }
  .course-info {
    margin-top: 10px;
    margin-left: 150px;
    width: 960px;
    height: 150px;
    background-color: aqua;
    box-shadow: 1px 1px 3px rgb(146, 146, 146);
    padding: 20px;
  }
  .course-subject {
    width: 1000px;
    margin-left: 150px;
    margin-top: 10px;
    .course-ul {
      margin-top: 10px;
      li {
        .subjec-tit {
          height: 50px;
          line-height: 50px;
          box-shadow: 1px 1px 2px rgb(168, 166, 166);
          border-radius: 10px;
          padding-left: 20px;
        }
        .subject-vod {
          width: 830px;
          height: 50px;
          margin-left: 100px;
          margin-top: 10px;
          line-height: 50px;
          box-shadow: 1px 1px 2px rgb(168, 166, 166);
          border-radius: 10px;
          padding-left: 20px;
          padding-right: 50px;
          p {
            float: right;
            a {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>