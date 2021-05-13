<template>
  <div id="top-bar">
    <h1>所有课程</h1>
    <div class="course-itemize">
      <h2>课程分类</h2>
      <p class="line"></p>
      <ul class="subject-parent clearfix">
        <li>科目：</li>
        <li>
          <a title="全部" href="#" @click="remove()">全部</a>
        </li>
        <li v-for="(item, index) in subjectNestedList" :key="index">
          <a :title="item.title" href="#" @click="searchOne(item.id)">{{
            item.title
          }}</a>
        </li>
      </ul>
      <p class="line"></p>
      <ul class="subject clearfix">
        <li v-for="(item, index) in subSubjectList" :key="index">
          <a :title="item.title" href="#" @click="searchTwo(item.id)">{{
            item.title
          }}</a>
        </li>
      </ul>
      <p class="line"></p>
      <ol class="js-tap clearfix">
        <li>排序：</li>
        <li>
          <a title="销量" href="javascript:void(0);" @click="searchBuyCount()"
            >销量
            <span>↓</span>
          </a>
        </li>
        <li>
          <a title="最新" href="javascript:void(0);" @click="searchGmtCreate()"
            >最新
            <span>↓</span>
          </a>
        </li>
      </ol>
    </div>
    <div class="course-page">
      <ul class="show-data clearfix">
        <li
          class="all-course"
          v-for="(course, index) in data.items"
          :key="course.id"
        >
          <div class="course-head">
            <a
              :href="'/courses/' + course.id"
              :title="course.title"
              target="_blank"
            >
              <img :src="course.cover" alt="头像" />
            </a>
          </div>
          <div class="course-name">
            课程名称：
            <a
              :href="'/courses/' + course.id"
              :title="course.title"
              target="_blank"
              >{{ course.title }}</a
            >
          </div>
          <div class="course-mess">
            <p class="c-999 f-fA">
              课时总数： {{ course.lessonNum }}
              <br />
              浏览数量： {{ course.buyCount }}
            </p>
          </div>
        </li>
      </ul>
    </div>
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
        ><i class="el-icon-arrow-left"
      /></a>

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
        ><i class="el-icon-arrow-right"
      /></a>

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
import course from "api/course";
export default {
  name: "courses",
  data() {
    return {
      page: 1, //当前页
      data: {}, //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表

      searchObj: {}, // 查询表单对象
      buyCountSort: "",
      gmtCreateSort: "",
      priceSort: "",
    };
  },
  created() {
    //课程查询
    this.getAllCoursePage();
    //分类查询
    this.getAllSubjectList();
  },
  methods: {
    //查询课程分类
    getAllSubjectList() {
      course.getSubjectList().then((response) => {
        //调用接口返回数据
        this.subjectNestedList = response.data.data.list;
        //console.log(this.subjectNestedList)
      });
    },
    remove() {
      this.subSubjectList = [];
    },
    //查询对应的二级分类
    searchOne(subjectParentId) {
      this.searchObj.subjectId = "";
      this.subSubjectList = [];

      //把一级分类点击id值，赋值给searchObj
      this.searchObj.subjectParentId = subjectParentId;
      //点击某个一级分类进行条件查询
      this.gotoPage(1);

      //拿着点击一级分类id 和 所有一级分类id进行比较，
      //如果id相同，从一级分类里面获取对应的二级分类
      for (let i = 0; i < this.subjectNestedList.length; i++) {
        //获取每个一级分类
        var oneSubject = this.subjectNestedList[i];
        //比较id是否相同
        if (subjectParentId == oneSubject.id) {
          //从一级分类里面获取对应的二级分类
          this.subSubjectList = oneSubject.children;
        }
      }
    },
    //点击二级分类查询
    searchTwo(subjectId) {
      //把二级分类点击id值，赋值给searchObj
      this.searchObj.subjectId = subjectId;
      //点击某个二级分类进行条件查询
      this.gotoPage(1);
    },
    //根据销量排序
    searchBuyCount() {
      //设置对应变量值，为了样式生效
      this.buyCountSort = "1";
      this.gmtCreateSort = "";
      this.priceSort = "";

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort;
      this.searchObj.gmtCreateSort = this.gmtCreateSort;
      this.searchObj.priceSort = this.priceSort;

      //调用方法查询
      this.gotoPage(1);
    },
    //最新排序
    searchGmtCreate() {
      //设置对应变量值，为了样式生效
      this.buyCountSort = "";
      this.gmtCreateSort = "1";
      this.priceSort = "";

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort;
      this.searchObj.gmtCreateSort = this.gmtCreateSort;
      this.searchObj.priceSort = this.priceSort;

      //调用方法查询
      this.gotoPage(1);
    },
    //查询课程分页
    getAllCoursePage() {
      show.getCoursePages(1, 8, this.searchObj).then((response) => {
        //课程分类数据
        this.data = response.data.data;
        console.log(this.data);
      });
    },
    //分页切换
    gotoPage(page) {
      //传入当前页
      show.getCoursePages(page, 8, this.searchObj).then((response) => {
        //课程分类数据
        this.data = response.data.data;
        //console.log(this.data)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#top-bar {
  height: 1400px;
  background-color: rgb(248, 246, 246);
  position: relative;
  overflow: hidden;
  h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    color: rgb(25, 208, 253);
  }
  .course-itemize {
    margin-left: 80px;
    margin-right: 80px;
    .line {
      height: 1px;
      margin: 15px 0;
      background-color: rgb(192, 192, 192);
    }
    h2 {
      font-size: 20px;
      color: rgb(136, 134, 134);
      padding-left: 10px;
    }
    .subject-parent {
      li {
        color: rgb(87, 86, 86);
        float: left;
        margin: 0 10px;
      }
    }
    .subject {
      padding-left: 70px;
      li {
        color: rgb(87, 86, 86);
        float: left;
        margin: 0 10px;
      }
    }
    .js-tap{
      padding: 0;
      li{
        float: left;
        margin: 0 10px;
      }
    }
    a {
      color: rgb(87, 86, 86);
    }
    a:hover {
      color: rgb(15, 167, 255);
    }
  }
  .course-page {
    margin: 0 100px;
    width: 1200px;
    a {
      color: rgb(85, 85, 85);
    }
    a:hover {
      color: rgb(22, 170, 255);
    }
    img {
      height: 150px;
      width: 268px;
    }
    .show-data {
      li {
        margin: 30px 10px;
        float: left;
        box-shadow: 1px 1px 2px rgb(150, 149, 149);
      }
      li:hover {
        box-shadow: 3px 3px 5px rgb(150, 149, 149);
      }
      .all-course{
        .course-name,.course-mess{
          padding-left: 5px;
        }
      }
    }
  }
  .paging {
    height: 50px;
    line-height: 50px;
    box-shadow: 2px 2px 3px rgb(196, 196, 196);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    a {
      color: rgb(85, 85, 85);
      margin: 20px;
    }
    a:hover {
      color: rgb(22, 170, 255);
    }
  }
}
</style>