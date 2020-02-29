<template>
  <div class="node">
    <div class="rectangle">
      <div class="first-step">
        <div class="ask">
          <a href="../components/ios.vue">
            <img width="106" height="40" src="../assets/images/other-nio.jpg" alt />
          </a>
          <div class="title">
            <span>Value Indicator</span>
            <div class="fax">
              <span>FAQ</span>
            </div>
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
    <div class="node-2">
      <div class="line">
        <img src="../assets/images/icon_search.png" alt />
        <div class="type"></div>
      </div>
      <div class="inside-node">
        <div class="point">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>Is the semi-annual assessment too frequent?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>Is it worth spending so much time on this considering our busy work?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>Which questions are compulsory and which optional?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>When is the deadline to complete the self-assessment questionnaires and the peer assessment questionnaires respectively?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>How do we determine which option matches the assessed person (completely true / basically true/ not true / not true at all)？Below is the marking scale for your reference:</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>How to score if I do not know his/her specific circumstances?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>If the system is stuck when I am filling out the questionnaires, will it affect the questions that have been completed?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="point second">
          <img width="12" height="12" src="../assets/images/icon_top.png" alt />
          <div class="first-paragrah">
            <span>Why cannot I submit the questionnaires after completion?</span>
          </div>
        </div>
        <div class="bottom"></div>
        <div class="last">
          <p>More</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "file",
  data() {
    return {
      user: {
        name: "file"
      }
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
.node-2 {
  margin: 30px 580px 0;
}
.inside-node {
  width: 760px;
  height: 810px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(220, 220, 220, 1);
}
.inside-node {
  padding: 37px 32px 0;
}
.first-paragrah span {
  width: 650px;
  height: 17px;
  font-size: 14px;
  font-family: BlueSkyStandard-Light;
  color: #323a45;
  margin-left: 10px;
}
.point {
  display: flex;
  align-items: center;
}
.bottom {
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  margin: 30px 0 0;
}
.second {
  margin-top: 27px;
}
.last {
  margin: 32px 316px 132px;
  width: 120px;
  height: 50px;
  background-color: #00bcbc;
  border-radius: 100px;
}
.last p {
  height: 17px;
  letter-spacing: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 17px 33px 16px;
}
.line {
  margin-bottom: 23px;
  display: flex;
  justify-content: flex-end;
}
.type {
  width: 200px;
  height: 0;
  margin: 19px 11px 0 5px;
  border: 1px solid rgba(220, 220, 220, 1);
}
.line {
  margin: 1px -91px 20px 0;
}
</style>
