<template>
  <div id="top-bar">
    <h1>所有教师</h1>
    <div class="no-data" v-if="data.total == 0">
      抱歉，当前没有教师数据
      <i class="el-icon-warning"></i>
    </div>
    <!-- 教师显示 -->
    <ul class="show-data clearfix" v-else>
      <li
        class="all-teacher"
        v-for="(teacher, index) in data.items"
        :key="teacher.id"
      >
        <div class="teacher-head">
          <a
            :href="'/teachers/' + teacher.id"
            :title="teacher.name"
            target="_blank"
          >
            <img :src="teacher.headportrait" alt="头像" />
          </a>
        </div>
        <p class="line"></p>
        <div class="teacher-name">
          教师名称：
          <a
            :href="'/teachers/' + teacher.id"
            :title="teacher.name"
            target="_blank"
            >{{ teacher.name }}</a
          >
        </div>
        <div class="teacher-mess">
          <p class="c-999 f-fA">
            教师简介： {{ teacher.intro }}
            <br />
            等级： {{ teacher.career }}
          </p>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <div class="paging">
      <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
      <a
        v-if="data.hasPrevious"
        href="#"
        title="首页"
        @click.prevent="gotoPage(1)"
        >首页</a
      >

      <a
        :class="{ undisable: !data.hasPrevious }"
        href="#"
        title="前一页"
        @click.prevent="gotoPage(data.current - 1)"
        ><i class="el-icon-arrow-left" /></a>

      <a
        v-for="page in data.pages"
        :key="page"
        :class="{
          current: data.current == page,
          undisable: data.current == page,
        }"
        :title="'第' + page + '页'"
        href="#"
        @click.prevent="gotoPage(page)"
        >{{ page }}</a
      >

      <a
        :class="{ undisable: !data.hasNext }"
        href="#"
        title="后一页"
        @click.prevent="gotoPage(data.current + 1)"
        ><i class="el-icon-arrow-right" /></a>

      <a
        v-if="data.hasNext"
        href="#"
        title="末页"
        @click.prevent="gotoPage(data.pages)"
        >末页</a
      >
    </div>
  </div>
</template>


<script>
import show from "api/show";
export default {
  name: "teachers",
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      show.getTeacherPages(1, 8).then((response) => {
        this.data = response.data.data;
        //console.log(this.data);
      })
    },
    //分页
    gotoPage(page){
      show.getTeacherPages(page, 8).then((response) => {
        this.data = response.data.data;
        //console.log(this.data);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
#top-bar {
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  position: relative;
  h1{
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    color: rgb(25, 208, 253);
  }
  .line {
    height: 1px;
    background-color: rgb(218, 218, 218);
  }
  .no-data {
    height: 1300px;
    line-height: 520px;
    font-size: 30px;
    text-align: center;
  }
  .show-data {
    height: 1220px;
    width: 1300px;
    padding-left: 40px;
    margin-top: 5px;
    .all-teacher {
      background-color: rgb(255, 255, 255);
      box-shadow: 1px 1px 3px rgb(180, 180, 180);
      border-radius: 10px;
      margin: 30px 50px;
      margin-top: 100px;
      float: left;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      a {
        color: rgb(83, 83, 83);
      }
      a:hover {
        color: rgb(22, 170, 255);
      }
      .teacher-name {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
      }
      .teacher-mess {
        padding-left: 10px;
        p {
          width: 200px;
        }
      }
    }
    .all-teacher:hover {
      box-shadow: 2px 2px 5px rgb(180, 180, 180);
    }
  }
  .paging{
    height: 50px;
    line-height: 50px;
    box-shadow: 2px 2px 3px rgb(196, 196, 196);
    border-radius: 10px;
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translateX(-50%);
    a{
      color: rgb(85, 85, 85);
      margin: 20px;
    }
    a:hover {
        color: rgb(22, 170, 255);
      }
  }
}
</style>