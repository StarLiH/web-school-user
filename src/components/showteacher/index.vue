<template>
  <div id="show-teacher">
    <h3>名师</h3>
    <p class="tea-line"></p>
    <div class="show-tea">
      <ul class="clearfix">
        <li class="tea-li">
          <a href="#">
            <img
              src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/head_portrait/87878859_p2.jpg?versionId=CAEQDhiBgMDmo5SwyBciIDYzNDQxZDdjYzMzNDRiNjhhN2Y0OGFiNmM4OGEwYmJj"
              alt="头像"
            />
          </a>
          <p class="tea-nam"><a href="#">教师xxx</a></p>
          <p class="tea-line"></p>
          <div class="tea-msg">
            <p>教师级别：高级教师</p>
            <span> 教师介绍：是xxx学院教师，擅长xxxx教学 现在xxx机构教学 </span>
          </div>
        </li>
        <li class="tea-li">
          <a href="#">
            <img
              src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/head_portrait/87878859_p2.jpg?versionId=CAEQDhiBgMDmo5SwyBciIDYzNDQxZDdjYzMzNDRiNjhhN2Y0OGFiNmM4OGEwYmJj"
              alt="头像"
            />
          </a>
          <p class="tea-nam"><a href="#">教师xxx</a></p>
          <p class="tea-line"></p>
          <div class="tea-msg">
            <p>教师级别：高级教师</p>
            <span> 教师介绍：是xxx学院教师，擅长xxxx教学 现在xxx机构教学 </span>
          </div>
        </li>
        <li class="tea-li">
          <a href="#">
            <img
              src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/head_portrait/87878859_p2.jpg?versionId=CAEQDhiBgMDmo5SwyBciIDYzNDQxZDdjYzMzNDRiNjhhN2Y0OGFiNmM4OGEwYmJj"
              alt="头像"
            />
          </a>
          <p class="tea-nam"><a href="#">教师xxx</a></p>
          <p class="tea-line"></p>
          <div class="tea-msg">
            <p>教师级别：高级教师</p>
            <span> 教师介绍：是xxx学院教师，擅长xxxx教学 现在xxx机构教学 </span>
          </div>
        </li>
        <li class="tea-li">
          <a href="#">
            <img
              src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/head_portrait/87878859_p2.jpg?versionId=CAEQDhiBgMDmo5SwyBciIDYzNDQxZDdjYzMzNDRiNjhhN2Y0OGFiNmM4OGEwYmJj"
              alt="头像"
            />
          </a>
          <p class="tea-nam"><a href="#">教师xxx</a></p>
          <p class="tea-line"></p>
          <div class="tea-msg">
            <p>教师级别：高级教师</p>
            <span> 教师介绍：是xxx学院教师，擅长xxxx教学 现在xxx机构教学 </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "showTeacher",
  components: {},
};
</script>

<style lang="scss" scoped>
#show-teacher {
  position: absolute;
  width: 1200px;
  left: 50%;
  top: 930px;
  transform: translateX(-50%);
  background-color: rgba(253, 251, 251, 0.705);
  h3 {
    font-size: 30px;
    text-align: center;
    color: rgb(124, 124, 124);
  }
  .tea-line {
    height: 2px;
    margin-top: 5px;
    background-color: rgb(165, 164, 164);
  }
  .show-tea {
    .tea-li {
      width: 200px;
      margin: 20px 50px;
      float: left;
      img {
        width: 200px;
        border-radius: 50%;
        vertical-align: bottom;
      }
      .tea-nam {
        margin-top: 5px;
        text-align: center;
        a {
          color: black;
        }
        a:hover {
          color: rgb(77, 160, 255);
        }
      }
      .tea-msg{
        margin-top: 5px;
        padding-left: 5px;
        p{
          font-size: 12px;
          margin-bottom: 5px;
        }
        span{
          font-size: 12px;
        }
      }
    }
    .tea-li:hover{
        animation: 0.5s subanm forwards;
      }
      @keyframes subanm {
        0%{box-shadow: 1px 1px 2px rgb(102, 101, 101);}
        25%{box-shadow: 2px 2px 4px rgb(102, 101, 101);}
        50%{box-shadow: 3px 3px 6px rgb(102, 101, 101);}
        100%{box-shadow: 4px 4px 8px rgb(102, 101, 101);}
      }
  }
}
</style>