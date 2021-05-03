<template>
  <div id="show-subject">
    <h3>热门课程</h3>
    <p class="subject-line"></p>
    <div class="subject">
      <ul class="clearfix">
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
        <li class="sub-li">
          <a href="#">
            <img src="https://lht-100.oss-cn-beijing.aliyuncs.com/my_school/picture/subject/1442295379715.jpg?versionId=CAEQDhiBgIDI4Ju0yRciIDBmOTVmNzc1NTZiNDQ0YzViMzg4MzI5NGFkZGE2ZDkw" alt="课程">
          </a>
          <div class="sub-msg">
            <p>音乐教学</p>
            <span>100人学习</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name:'showSubject',
  components:{
  }
}
</script>

<style lang="scss" scoped>
  #show-subject{
    width: 1200px;
    position: absolute;
    margin-top: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(248, 244, 244, 0.753);
    top: 510px;
    h3{
      text-align: center;
      font-size: 30px;
      color: rgb(124, 124, 124);
    }
    .subject-line{
      height: 2px;
      margin-top: 5px;
      background-color: rgb(158, 161, 161);
    }
    .subject{
       .sub-li{
        float: left;
        margin: 10px 45px;
        img{
          width: 210px;
          vertical-align: bottom;
        }
        .sub-msg{
          border: rgb(182, 181, 181) 1px solid;
          padding-left: 5px;
        }
        p{
          font-size: 18px;
        }
        span{
          font-size: 10px;
        }
      }
      .sub-li:hover{
        animation: 0.5s subanm forwards;
      }
      @keyframes subanm {
        0%{box-shadow: 1px 1px 2px rgb(102, 101, 101);}
        25%{box-shadow: 2px 2px 4px rgb(102, 101, 101);}
        50%{box-shadow: 3px 3px 6px rgb(102, 101, 101);}
        75%{box-shadow: 4px 4px 8px rgb(102, 101, 101);}
        100%{box-shadow: 5px 5px 10px rgb(102, 101, 101);}
      }
    }
  }
</style>