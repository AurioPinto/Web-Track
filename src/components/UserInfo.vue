<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="user-info">
      <img src="../assets/images/berlin.png" alt="">
      <div>
        <p class="text">Cameron Duncan</p>
        <p class="line">2017-02-28 12:30:58</p>
      </div>
      <div class="image">
        <img src="../assets/images/NIO1jpg.jpg" alt=""/>
      </div>
    </div>
    <div class="news">
      <p class="nio">非常忙碌的工作，停下来想一想，大约是为了</p>
      <p class="bad">命运是一件很不可思议的东西。虽人各有志，往往在实现理想时会遭遇到许多困难，反而会使自己走向与志趣相反的路，而一举成功。我想我就是这样。</p>
      <div class="img-preview">
        <img class="left" src="../assets/images/Nio.jpg" alt="">
        <div class="right">
          <img src="../assets/images/NIO1jpg.jpg" alt="">
          <img src="../assets/images/NIO1jpg.jpg" alt="">
        </div>
      </div>
      <div class="last-image">
        <div class="point">
          <span> 0<img src="../assets/images/Shape@2x.png" alt=""></span>
        </div>
        <div class="point">
          <span>0<img src="../assets/images/Shape@2x.png" alt=""></span>
        </div>
      </div>
    </div>

    <!-- Step down to the next page!-->
    <div class="space"></div>
    <div class="another">
      <div class="page">
        <div class="dope">
          <span>全部评论(12)</span>
        </div>
        <div class="pop">
          <span>时间排序</span>
          <img src="../assets/images/Group.png" alt="">
        </div>
      </div>
      <div class="system"></div>
      <!--Next Page -->
      <div class="UK" >
        <div class="all">
          <div class="graphic epson">
            <div class="paper">
              <img src="../assets/images/time.png" alt="">
            </div>
            <div class="begin">
              <div class="title">
                <div class="big-left">
                  蒙面大侠<img src="../assets/images/berlin.png"/>
                </div>
                <div class="big-right">
                  21<img src="../assets/images/up.png" alt="">
                </div>
              </div>
              <div class="att-text">
                <p class="edu">窗前明月光,疑似地上霜;举头望明月,低头思故乡。</p>
              </div>
              <div class="company">
                <img src="../assets/images/microsoft.png" alt="">
                <img src="../assets/images/Nio.jpg" alt="">
                <img src="../assets/images/apple.jpg" alt="">
                <div class="att">
                  <span class="att-right">1分钟前</span>
                  <span class="att-left">DEL</span>
                </div>
              </div>
            </div>
          </div>
          <div class="west"></div>
          <div class="union">
            <div class="epson">
              <div class="left"><img src="../assets/images/Group.png" alt=""></div>
              <div class="right">
                <div class="title">
                  <span class="title-one">蒙面大侠</span>
                  <span>1层</span>
                </div>
                <p class="type">我觉得很有意思，可以看看。</p>
                <p class="education">1分钟前</p>
              </div>
            </div>
            <div class="finish"></div>
            <div class="epson">
              <div class="left"><img src="../assets/images/Group.png" alt=""></div>
              <div class="right">
                <div class="title">
                  <span class="gelei">蒙面大侠</span>
                  <span>2层</span>
                </div>
                <p>回复1层  是的！</p>
                <p class="education">1分钟前</p>
              </div>
            </div>
            <div class="design"></div>
          </div>
        </div>
        <div class="note">
          <span class="poop">剩余 9 条回复，点击展开</span>
          <span><img src="" alt=""></span>
        </div>
        <div class="done">
          <img src="../assets/images/js.png" alt="">
          <div class="main">
            <div class="title">
              <span class="pub">蒙面大侠</span>
              <div class="done-right">
                21<img src="../assets/images/up.png" alt="">
              </div>
            </div>
            <div class="fun">
              <p>春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少</p>
            </div>
            <div class="over"></div>
            <div class="over-control">
              <p class="auto">我的看法是...</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      user: {
        name: 'West',
        age: 23
      }
    }
  }
}
</script>

<style scoped>
  .user-info {
    padding: 20px 25px;
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 14px;
    display: flex;
  }

  .user-info img {
    width: 28px;
    height: 29px;
    margin-right: 8px;
  }

  .user-info .text {
    width: 115px;
    height: 16px;
    font-weight: 300;
    line-height: 16px;
    font-size: 14px;
    color: #333333;
  }

  .line {
    width: 120px;
    margin-top: 3px;
    height: 12px;
    font-weight: 150;
    line-height: 12px;
    font-size: 12px;
    color: #333333;
  }

  .image img {
    width: 16px;
    height: 13px;
    margin-left: 17px;
  }

  .news {
    padding: 25px 25px 30px;

  }

  .news .nio {
    width: 325px;
    height: 50px;
    color: #333333;
    font-weight: bold;
  }

  .img-preview {
    margin-top: 15px;
    display: flex;
  }

  .img-preview .left {
    width: 200px;
    margin-right: 7px;
    height: 143px;;
    border: 1px #ccc;
  }

  .img-preview .right {
    flex: 1;
  }

  .img-preview .right img {
    height: 67px;
    display: block;
    width: 100%;
  }

  .img-preview .right img:first-child {
    margin-bottom: 7px;
  }

  .last-image {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
  }

  .point {
    margin-left: 8px;
    background-color: #F8F8F8;
    font-size: 13px;
    width: 36px;
    height: 18px;

  }

  .point span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }

  .point img {
    width: 8px;
    height: 5px;
    margin-left: 4px;
  }

  /* Step down to the next page*/

  .another {
    padding: 20px 0px;
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 14px;
    margin: 0 25px;
  }

  .space {
    background: #F5F5F5;
    height: 10px;
  }

  .page {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .another .pop {
    color: #999999;
    /*width: 56px;*/
    /*height: 20px;*/
  }

  .another .pop img {
    vertical-align: middle;
    width: 11px;
    height: 12px;
    margin-right: 6px;
    color: #999999;
  }

  .another .dope {
    width: 181px;
    color: #333333;
    font-weight: bold;
  }

  /*Next Page*/
  /*UK.fake{*/
  /*margin-top: 15px;*/
  /*padding: 20px 0px;*/
  /*display: flex;*/
  /*}*/
  .UK .all {
    margin-top: 15px;
  }
  .UK .fake .dope {
    width: 35px;
    height: 35px;
  }
  .all .paper img{
    width: 35px;
    height: 35px;
  }
  /*.fake .outside{*/
    /*width: 56px;*/
    /*height: 20px;*/
  /*}*/

  .system {
    border-bottom: 1px solid #E5E5E5;
    margin-top: 15px;
  }

  .west {
    border-bottom: 1px solid #E5E5E5;
    margin-top: 11px;
  }
  .title{
    margin-left: 4px;
  }

  .company img {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    padding-right: 7px;
    justify-content: space-between;
    display: inline-block;
    border-radius: 2px;
  }

  /*.company .dell {*/
    /*margin-top: 10px;*/
    /*padding-right: 10px;*/
  /*}*/

  .company .hp {
    width: 21px;
    height: 15px;
    font-size: 11px;
    border-radius: 1px;
    background-color: #dcdcdc;
  }

  .epson {
    margin-top: 16px;
  }
  .epson {
    display: flex;
  }

  .epson .right {
    flex: 1;
    margin-left: 8px;

  }

  .epson .right .title {
    display: flex;
    justify-content: space-between;
  }

  /*.epson .left,.epson .right {*/
  /*display: inline-block;*/
  /*}*/

  .china {
    margin-top: 16px;
  }

  .finish {
    border-bottom: 1px solid #E5E5E5;
    margin-top: 16px;
  }

  .design {
    border-bottom: 1px solid #E5E5E5;
    margin-top: 13px;
  }

  .note {
    margin-top: 13px;
    text-align: center;
  }

  .poop {
    color: #00BEBE;
  }
  .done{
    margin-top: 20px;
    display: flex;
  }
  .dope{
    display: flex;
  }
  .dope .pub .fun{
    display: flex;
    justify-content: space-between;
  }
  .done img {
    margin-left: 2px;
    width: 35px;
    height: 35px;
  }

  .done .main .title {
    display: flex;
    justify-content: space-between;
  }
  .done .main .title .done-right {
    display: flex;
    align-items: center;
  }
  .done .main .title .done-right img {
    width: 9px;
    height: 6px;
  }

  .begin .title {
    display: flex;
    justify-content: space-between;
  }

  .begin .title .big-left img {
    width: 18px;
    height: 10px;
  }

  .begin .content .begin-right .begin-left span{
    display: flex;
    justify-content: space-between;
  }
  .title .pub{
    color: #999999;
  }
  .gelei{
    margin-top: 5px;
  }
  .type{
    margin-top: 5px;
  }

  .fun {
    width: 281px;
    height: 50px;
    color: #333333;
    margin-top: 5px;
    font-size: 15px;
    margin-top: 5px;
  }

  .union {
    margin-left: 44px;
  }

  .union .education {
    margin-top: 5px;
    color: #999999;
  }
  .over{
    background: #F5F5F5;
    height: 3px;
  }
  .auto{
    margin-top: 14px;
    text-align: center;
    color: #000000;
  }
  .big-left{
    margin-left: 7px;
    color: #999999;
  }
  .big-left img{
    margin-left: 7px;
    width: 18px;
    height: 10px;
  }
  .edu{
    margin-left: 8px;
    margin-top: 5px;
    color: #333333;
  }
  .att .att-left{
    margin-left: 10px;
    width: 28px;
    height: 13px;
    background: rgba(220,220,220,1);
  }
  .att .att-right{
    margin-top: 10px;
    width: 41px;
    height: 16px;
    color: #999999;
  }
  .title-one{
    width: 66px;
    height: 20px;
    color: #999999;
  }
  .title .gelei{
    width: 66px;
    height: 20px;
    color: #999999;
  }
  /*.all .gelei{*/
  /**/
  /*}*/

</style>
