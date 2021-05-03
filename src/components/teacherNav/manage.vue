<template>
  <div id="tea-man">
    <p class="mm">课程管理</p>
    <p class="tea-msg-line"></p>
  </div>
</template>


<script>
export default {
  name:'manage'
}
</script>

<style lang="scss" scoped>
  #tea-man{
    position: absolute;
    top: 20px;
    left: 390px;
    border: 1px solid rgb(214, 213, 213);
    border-top: none;
    width: 800px;
    height: 551px;
    box-shadow: 4px 3px 6px rgb(167, 165, 165);
    background-color: rgb(255, 255, 255);
    .mm{
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
    }
    .tea-msg-line{
       height: 1px;
       background-color: rgb(214, 213, 213);
     }
  }
</style>