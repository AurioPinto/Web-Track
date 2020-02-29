<template>
  <div class="tool">
    <div class="first">
      <div class="input">
        <input type="text" value="查找人名／邮箱" />
        <img src="../assets/images/seacch icon.png" alt />
        <div class="mark">
          <img src="../assets/images/mark.png" alt />
        </div>
      </div>
    </div>
    <div class="buttom"></div>
    <div class="default">
      <div class="main-text">
        <span>工作关系推荐</span>
      </div>
    </div>
    <div class="first-one default">
      <div class="circle"></div>
      <div class="right">
        <div class="img">
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph">
          <p class="more">Tyler Watts 王可君</p>
          <p class="less">Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="second-one first-one default">
      <div class="circle-1 circle"></div>
      <div class="right-1 right">
        <div class="img-1 img">
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-1 paragraph">
          <p class="more-1 more">Pearl Lamb 徐磊</p>
          <p class="less-1 less">Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="second-second first-one default">
      <div class="circle-2 circle circle"></div>
      <div class="right-2 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-2 paragraph">
          <p>Randy Malone 马永琛</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="third first-one default">
      <div class="circle-3 circle"></div>
      <div class="right-3 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-3 paragraph">
          <p>Jeremiah Wong 王杰</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="fourth first-one default">
      <div class="circle-4 circle"></div>
      <div class="right-4 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-4 paragraph">
          <p>Steve Lawson 刘思韵</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="fifth first-one default">
      <div class="circle-5 circle"></div>
      <div class="right-5 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-5 paragraph">
          <p>Marc Mason 马可</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="sixth first-one default">
      <div class="circle-6 circle"></div>
      <div class="right-6 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-6 paragraph">
          <p>Lui Wei 刘伟</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="seventh first-one default">
      <div class="circle-7 circle"></div>
      <div class="right-7 right">
        <div>
          <img width="40" height="40" src="../assets/images/Nio.jpg" alt />
        </div>
        <div class="paragraph-7 paragraph">
          <p>Pinto West 斯提凡</p>
          <p>Digital Operation</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>取消</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      user: {
        name: "top"
      }
    };
  }
};
</script>

<style scoped>
.first {
  align-items: center;
  position: relative;
  padding: 18px 0 18px;
}
.first img {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
}
.img img {
  border-radius: 25px;
}
.first .input {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.first .input > img {
  left: 30px;
}
.first input {
  font-size: 15px;
  flex: 1;
  height: 35px;
  border-radius: 100px;
  border: 1px solid rgba(220, 220, 220, 0.4);
  padding-left: 40px;
  box-sizing: border-box;
}

.circle {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 50%;
  color: #b9b9b9;
  /*position: absolute;*/
  box-sizing: border-box;
}
.buttom {
  height: 10px;
  background-color: #f5f5f5;
}
.main-text span {
  width: 72px;
  height: 18px;
  color: #00bebe;
  font-size: 12px;
}
.main-text {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
.default {
  padding: 20px 20px 20px;
}
.first-one.default {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin: 0 20px;
}
.first-one.default .right {
  display: flex;
  margin-left: 15px;
  flex: 1;
}
.first-one.default .right .paragraph {
  margin-left: 15px;
  flex: 1;
}
.paragraph .more {
  width: 100%;
  height: 20px;
  color: #333333;
}
.paragraph .less {
  width: 100%;
  height: 17px;
  font-size: 14px;
  color: #999999;
}
.footer {
  width: 100%;
  height: 62px;
  position: fixed;
  bottom: 0;
  background-color: #00bebe;
}
.footer p {
  margin-top: 15px;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
}
</style>
