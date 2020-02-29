<template>
  <div>
    <div class="rectangle">
      <div class="first-step">
        <div class="ask">
          <a href="#/ios">
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
    <div class="content">
      <div class="content-up">
        Qustion 1
        <img src="../assets/images/up.png" alt />
        <p class="second-content">在诚实地说出TA的想法的同时，可靠的完成他或她所说的事情，并且遵循对他人的承诺。</p>
      </div>
    </div>
    <div class="hand">
      <div class="last">
        <div class="one">
          <img width="65" height="65" src="../assets/images/Nio.jpg" alt />
          <div class="pop">
            <p class="select">Dylan Foster</p>
            <p class="div">Superior</p>
          </div>
        </div>
        <div class="button">
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>
    </div>
    <div class="main-root">
      <div class="root">
        <span>保存</span>
      </div>
      <div class="root-1">
        <span>下一题</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "query",
  data() {
    return {
      user: {
        name: "query"
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
.content-up {
  margin: 40px 420px 0;
  font-weight: bold;
}
.content-up img {
  width: 8px;
  height: 5px;
  margin-left: 10px;
}
.second-content {
  width: 721px;
  height: 25px;
  margin-top: 8px;
}
.hand {
  margin: 30px 421px 31px;
}
.hand {
  width: 760px;
  height: 227px;
  background-color: #ffffff;
  border: 1px solid rgba(220, 220, 220, 1);
}
.hand {
  padding: 20px 30px 51px;
}
.button p {
  width: 50px;
  height: 30px;
  background: rgba(247, 247, 247, 1);
  border-radius: 2px;
  margin: 0 17px 0 0;
  font-weight: bold;
}
.select {
  margin-left: 16px;
  font-size: 17px;
  color: #dcdcdc;
}
.div {
  font-size: 14px;
  font-weight: bold;
  margin: 2px 16px 0;
  color: #dcdcdc;
}
.button {
  display: flex;
}
.button p {
  display: flex;
  align-items: center;
}
.button p {
  display: flex;
  justify-content: center;
}
.one {
  display: flex;
  justify-content: space-between;
}
.last {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.one,
pop {
  display: flex;
  align-items: center;
}
.root {
  color: #00bcbc;
  width: 120px;
  height: 50px;
  /*line-height: 50px;*/
  border-radius: 100px;
  border: 2px solid rgba(0, 188, 188, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-root {
  display: flex;
  justify-content: center;
}
.root-1 {
  color: white;
  width: 120px;
  height: 50px;
  background: #00bcbc;
  border-radius: 100px;
  margin-left: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.root-1 span {
  height: 20px;
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 14px;
}
.root span {
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 4px;
}
</style>
