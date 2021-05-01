export function Map() {
  let index = 0;//全局索引
  let timer = {};//定时器
  //获取标签
  let imgA = document.getElementsByClassName('car')[0];
  let leftA = document.getElementsByClassName('left-a')[0];
  let rightA = document.getElementsByClassName('right-a')[0];
  let spot = document.getElementsByClassName('map-spot')[0];
  let carouselmap=document.getElementById('carouselmap')
  //图片数组
  let imgArr = [
    require("@/assets/img/0001.jpeg"),
    require("@/assets/img/0002.jpeg"),
    require("@/assets/img/0003.jpeg"),
    require("@/assets/img/0004.jpeg"),
    require("@/assets/img/0005.jpeg")
  ];
  //循环创建a标签
  for (let i = 0; i < imgArr.length; i++) {
    let a = document.createElement('a')
    a.href = 'javascript:;'
    spot.appendChild(a)
  }
  let allA = spot.children
  allA[index].style.backgroundColor = "rgb(87, 252, 252)";
  //点击小圆点切换图片
  for (let i = 0; i < imgArr.length; i++) {
    allA[i].onclick = function () {
      imgA.src = imgArr[i];
      index = i
      setChinge(index)
      mapChinge()
    }
  };
  //点击左按钮切换
  leftA.onclick=function(){
    index--;
    if(index<0){
      index=4
    }
    imgA.src = imgArr[index];
    setChinge(index)
    mapChinge()
  }
  //右按钮
  rightA.onclick=function(){
    index++;
    if(index>4){
      index=0
    }
    imgA.src = imgArr[index];
    setChinge(index)
    mapChinge()
  }
  //自动切换
  function play(){
    timer=setInterval(function(){
      index++;
      index %= imgArr.length;
      imgA.src = imgArr[index];
      setChinge(index)
      mapChinge()
    },2000)
  }
  play();
  imgA.onmouseout=function(){
    play();
  };
  carouselmap.onmouseover=function(){
    clearInterval(timer)
  }
  //定义一个函数使选中的a标签变色
  function setChinge(num) {
    for (let i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    };
    allA[num].style.backgroundColor = "rgb(87, 252, 252)";
  }
  //定义一个函数使每次切换图片时候增加动画
  function mapChinge() {
    imgA.classList.add("appear");
    setTimeout(function () {
      imgA.classList.remove("appear");
    }, 1000)
  }
}