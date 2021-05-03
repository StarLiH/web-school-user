<template>
  <div id="footer">
    <footer class="clearfix">
      <div class="foot-logo">
        <a href="http://www.hljit.edu.cn/" target="_blank"><img src="../../assets/logo/hljgc.png" alt=""></a>
      </div>
      <ul class="foo">
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;">联系我们</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
      </ul>
      <ul class="foo">
        <li>
          本程序由：电子17-2班李黄涛编写
          <br>
          有问题请联系：18848528696
        </li>
      </ul>
    </footer>
  </div>
</template>


<script>
export default {
  name:'comFooter',
  components:{
  }
}
</script>

<style lang="scss" scoped>
  #footer{
    background-color: rgb(163, 163, 163);
    .foot-logo{
      float: left;
      margin: 5px 150px;
      img{
        border-radius: 50px;
        width: 100px;
      }
    }
    .foo{
      margin: 0 120px;
      float: left;
      li{
        line-height: 40px;
        color: black;
      }
      a{
        color: black;
      }
      a:hover{
        color: rgb(41, 133, 255);
      }
    }
  }
</style>