<template>
  <div class="app-container">
    <h2 style="text-align: center">发布新课程</h2>

    <el-steps
      :active="2"
      process-status="wait"
      align-center
      style="margin-bottom: 40px"
    >
      <el-step title="填写课程基本信息" />
      <el-step title="创建课程大纲" />
      <el-step title="最终发布" />
    </el-steps>

    <div class="chapter-add">
      <el-button type="text" @click="openChapterDialog()">添加章节</el-button>

      <!-- 章节 -->
      <ul class="chanpterList">
        <li class="clearfix" v-for="chapter in chapterVideoList" :key="chapter.id">
          <p class="chapter-p">
            {{ chapter.title }}

            <div class="actsa">
              <el-button type="text" @click="openVideo(chapter.id)"
                >添加小节</el-button
              >
              <el-button type="text" @click="openEditChatper(chapter.id)"
                >编辑</el-button
              >
              <el-button type="text" @click="removeChapter(chapter.id)"
                >删除</el-button
              >
            </div>
          </p>

          <!-- 视频 -->
          <ul class="videoList">
            <li class="clearfix" v-for="video in chapter.children" :key="video.id">
              <p class="video-p">
                {{ video.title }}

                <div class="actsb">
                  <el-button type="text" @click="openEditVideo(video.id)">编辑</el-button>
                  <el-button type="text" @click="removeVideo(video.id)"
                    >删除</el-button
                  >
                </div>
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <!-- 添加和修改章节表单 -->
      <el-dialog title="添加章节" v-model="dialogChapterFormVisible">
        <el-form :model="chapter">
          <el-form-item label="章节标题" label-width="120px">
            <el-input v-model="chapter.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="章节排序" label-width="120px">
            <el-input-number v-model="chapter.sort"></el-input-number>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogChapterFormVisible = false"
              >取 消</el-button
            >
            <el-button type="primary" @click="saveOrUpdate()">确 定</el-button>
          </span>
        </template>
      </el-dialog>

      <!-- 添加和修改课时表单 -->
      <el-dialog v-model="dialogVideoFormVisible" title="添加课时">
        <el-form :model="video">
          <el-form-item label="课时标题" label-width="120px">
            <el-input v-model="video.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="课时排序" label-width="120px">
            <el-input-number v-model="video.sort"></el-input-number>
          </el-form-item>

          <el-form-item label="上传视频" label-width="120px">
            <el-upload
              :on-success="handleVodUploadSuccess"
              :before-remove="beforeVodRemove"
              :on-remove="handleVodRemove"
              :file-list="fileList"
              action="http://localhost:9001/xiyuevod/video/uploadVideo"
              :limit="1"
              class="upload-demo">
              <el-button size="small" type="primary">上传视频</el-button>
              <el-tooltip placement="bottom">
                <template #content>
                  最大支持1G视频上传<br/>
                  支持MP4、MKV、GIF、FIV <br>
                  MPE、VOB、QGG、AVI、FIV <br>
                  等视频格式上传
                </template>
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-upload>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVideoFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveOrUpdateVideo()"
              >确 定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>

    <div class="chapter-step">
      <el-button @click="previous">上一步</el-button>
      <el-button :disabled="saveBtnDisabled" type="primary" @click="next"
        >下一步</el-button
      >
    </div>
  </div>
</template>


<script>
import course from "api/course";
//章节添加删除等等接口
import chapter from "api/chapter";
import { ElMessage } from "element-plus";
//小节视频操作接口
import video from "api/video";

export default {
  name: "chapter",
  data() {
    return {
      fileList: [],
      saveBtnDisabled: false,
      courseId: "", //课程id
      chapterVideoList: [],
      chapter: {
        //封装章节数据
        title: "",
        sort: 0,
      },
      video: {
        title: "",
        sort: 0,
        isFree: 0,
        videoSourceId: "",
        videoOriginalName: "",
      },
      dialogChapterFormVisible: false, //章节弹框
      dialogVideoFormVisible: false, //小节弹框
    };
  },
  created() {
    //获取路由url中的值
    if (this.$route.params && this.$route.params.id) {
      this.courseId = this.$route.params.id;
      //赋值之后调用方法
      this.getChapterVideo();
    }
  },
  methods: {
    //--------------------视频-------------------------------
    handleVodUploadSuccess(response, file, fileList) {
      //上传成功
      this.video.videoSourceId = response.data.videoId;
      this.video.videoOriginalName = file.name;
    },
    handleVodRemove(file, fileList) {
      //确认之后调用这个函数
      video.removeVideo(this.video.videoSourceId).then((response) => {
        ElMessage.success({
          message: "删除成功",
          type: "success",
        });
        this.fileList = [];
        this.video.videoSourceId = "";
        this.video.videoOriginalName = "";
      });
    },
    beforeVodRemove(file, fileList) {
      //删除上传文件的确认框
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // handleUploadExceed() {
    //   //上传之前
    //   //:on-exceed="handleUploadExceed"
    // },
    //------------------------------------------小节操作-------------------
    openVideo(chapterId) {
      //显示弹框
      this.dialogVideoFormVisible = true;
      this.video.chapterId = chapterId;
      this.video.courseId = this.courseId;
      this.video.title = "";
      this.video.sort = 0;
      this.video.videoSourceId = "";
    },
    //添加
    addVideo() {
      video.addVideo(this.video).then((response) => {
        //成功之后显示成功，关闭弹框，进行刷新
        this.dialogVideoFormVisible = false;
        ElMessage.success({
          message: "添加成功",
          type: "success",
        });
        //刷新
        this.getChapterVideo();
      });
    },
    //数据回显
    openEditVideo(videoId) {
      this.dialogVideoFormVisible = true;
      video.getVideo(videoId).then((response) => {
        this.video = response.data.data.video;
      });
    },
    // 修改
    updateVideo() {
      video.updateVideo(this.video).then((response) => {
        //成功之后关闭弹框，提示成功以及刷新页面
        this.dialogVideoFormVisible = false;
        ElMessage.success({
          message: "修改成功",
          type: "success",
        });
        //刷新
        this.getChapterVideo();
      });
    },
    //弹框判断调用修改还是添加
    saveOrUpdateVideo() {
      if (!this.video.id) {
        this.addVideo();
      } else {
        this.updateVideo();
        this.video.id = "";
      }
    },
    //删除
    removeVideo(id) {
      this.$confirm("此操作将删除章节, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          video.deleteVideo(id).then((response) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            //刷新
            this.getChapterVideo();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    //------------------------------------------章节------------------------------
    //判断
    saveOrUpdate() {
      //存在id是修改，不存在是添加
      if (!this.chapter.id) {
        this.addChapter();
      } else {
        this.updateChapter();
        this.chapter.id = "";
      }
    },
    //添加章节
    addChapter() {
      //传递课程id
      this.chapter.courseId = this.courseId;
      chapter.addChapter(this.chapter).then((response) => {
        //成功之后关闭弹框，提示成功以及刷新页面
        this.dialogChapterFormVisible = false;
        ElMessage.success({
          message: "添加成功",
          type: "success",
        });
        //刷新
        this.getChapterVideo();
      });
    },
    //编辑章节，数据回显
    openEditChatper(chapterId) {
      this.dialogChapterFormVisible = true;
      chapter.getChapter(chapterId).then((response) => {
        this.chapter = response.data.data.chapter;
      });
    },
    //修改章节
    updateChapter() {
      chapter.updateChapter(this.chapter).then((response) => {
        //成功之后关闭弹框，提示成功以及刷新页面
        this.dialogChapterFormVisible = false;
        ElMessage.success({
          message: "修改成功",
          type: "success",
        });
        //刷新
        this.getChapterVideo();
      });
    },
    // 删除章节
    removeChapter(chapterId) {
      this.$confirm("此操作将删除章节, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          chapter.deleteChapter(chapterId).then((response) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            //刷新
            this.getChapterVideo();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //弹出添加章节页面
    openChapterDialog() {
      //弹框
      this.dialogChapterFormVisible = true;
      //表单数据清空
      this.chapter.title = "";
      this.chapter.sort = 0;
    },
    //获取章节与小结
    getChapterVideo() {
      course.getAllChapterVideo(this.courseId).then((response) => {
        this.chapterVideoList = response.data.data.allChapterVideo;
      });
    },
    //上一步
    previous() {
      this.$router.push({
        path: "/teachercenter/manage/info/" + this.courseId,
      });
    },
    next() {
      //跳转到第二步
      this.$router.push({
        path: "/teachercenter/manage/publish/" + this.courseId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  .chapter-add {
    padding: 0 20px;
    height: 320px;
    overflow-y: auto;
    box-shadow: 2px 2px 2px rgb(179, 179, 179);
    .chanpterList {
      width: 750px;
      .chapter-p {
        font-size: 14px;
        margin: 10px 0;
        padding-left: 10px;
        height: 40px;
        line-height: 40px;
        width: 680px;
        border: 1px solid #ddd;
        border-radius: 10px;
        .actsa {
          margin-right: 20px;
          float: right;
          font-size: 14px;
        }
      }
    }
    .videoList {
      padding-left: 30px;
      width: 665px;
      .video-p {
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding-left: 10px;
        margin: 10px 0;
        padding-right: 10px;
        .actsb {
          float: right;
          font-size: 12px;
          .el-button {
            height: 30px;
          }
        }
      }
    }
  }
  .chapter-step {
    margin-top: 10px;
    margin-left: 300px;
  }
}
</style>