<template>
  <div class="default">
    <div class="first">
      <div class="img">
        <img width="45" height="45" src="../assets/images/Nio.jpg" alt="">
      </div>
      <div class="text">
        <span>Jayden Newman</span>
        <p>回复 1层 蒙面大侠：<a>恭喜发财!</a></p>
      </div>
    </div>
    <div class="bottom"></div>
    <div class="second first">
      <div class="img-1 img">
        <img width="45" height="45" src="../assets/images/NIO1jpg.jpg" alt="">
      </div>
      <div class="text-1">
        <span>Darrell Byrd</span>
        <p>58同城，易车网</p>
      </div>
    </div>
    <div class="bottom bottom"></div>
    <div class="last first">
      <div class="img-2 img">
        <img width="45" height="45" src="../assets/images/Nio.jpg" alt="">
      </div>
      <div class="text-2">
        <span>Bruce Harrington</span>
        <p>给你的评论点了一个赞 <img width="15" height="13" src="../assets/images/thumbs-up-light-skin-tone.png" alt=""></p>
      </div>
    </div>
    <div class="bottom bottom"></div>
    <p class="span">展开消息列表</p>
    <div class="bottom bottom">
      <div class="footer">
        <div class="move up">
          <img src="../assets/images/compass icon.png" alt="">
          <div>
            <p class="stand">发现</p>
          </div>
        </div>
        <div class="move-1 up">
          <img src="../assets/images/seacch icon.png" alt="">
          <div>
            <!--<a href="../components/branch.vue">-->
              <p class="stand">搜索</p>
            </a>
          </div>
        </div>
        <div class="move-2 up">
          <img src="../assets/images/writting.jpg" alt="">
          <div>
            <p class="stand">发帖</p>
          </div>
        </div>
        <div class="move-3 up">
          <img src="../assets/images/chat icon.png" alt="">
          <div>
            <!--<a href="https://www.google.com/">-->
              <p class="stand">消息</p>
            </a>
          </div>
        </div>
        <div class="move-4 up">
          <img  src="../assets/images/tttime.jpg" alt="">
          <div>
            <p  class="stand">历史</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'london',
  data () {
    return {
      user: {
        name: 'london'
      }
    }
  }
}
</script>

<style scoped>
  .first {
    padding: 20px 27px 17px;
    display: flex;
  }
  .second{
    margin-top: -21px;
  }
  .text span{
    width: 114px;
    height: 20px;
    color: #999999;
    margin-left: 15px;
  }
  .text-1 span{
    width: 78px;
    height: 20px;
    color: #999999;
    margin-left: 15px;
  }
  .text-1 p{
    width: 115px;
    height: 23px;
    margin-left: 15px;
    color: #333333;
    margin-top: 6px;

  }
  .text p{
    width: 225px;
    height: 25px;
    color: #999999;
    margin-top: 6px;
    margin-left: 15px;
  }
  .last span{
    width: 114px;
    height: 20px;
    color: #999999;
    margin-left: 15px;
  }
  .last p{
    width: 181px;
    height: 22px;
    margin-left: 15px;
    margin-top: 6px;
  }
  .text a{
    color: black;
  }
  .img img{
    border-radius: 25px;
  }
  .img-2{
    margin-top: -13px;
  }
  .last{
    margin-top: -13px;
  }
  .span{
    text-align: center;
    letter-spacing: 2px;
    /*width: 95px;*/
    /*height: 22px;*/
    font-size: 17px;
    color: #999999;
    /*border-bottom: 14px;*/
  }
  .span{
    margin-bottom: 11px;
  }
  .bottom{
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    margin: 0px 35px 20px;
    color: #E5E5E5;
  }
  .footer{
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
  }
  .up{
    text-align: center;
    color: #54585A;
  }

  .up img{
    width: 18px;
    height: 18px;
  }

  .move-2.up img{
    width: 43px;
    height: 43px;
    margin-top: -20px;
  }
  .switch{
    display: flex;
    align-items: center;
  }
  .switch span{
    position: relative;
    background-color: #00BEBE;
    width: 47px;
    height: 24px;
    border-radius:12px;
    margin: 0 5px;
  }
  .switch span i{
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    width: 23px;
    height: 23px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .plus {
    background-color: white;
  }
</style>
