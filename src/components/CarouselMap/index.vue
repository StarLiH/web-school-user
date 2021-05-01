<template>
  <div id="carouselmap">
    <a class="left-a" href="javascript:;"><i class="el-icon-arrow-left"></i></a>
    <a class="right-a" href="javascript:;"><i class="el-icon-arrow-right"></i></a>
    <img class="car" src="@/assets/img/0001.jpeg" alt="轮播图" />
    <div class="map-spot">
      <!-- 动态创建a -->
    </div>
  </div>
</template>

<script>
import { Map } from "./map.js";
export default {
  name: "CarouselMap",
  data() {
    return {
      Map,
    };
  },
  mounted() {
    this.Map();
  },
};
</script>

<style lang="scss">
#carouselmap {
  margin-top: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
    color: rgb(255, 255, 255);
  }
  a:hover {
    color: rgb(6, 178, 247);
  }
  .left-a {
    font-size: 50px;
    position: absolute;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
  }
  .right-a {
    position: absolute;
    z-index: 100;
    font-size: 50px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .map-spot {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    a {
      float: left;
      margin: 0 10px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgb(226, 226, 226);
    }
    a:hover {
      background-color: rgb(87, 252, 252);
    }
  }
  .appear {
    animation: moveA 1s 0s 1;
  }
  @keyframes moveA {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>