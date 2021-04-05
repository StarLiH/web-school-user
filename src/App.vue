<template>
  <div id="box">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "./assets/style/base.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
