<template>
  <div id="video-play">
    <top-nav></top-nav>
    <div class="video">
      <div class="prism-player" id="player-con"></div>
    </div>
  </div>
</template>

<script>
import TopNav from "components/TopNav/index";
import video from "api/video";
export default {
  name: "video",
  components: {
    TopNav,
  },
  data() {
    return {
      playAuth: "",
      vid: "",
    };
  },
  created() {
    this.getAuth();
  },
  methods: {
    //获取视频地址
    getAuth() {
      video.getViodeAuth(this.$route.params.vid).then((response) => {
        this.playAuth = response.data.data.playAuth;
        this.vid = this.$route.params.vid;
        this.$nextTick(this.playVod());
      });
    },
    //视频播放器
    playVod() {
      new Aliplayer(
        {
          id: "player-con",
          vid: this.vid, // 视频id
          playauth: this.playAuth, // 播放凭证
          encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
          cover: "http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png",
          width: "100%",
          height: "500px",
          autoplay: false,
          preload: false,
          isLive: false,
          qualitySort: "asc", // 清晰度排序
          mediaType: "video", // 返回音频还是视频
          controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
          useH5Prism: true, // 播放器类型：html5
        },
        (player) => {
          console.log(this.playAuth);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#video-play {
  position: relative;
  height: 700px;
  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 900px;
  }
}
</style>