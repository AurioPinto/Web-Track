<template>
  <div id="first">
    <div class="one">
      <a href="#/flash">
        <img width="72" height="66" src="../assets/images/berlin.png" alt />
      </a>
    </div>
    <div class="second">
      <div>
        <span>Welcome to</span>
      </div>
      <img width="195" height="34" src="../assets/images/berlin.png" alt />
    </div>
    <div class="form">
      <div class="form-1 bottom">
        <p>User Name</p>
      </div>
      <div class="form-2">
        <p>Password</p>
        <div class="bottom"></div>
      </div>
      <div id="log">
        <p>Login</p>
      </div>
      <div class="footer">
        <span>沪ICP备15044878号-4</span>
        <div class="point">
          <img width="20" height="20" src="../assets/images/Bitmap.png" alt />
          <span>沪公网安备 31011402003368</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "node",
  data() {
    return {
      user: {
        name: "node"
      }
    };
  }
};
</script>

<style scoped>
.one img {
  padding: 161px 924px 40px;
}
.second {
  display: flex;
  align-items: center;
  justify-content: center;
}
.second span {
  width: 257px;
  height: 50px;
  line-height: 50px;
  font-size: 42px;
  color: #939799;
  font-weight: 300;
  margin-right: 11px;
  font-family: BlueSkyStandard-Light;
}
.form {
  margin: 121px 680px 14px;
}
.form-1 p {
  height: 32px;
  font-size: 18px;
  color: rgba(147, 151, 153, 1);
  line-height: 32px;
  font-weight: bold;
  margin: 5px 15px 14px;
}
.bottom {
  border-bottom: 1px solid #cccccc;
  margin: 14px -17px 10px;
}
.form-2 p {
  height: 32px;
  font-size: 18px;
  color: rgba(147, 151, 153, 1);
  line-height: 32px;
  font-weight: bold;
}
#log {
  width: 276px;
  height: 66px;
  background: rgba(0, 190, 190, 1);
  border-radius: 33px;
  display: flex;
  justify-content: center;
  margin: 98px 135px 321px;
}
#log p {
  text-align: center;
  height: 56px;
  font-size: 24px;
  color: #ffffff;
  line-height: 28px;
}
#log p {
  display: flex;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer span {
  height: 18px;
  font-size: 12px;
  font-weight: 300;
  color: #666666;
  line-height: 18px;
  margin-right: 10px;
}
.point span {
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: #666666;
  margin-left: 8px;
}
</style>
