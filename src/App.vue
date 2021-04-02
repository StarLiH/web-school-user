<template>
  <div>
    <div id="nav">
      <home></home>
    </div>
    <router-view/>
  </div>
  
</template>

<script>
import Home from 'views/HomePage/Home.vue'
export default {
  name:'App',
  components: {
    Home
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

// #nav {
//   width: 500px;
//   @extend %clearfix;
//   background-color: #42b983;

//   .box{
//     width: 100px;
//     height: 100px;
//     margin: 0;
//     float: left;
//     background-color: aqua;
//   }

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
