<!--suppress ALL -->
<template>
  <div class="forward">
    <div class="first">
      <div class="first-one">
        <input type="text" value="加班班车" />
        <img class="first-img" src="../assets/images/mark.png" alt />
      </div>
      <div class="text">
        <span>用户</span>
        <span class="only">帖子</span>
        <span>评论</span>
      </div>
    </div>
    <div class="second">
      <div class="second-one">
        <img width="23px;" height="23px;" src="../assets/images/Nio.jpg" alt />
        <span>Elmer Manning</span>
        <p class="paragh">有所作为是生活的最高境界。</p>
      </div>
      <div class="main">
        <div class="main-main">
          <divn>
            <span>20评论</span>
            <span>882阅读</span>
          </divn>
          <div class="main-one">
            <span>1小时前</span>
          </div>
        </div>
      </div>
    </div>
    <div class="up">
      <div class="down">
        <img width="23px;" height="23px;" src="../assets/images/NIO1jpg.jpg" alt />
        <span>Alex Xu</span>
        <p class="par">非常忙碌的工作，停下来想一想，大约是为了理想。</p>
      </div>
      <div class="image">
        <img width="75" height="75" src="../assets/images/Nio.jpg" alt />
        <img width="75" height="75" src="../assets/images/NIO1jpg.jpg" alt />
      </div>
      <div class="last main">
        <div class="last-one main-main">
          <div>
            <span>20评论</span>
            <span>882阅读</span>
          </div>
          <div class="last-last main-one">
            <span>3小时前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nio",
  data() {
    return {
      user: {
        name: "nio"
      }
    };
  }
};
</script>

<style scoped>
.forward {
  padding: 17px 17px;
}
.first-one {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  position: relative;
}
.first-one img {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 0;
}
.first-one input {
  font-size: 18px;
  flex: 1;
  border: none;
}
.first-one span {
  width: 72px;
  height: 25px;
  font-size: 18px;
  color: #333333;
  font-weight: bolder;
}
.text {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin: 20px 8px 0;
}
.text span {
  margin-right: 20px;
  width: 30px;
  height: 21px;
  color: #666666;
  font-family: PingFangSC-Regular;
  font-size: 15px;
}
.text .only {
  color: #00bebe;
}
.second {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin: 20px 8px 0;
}
.second-one {
  margin-top: 20px;
}
.second-one span {
  margin-left: 8px;
  width: 100px;
  height: 20px;
  color: #333333;
}
.paragh {
  margin-top: 15px;
  width: 325px;
  height: 24px;
  color: #333333;
}
.main div {
  color: #666666;
}
.main-main {
  display: flex;
  justify-content: space-between;
}
.main-one {
  display: flex;
  justify-content: flex-end;
}
.up {
  margin-top: 11px;
}
.down span {
  margin-left: 8px;
  width: 51px;
  height: 20px;
}
.par {
  margin-top: 13px;
}
.image img {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.up {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin: 20px 8px 0;
}
/*.last-last{*/
/*display: flex;*/
/*justify-content:flex-end;*/

/*}*/
</style>
