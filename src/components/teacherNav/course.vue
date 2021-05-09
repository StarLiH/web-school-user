<template>
  <div id="tea-course">
    <p class="mm">大纲列表</p>
    <p class="tea-msg-line"></p>
    <div class="app-container">
      <el-form label-width="120px">
        <el-form-item label="信息描述">
          <el-tag>
            <i class="el-icon-download" />
            <a href="01.xlsx" target="_blank" download="01.xlsx"
              >点击下载模版</a
            >
          </el-tag>
        </el-form-item>

        <el-form-item label="选择Excel">
          <el-upload
            ref="upload"
            :auto-upload="false"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :disabled="importBtnDisabled"
            :limit="1"
            :action="'http://localhost:9001/xiyuecourse/subject/addSubject'"
            name="file"
            accept=".xlsx"
          >
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
            <el-button
              :loading="loading"
              style="margin-left: 10px"
              size="small"
              type="success"
              @click="submitUpload"
              >上传到服务器</el-button
            >
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <div class="tea-course-list">
      <el-input
        v-model="filterText"
        placeholder="Filter keyword"
        style="margin-bottom: 30px"
      />

      <el-tree
        ref="tree2"
        :data="data2"
        :props="defaultProps"
        :filter-node-method="filterNode"
        class="filter-tree"
        default-expand-all
      />
    </div>
  </div>
</template>


<script>
import subject from "api/course";
export default {
  name: "course",
  data() {
    return {
      importBtnDisabled: false, // 按钮是否禁用,
      loading: false,
      filterText: "",
      data2: [], //返回所有分类数据
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  created() {
    this.getAllSubjectList();
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    },
  },
  methods: {
    //点击按钮上传文件到接口里面
    submitUpload() {
      this.importBtnDisabled = true;
      this.loading = true;
      // js: document.getElementById("upload").submit()
      this.$refs.upload.submit();
    },
    //上传成功
    fileUploadSuccess(response) {
      //提示信息
      this.loading = false;
      this.$message({
        type: "success",
        message: "添加课程分类成功",
      });
      //跳转课程分类列表
      //路由跳转
      //this.$router.push({ path: "/subject/list" });
    },
    //上传失败
    fileUploadError() {
      this.loading = false;
      this.$message({
        type: "error",
        message: "添加课程分类失败",
      });
    },
    //课程信息列表
    getAllSubjectList() {
      subject.getSubjectList().then((response) => {
        this.data2 = response.data.data.list;
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    },
  },
};
</script>

<style lang="scss" scoped>
#tea-course {
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
  .tea-course-list{
    .filter-tree{
      height: 308px;
      overflow-y: auto;
    }
    
  }
}
</style>