<template>
  <div id="login">
    <router-view/>
    <div class="abs"></div>
  </div>
</template>

<script>
export default {
  name:'join',
  components: {
  }
}
</script>

<style lang="scss">
  #login{
    width: 500px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 5px 5px 10px #c4c4c4;
    .abs{
      height: 2px;
      background-color: aqua;
    }
  }
</style>