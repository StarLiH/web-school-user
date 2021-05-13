<template>
  <div id="tea-exam">
    <p class="mm">试题发布</p>
    <p class="tea-msg-line"></p>
    <div class="app-container">
      <el-upload
        class="upload-demo"
        action="http://localhost:9001/xiyueoss/fileoss"
        :on-success="updataExam"
        multiple
        :limit="3"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传试题</el-button>
      </el-upload>
    </div>
  </div>
</template>


<script>
export default {
  name: "exam",
  data() {
    return {
      fileList:[],
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
#tea-exam {
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
}
</style>