<template>
  <div id="join">
    <div id="login">
      <router-view />
      <div class="abs"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "join",
  components: {},
};
</script>

<style lang="scss" scoped>
#join {
  width: 1536px;
  height: 791px;
  background: url("../../assets/img/back01.png") no-repeat;
  background-size: 100% 100%;
  #login {
    width: 500px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 5px 5px 10px #c4c4c4;
    background-color: rgba(68, 207, 250, 0.541);
    .abs {
      height: 2px;
      background-color: rgba(6, 114, 255, 0.781);
    }
  }
}
</style>