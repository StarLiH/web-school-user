<template>
  <div id="stu-exam">
    <p class="mm">我的试题</p>
    <p class="stu-msg-line"></p>
    <div class="show-exam">
      <ul class="my-exam">
        <li v-if="myExam.length == 0">没有数据</li>
        <li v-for="(exam, index) in myExam">
          标题：{{ exam.title }}
          <p>评阅情况：{{exam.isUpdate === 0 ? "没有评阅":"已经评阅"}}</p>
          <p v-if="exam.isUpdate != 0"><a href="">下载文件</a></p>
        </li>
      </ul>
      <button @click="aa()">测试</button>
    </div>
  </div>
</template>


<script>
import cookie from "js-cookie";
import exam from "api/exam";
export default {
  name: "stuexam",
  data() {
    return {
      myExam: [],
    };
  },
  created() {
    this.getMySubmit();
  },
  methods: {
    //查询我的试题
    getMySubmit() {
      let user = JSON.parse(cookie.get("user_info"));
      exam.getMySubmit(user.id).then((response) => {
        this.myExam = response.data.data.mySubmit;
      });
    },
    aa(){
      console.log(this.myExam[0])
    }
  },
};
</script>

<style lang="scss" scoped>
#stu-exam {
  position: absolute;
  top: 20px;
  left: 390px;
  border: 1px solid rgb(214, 213, 213);
  border-top: none;
  width: 800px;
  height: 551px;
  box-shadow: 4px 3px 6px rgb(167, 165, 165);
  background-color: rgb(255, 255, 255);
  .mm {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }
  .stu-msg-line {
    height: 1px;
    background-color: rgb(214, 213, 213);
  }
  .show-exam {
    .my-exam {
      width: 100%;
      height: 500px;
      overflow-y: auto;
      box-shadow: 1px 1px 3px rgb(172, 172, 172);
      li {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px 0;
        background-color: rgb(223, 223, 223);
        border-radius: 10px;
        p{
          margin: 0 10px;
          float: right;
        }
      }
    }
  }
}
</style>