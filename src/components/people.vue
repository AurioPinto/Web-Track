<template>
  <div>
    <div class="first-step">
      <div class="one">
        <img src="../assets/images/logo.png" alt />
        <div class="span-span">
          <span>Home</span>
          <span>Value Driven</span>
          <span>Library</span>
          <a href="#/login">
            <span>People</span>
          </a>
        </div>
      </div>
      <div class="img">
        <img width="10" height="10" src="../assets/images/alert.png" alt />
        <img width="16" height="16" src="../assets/images/people.png" alt />
      </div>
    </div>
    <div>
      <div class="second">
        <span>图片</span>
        <span>视频</span>
        <span>公司介绍</span>
      </div>
    </div>
    <div class="pic">
      <img src="../assets/images/nio-people.png" alt />
      <div class="text-center">
        <p>蔚来价值体系</p>
        <p>我们的愿景 驱动力 价值观</p>
      </div>
    </div>
    <div class="button">
      <a href="#/users">
        <span class="button-1">Learn More</span>
      </a>
    </div>
    <div class="file">
      <button class="only" @click="onOff = true">User's pic</button>
      <div class>
        <img src="../assets/images/btn_closed.png" alt @click="onOff = false" />
      </div>
    </div>
    <div class="module" v-show="onOff">
      <div class="main-module">
        <div class="module">
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>30分钟解读真诚</p>
          </div>
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>30分钟解读真诚</p>
          </div>
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>30分钟解读真诚</p>
          </div>
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>斌哥说第三季第四期</p>
          </div>
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>斌哥说第三季第四期</p>
          </div>
          <div>
            <img width="256" height="146" src="../assets/images/NIO1jpg.jpg" alt />
            <p>斌哥说第三季第四期</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "people",
  data() {
    return {
      user: {
        name: "people"
      },
      onOff: true
    };
  }
};
</script>

<style scoped>
.first-step {
  width: 100%;
  height: 35px;
  padding: 0 86px 0;
  background-color: #00263c;
  box-sizing: border-box;
}
.one {
  display: flex;
}
.first-step {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.span-span span {
  margin-left: 23px;
  color: #ffffff;
}
.span-span span:nth-child(3) {
  color: #00bebe;
}
.img {
  display: flex;
  align-items: center;
}
.img img {
  margin-left: 12px;
}
.second {
  width: 100%;
  height: 5.98%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 12px 0 12px;
}
.second,
span {
  margin-right: 15px;
  font-weight: bold;
  color: #939799;
  line-height: 12px;
}
.second span:first-child {
  color: blue;
  height: 12px;
  font-weight: bold;
  line-height: 12px;
}
.text-center {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.main-module {
  width: 1580px;
  margin: 80px 170px 104px;
  background-color: #ffffff;
  padding: 40px 52px 40px;
}
.module {
  display: flex;
}
.module img {
  margin-left: 10px;
  display: flex;
  justify-content: center;
}
.module,
p + p {
  font-size: 15px;
  color: #000f16;
}
.only {
  color: #004b64;
  width: 150px;
  height: 29px;
  font-size: 15px;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 30px;
}
.one {
  margin: -36px 171px;
  color: #004b64;
  font-weight: bold;
}
.file {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
button:hover {
  color: crimson;
  border: 2px dashed;
}
</style>
