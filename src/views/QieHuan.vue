<template>
<div>

    <van-swipe class="my-swipe" indicator-color="white">
  <van-swipe-item>
    <div>
      

       <div class="ReCi">
      <p>热词</p>
    </div>
        <div class="xin">
        <p class="kuanga"></p>
        <p class="yanse">女总裁</p>
        </div>
        <div class="xin">
        <p class="kuanga"></p>
        <p class="yanse">贴身</p>
        </div>
        <div class="cqi">
        <p class="kuangaa"></p>
        <p class="yanse">宠妻</p>
        </div>
         <div class="cqi">
        <p class="kuangaaa"></p>
        <p class="yanse">农民</p>
        </div>
         <div class="qqq">
        <p class="kuangg"></p>
        <p class="yanse">系统</p>
        </div>
        <div class="ydong">
        <p class="kkuan"></p>
        <p class="yanse">无限</p>
        </div>
        <div>
          <div class="ZhouWei">
          <p>周围的人也在读</p>
          
        </div>
        
          <div class="zuijia">
            
            <img src="../image/zuijianvxu.png">
            <div class="Zwenz">
            <p>最佳女婿</p>
          </div>
          <div class="wenz">
            <p>都市小说</p>
          </div>
          <div class="xshuo">
            <p>陪你倒数</p>
          </div>
          </div>
           <div class="zuijia">
            <img src="../image/douluodalu.png">
            <div class="dluo">
            <p>斗罗大陆IV终极斗罗</p>
          </div>
          <div class="wenz">
            <p>玄幻小说</p>
          </div>
          <div class="xshuo">
            <p>唐家三少</p>
          </div>
          </div>
            <div class="zuijia">
            <div @click="dianji()" id="shabi"><img src="../image/feijianwendao.png"></div>
            <div class="Zwenz">
            <p>飞剑问道</p>
          </div>
          <div class="wenz">
            <p>玄幻小说</p>
          </div>
          <div class="xhongs">
            <p>我吃西红柿</p>
          </div>
          </div>
          <div class="gengduo">
        <p class="kuangaas"></p>
        <p class="yanses">查看更多</p>
        </div>
        </div>
    </div>
         
  </van-swipe-item>
  <van-swipe-item>
    <div class="lishi">
      <p>历史</p>
    </div>
    <div class="shuipingxian">
    <van-divider />
    </div>
    <div class="lishis">
      <p>系统</p>
    </div>
    <div class="shuipingxiana">
    <van-divider />
    </div>
    <div class="lishis">
      <p>宠妻</p>
    </div>
    <div class="shuipingxiana">
    <van-divider />
    </div>
    <div class="lishiss">
      <p>女总裁</p>
    </div>
    <div class="shuipingxiana">
    <van-divider />
    </div>
  </van-swipe-item>
</van-swipe>

</div>
</template>

<style scoped>
.tank{
  margin: 0px 0px 0px 0px;
}
.shuipingxiana{
  margin: -250px 0px 0px 0px;
}
.lishiss{
  margin: -250px 0px 0px -235px;
  font-size: 10px;
  color: black;
}
.lishis{
  margin: -250px 0px 0px -250px;
  font-size: 10px;
  color: black;
}
.shuipingxian{
  margin: -250px 0px 0px 0px;
}
.lishi{
  margin: -250px 0px 0px -250px;
  font-size: 10px;
  color: #818181;
}
.gengduo{
    margin: -240px 0px 0px 130px;
}
.kuangaas{
	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
  border:1px solid #b3b3b3;
	margin: 40px 0px 0px 0px;
}
.yanses{
  margin: -258px 0px 0px -120px;
  font-size: 5px;
  color: #bbbbbb;
}
.xhongs{
   margin: -465px 0px 0px 155px;
  font-size: 10px;
  color:#bbbbbb;
}
.dluo{
  margin: -587px 0px 0px 225px;
  font-size: 15px;
  color: black;
}
.xshuo{
   margin: -465px 0px 0px 140px;
  font-size: 10px;
  color:#bbbbbb;
}
.wenz{
  margin: -490px 0px 0px 140px;
  font-size: 10px;
  color:#bbbbbb;
}
.Zwenz{
  margin: -587px 0px 0px 150px;
  font-size: 15px;
  color: black;
}
.zuijia{
  margin: -405px 0px 0px -210px;
}
.ZhouWei{
    margin: -460px 0px 0px -190px;
    color: #bbbbbb;
    font-size: 8px;
  }
.kkuan{
  	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
	background-color: #fff8f6;
    color: #ff6a6a;
	margin: 152px 0px 0px -140px;
}
.ydong{
  margin: -382px 0px 0px 345px;
}
.kuangg{
  	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
	background-color: #fff8f6;
    color: #ff6a6a;
	margin: 96px 0px 0px -140px;
}
.qqq{
  margin: -382px 0px 0px 345px;
}
.kuangaaa{
  	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
	background-color: #fff8f6;
    color: #ff6a6a;
	margin: 96px 0px 0px -88px;
}
.kuangaa{
  	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
	background-color: #fff8f6;
    color: #ff6a6a;
	margin: 40px 0px 0px -88px;
}
.cqi{
  margin: -326px 0px 0px 210px;
}
.yanse{
  margin: -258px 0px 0px -220px;
  font-size: 5px;
}
.xin{
    margin: -270px 0px 0px 30px;
}
.kuanga {
	width: 4rem;
	height: 1rem;
	border-radius: 10px;
    font-size: 1px;
	background-color: #fff8f6;
    color: #ff6a6a;
	margin: 40px 0px 0px 0px;
}
  .ReCi{
    margin: -250px 0px 0px -250px;
    color: #bbbbbb;
    font-size: 8px;
  }
  .my-swipe .van-swipe-item {
    color:red;
    font-size: 20px;
    width: 100px;
    line-height: 500px;
    text-align: center;
    background-color: #ffffff;
  }
</style>
