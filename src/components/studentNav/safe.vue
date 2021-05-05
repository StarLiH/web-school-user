<template>
  <div id="stu-safe">
    <p class="mm">安全</p>
    <p class="stu-safe-line"></p>
  </div>
</template>


<script>
export default {
  name:'stusafe'
}
</script>

<style lang="scss" scoped>
  #stu-safe{
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
    .stu-safe-line{
       height: 1px;
       background-color: rgb(214, 213, 213);
     }
  }
</style>