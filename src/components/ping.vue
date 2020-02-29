<template>
  <div>
    <div class="rectangle">
      <div class="first-step">
        <div class="ask">
          <img
            width="106"
            height="40"
            src="../assets/images/other-nio.jpg"
            @click="showpop=true"
            alt
          />
          <div class="title">
            <span>Value Indicator</span>
            <div class="fax">
              <span>FAQ</span>
            </div>
          </div>
        </div>
        <div class="inside">
          <a href="#/day">
            <p>ENG</p>
          </a>
          <div class="inside-1">
            <p>中文</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="sold">
        <div class="one steps first">
          <span>步骤1</span>
          <div class="circle-wrapper done">
            <div class="circle"></div>
          </div>
        </div>
        <div class="steps second first">
          <span>步骤2</span>
          <div class="circle-wrapper">
            <div class="circle"></div>
          </div>
        </div>
        <div class="steps Third first">
          <span>步骤3</span>
          <div class="circle-wrapper done">
            <div class="circle"></div>
          </div>
        </div>
        <div class="steps fourth first">
          <span>步骤4</span>
          <div class="circle-wrapper done">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <div class="main-box">
        <div class="box-0">
          <p class="point">已完成</p>
          <div class="in0">
            <div class="circle-box0"></div>
            <span>7 / 23</span>
            <p>Task</p>
          </div>
        </div>
        <div class="box-0">
          <p class="point">进展中</p>
          <div class="in0">
            <div class="circle-box1"></div>
            <span>2 / 5</span>
            <p>Days</p>
          </div>
        </div>
      </div>
      <div class="run">
        <div class="last-box">
          <div class="php">
            <p>待完成</p>
          </div>
          <div id="all">
            <p>
              请确认
              <a>你</a>的评价人
            </p>
            <p>
              请确认你的
              <a>下属</a>的评价人
            </p>
            <p>
              请开始
              <a>自评</a>
            </p>
            <p>
              你的报告已经
              <a>出炉</a>
            </p>
          </div>
        </div>
        <div class="last-box0">
          <div class="dev">
            <p>已完成</p>
          </div>
          <div id="first-id">
            <p>
              确认谁将评价
              <a>你</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="shanghai-1" v-if="showpop">
      <div class="new">
        <div class="first-p">
          <p>
            请确认谁将评价
            <a>我</a>
          </p>
          <p>
            你最多可以新增
            <a>3</a>个人
          </p>
        </div>
        <div>
          <img src="../assets/images/btn_closed.png" @click="closepopup" alt />
        </div>
      </div>
      <div class="deep">
        <div class="deep-1">
          <img src="../assets/images/scan.png" alt />
          <p>新增</p>
        </div>
        <div>
          <img src="../assets/images/Nio.jpg" alt />
          <p>Ivan Fernandez</p>
          <p class="indeed">Social Network</p>
        </div>
        <div>
          <img src="../assets/images/Nio.jpg" alt />
          <p>Kenneth Pearson</p>
          <p class="indeed">Social Network</p>
        </div>
        <div>
          <img src="../assets/images/Nio.jpg" alt />
          <p>Jeffery Owen</p>
          <p class="indeed">Social Network</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ping",
  data() {
    return {
      user: {
        name: "ping"
      },
      showpop: false
    };
  },
  methods: {
    closepopup() {
      this.showpop = false;
    }
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
.title {
  display: flex;
}
.title {
  height: 22px;
  color: #333333;
  font-size: 16px;
  font-weight: 250;
  margin: 14px 21px 0;
}
.fax span {
  margin-left: 20px;
  color: #00bebe;
  font-weight: bold;
}
.inside {
  padding: 16px 0 16px;
}
.inside {
  display: flex;
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
  margin-left: 41px;
  color: black;
}

.sold {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.steps {
  position: relative;
}
.steps:nth-of-type(1) {
  margin-left: -291px;
  border: none;
}
.first {
  border-top: 1px solid #00bebe;
  line-height: 3;
  position: relative;
}
.first {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sold span {
  color: #000000;
  padding-left: 199px;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
}
.circle-wrapper {
  background: #fff;
  border: 3px solid #afe7e7;
  width: 22px;
  height: 22px;
  position: absolute;
  right: -4px;
  top: -10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.done {
  border: none;
  background: none;
}
.circle {
  width: 16px;
  height: 16px;
  background-color: #00bcbc;
  border-radius: 10px;
}
.one span {
  color: #00bcbc;
}
.second span {
  color: #00bcbc;
}
.main-box {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}
.box-0 {
  padding: 16px 19px 0;
}
.point {
  font-size: 14px;
  font-weight: bold;
  color: rgba(84, 88, 90, 1);
}
.box-0 {
  width: 350px;
  height: 180px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  margin-right: 60px;
}
.run {
  display: flex;
  justify-content: center;
  margin-top: 29px;
}
.last-box {
  width: 350px;
  height: 305px;
  background-color: #fff;
  margin-right: 60px;
  border: 1px solid rgba(220, 220, 220, 1);
}
.last-box0 {
  width: 350px;
  height: 111px;
  background-color: #fff;
  margin-right: 60px;
  border: 1px solid rgba(220, 220, 220, 1);
}
.in0 {
  text-align: center;
}
.php p {
  padding: 11px 19px 11px;
}
.php {
  width: 350px;
  height: 50px;
  background-color: #00bcbc;
}
.dev {
  width: 350px;
  height: 50px;
  background-color: #dcdcdc;
}
#first-id {
  padding: 20px 19px 19px;
}
#all {
  padding: 20px 19px 37px;
}
#all > p + p {
  margin-top: 5px;
}
.dev p {
  padding: 11px 19px 11px;
}

.shanghai-1 {
  width: 660px;
  height: 580px;
  background-color: #fcfcfc;
  padding: 27px 20px 0;
}
.shanghai-1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.new {
  display: flex;
  justify-content: space-between;
}
.new {
  border-bottom: 1px solid #dcdcdc;
  padding: 0 0 27px;
}
.first-p {
  line-height: 25px;
  font-size: 18px;
  color: #323a45;
}
.deep {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.deep > div + div {
  width: 140px;
  height: 170px;
  background-color: #ffffff;
  margin-left: 10px;
  border: 1px solid rgba(220, 220, 220, 1);
}
.deep-1 {
  width: 140px;
  height: 170px;
  border: 1px dashed rgba(220, 220, 220, 1);
}
.deep-1 p {
  height: 20px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20;
  color: #00bcbc;
}
.deep img {
  width: 47px;
  height: 47px;
  margin: 29px 45px 11px;
}
.deep img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.deep p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.indeed {
  height: 14px;
  font-size: 14px;
  font-weight: bold;
  color: #b9b9b9;
  line-height: 14px;
}
a {
  font-weight: bold;
}
</style>
