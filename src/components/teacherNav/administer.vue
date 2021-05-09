<template>
  <div id="tea-coll">
    <p class="mm">课程管理</p>
    <p class="tea-msg-line"></p>
    <div class="course-list">
      <el-table :data="myCourse" border style="width: 100%">
        <el-table-column prop="title" label="课程名称" width="120">
        </el-table-column>
        <el-table-column prop="lessonNum" label="课时数量" width="120">
        </el-table-column>
        <el-table-column prop="status" label="发布状态" width="120">
        </el-table-column>
        <el-table-column prop="gmtCreate" label="上传时间" width="200">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="removeCourse(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
import course from "api/course";
import cookie from "js-cookie";
import { ElMessage } from "element-plus";
export default {
  name: "administer",
  data() {
    return {
      list: "", //查询之后接口返回集合
      teacherInfo: "",
      myCourse: [],
      courseId: "",
    };
  },
  created() {
    //调用
    this.getCourseList();
  },
  methods: {
    //讲师列表的方法
    getCourseList() {
      let myUserInfo = cookie.get("user_info");
      this.teacherInfo = JSON.parse(myUserInfo);
      course.getCourseByTeacher().then((response) => {
        //请求成功
        this.list = response.data.data.list;
        //console.log(this.list.length)
        //取出课程
        for (let i = 0; i < this.list.length; i++) {
          let teacherId = this.list[i].teacherId;
          if (teacherId == this.teacherInfo.id) {
            this.myCourse.push(this.list[i]);
          }
        }
      });
    },
    //点击编辑跳转发布页面作数据回显
    handleClick(row) {
      //console.log(row.id);
      this.$router.push({
        path: "/teachercenter/manage/info/" + row.id,
      });
    },
    //删除整个课程
    removeCourse(row) {
      //console.log(row)
      this.$confirm("此操作将删除章节, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          course.removeMyCourse(row.id).then((response) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            //刷新
            this.myCourse=[]
            this.getCourseList();
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
  .course-list {
    width: 700px;
    height: 300px;
    overflow: auto;
    margin: 30px;
  }
}
</style>