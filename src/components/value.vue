<template>
  <div>
    <!--<button class="button" @click="onOff = true">Nio</button>-->
    <div class="rectangle content" v-show="onOff">
      <div class="rectangle">
        <div class="first-step">
          <div class="ask">
            <a href="#/ios">
              <img width="106" height="40" src="../assets/images/other-nio.jpg" alt />
            </a>
            <div class="title">
              <span>Value Indicator</span>
            </div>
          </div>
          <div class="inside">
            <p>ENG</p>
            <div class="inside-1">
              <p>中文</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-up">
          <img width="15" height="27" src="../assets/images/btn_back.png" alt />
          <p class="first-content">是否同意TA通过试用期？</p>
          <p class="second-content">经过了过去150天的合作，TA的表现还满意吗？希望能郑重的考虑我的去留。</p>
        </div>
        <div class="over">
          <div class="last">
            <img width="33" height="33" src="../assets/images/Nio.jpg" alt />
            <div>
              <p class="select">请评价</p>
              <p class="div">Dylan Foster</p>
            </div>
          </div>
          <div>
            <div class="finished">
              <div class="point">
                <img class="img-1" src="../assets/images/nio-icon.png" alt />
                <p class="next-0">未通过</p>
              </div>
              <div class="other">
                <img class="img-1" src="../assets/images/nio-icon.png" alt />
                <p class="next-0">通过啦</p>
              </div>
            </div>
          </div>
        </div>
        <div class="buttom over" @click="onOff = false">
          <p>下一位</p>
        </div>
      </div>
      <!--<button class="button" @click="onOff = true">Nio</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "value",
  data() {
    return {
      user: {
        name: "value"
      },
      onOff: true
    };
  }
};
</script>

<style scoped>
.rectangle {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border: 1px solid rgba(220, 220, 220, 1);
}
.first-step {
  display: flex;
  justify-content: space-around;
}
.ask {
  padding: 10px 0 10px;
}
.ask {
  display: flex;
}
.inside {
  display: flex;
}
.inside {
  padding: 16px 0 16px;
}
.inside p {
  width: 41px;
  height: 17px;
  font-size: 14px;
  color: #00bcbc;
  letter-spacing: 1px;
  font-weight: bold;
}
.inside-1 p {
  margin-left: 17px;
  color: black;
}
.title {
  width: 114px;
  height: 22px;
  color: #00bebe;
  font-size: 16px;
  font-weight: 250;
  margin: 14px 21px 0;
}
.content-up {
  padding: 13px 399px 0;
}
.content-up img {
  padding: 0 0 12px;
}
.last {
  border-bottom: 1px solid rgba(220, 220, 220, 1);
  margin: 9px 10px 25px;
}
.first-content {
  width: 406px;
  height: 50px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  font-family: PingFangSC-Regular;
}
.second-content {
  width: 721px;
  height: 25px;
  font-size: 18px;
  color: #323a45;
  font-family: PingFangSC-Light;
  font-weight: 150;
}
.over {
  margin: 25px 399px 15px;
}
.over {
  width: 760px;
  height: 350px;
  background-color: #ffffff;
  border: 1px solid rgba(220, 220, 220, 1);
}
.last {
  padding: 10px 14px 12px;
}
.last {
  display: flex;
}
.select {
  margin-left: 8px;
  /*width: 42px;*/
  height: 20px;
  font-size: 17px;
}
.div {
  /*width: 84px;*/
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
}
.finished {
  display: flex;
  justify-content: center;
}
.point {
  width: 200px;
  height: 140px;
  border: 1px solid rgba(0, 190, 190, 1);
  color: #00bebe;
  border-radius: 6px;
}
.other {
  width: 200px;
  height: 140px;
  border: 1px solid rgba(220, 220, 220, 1);
  margin-left: 25px;
  border-radius: 6px;
}
.img-1 {
  padding: 35px 86px 15px;
}
.next-0 {
  padding: 0 76px 34px;
  width: 60px;
  height: 28px;
  font-weight: bold;
}
.buttom {
  text-align: center;
  color: white;
  width: 120px;
  height: 50px;
  background: rgba(0, 188, 188, 1);
  border-radius: 100px;
  margin: 30px 697px 35px;
}
.buttom p {
  width: 54px;
  height: 20px;
  font-size: 14px;
  letter-spacing: 4px;
  padding: 15px 33px 15px;
}
</style>
