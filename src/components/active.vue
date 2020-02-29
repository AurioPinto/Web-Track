<template>
  <div>
    <div class="first-img">
      <img width="72" height="66" src="../assets/images/Nio.jpg" alt />
    </div>
    <span class="span">
      Welcome to
      <nobr>NIO</nobr>
      <a>HOME</a>
    </span>
    <div class="input">
      <div class="inner">
        <p>
          <input
            type="text"
            value="User Name"
            placeholder="User Name"
            id="input-1"
          />
        </p>
        <p>
          <input
            type="text"
            value="Password"
            placeholder="Password"
            id="input-2"
          />
        </p>
      </div>
    </div>
    <div class="btn-wrap">
      <button @click="goto('/china')" id="button">Login</button>
      <div class="footer">
        <span>沪ICP备15044878号-4</span>
        <img src="assets/images/Bitmap.png" alt />
        <span>沪公网安备 31011402003368号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "active",
  data() {
    return {
      user: {
        name: "active"
      }
    };
  },
  methods: {
    goto(where) {
      this.$router.push(where);
    }
  }
};
</script>

<style scoped>
.first-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
.span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-size: 30px;
  color: #939799;
  font-weight: 300;
  font-family: BlueSkyStandard-Light;
}
nobr {
  margin-left: 3px;
  font-weight: 600;
  color: #000000;
  font-size: 30px;
}
a {
  margin-left: 3px;
  color: #000f16;
  font-weight: 300;
  line-height: 42px;
  font-size: 30px;
}
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 106px;
  max-width: 700px;
  margin: 0 auto;
}
.input .inner {
  width: 100%;
  padding: 0 36px 0;
}
#input-1 {
  border: none;
  outline: none;
  border-bottom: 1px solid #939799;
  padding: 10px 0;
  color: #939799;
  line-height: 38px;
  width: 100%;
  font-size: 20px;
}
#input-2 {
  border: none;
  outline: none;
  border-bottom: 1px solid #939799;
  color: #939799;
  padding: 10px 0;
  line-height: 38px;
  width: 100%;
  font-size: 20px;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
#button {
  width: 120px;
  height: 50px;
  outline: none;
  border: none;
  margin-top: 50px;
  border-radius: 50px;
  background: rgba(0, 190, 190, 1);
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  position: fixed;
  bottom: 33px;
  /*right: 0;*/
  /*max-width: 500px;*/
  margin: 0 auto;
  color: #999999;
}
.footer img {
  margin: 17px;
}
</style>
