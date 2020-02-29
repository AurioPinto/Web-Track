<template>
  <div class="digital">
    <div class="hp">
      <div>
        <p class="ppp">选择你的心情</p>
      </div>
      <div class="imgs">
        <img width="28" height="28" src="../assets/images/Nio.jpg" alt />
        <img width="24" height="25" src="../assets/images/NIO1jpg.jpg" alt />
        <img width="25" height="22" src="../assets/images/Nio.jpg" alt />
        <img width="25" height="23" src="../assets/images/NIO1jpg.jpg" alt />
        <img width="25" height="22" src="../assets/images/Nio.jpg" alt />
      </div>
    </div>
    <div class="up-top">
      <span>主题</span>
    </div>
    <div class="up-down">
      <span>说出你的故事</span>
    </div>
    <div class="bubu">
      <img width="60" height="60" src="../assets/images/camer.png" alt />
    </div>
    <div class="last-step">
      <div>
        <img width="17" height="12" src="../assets/images/3.png" alt />
        <span>以实名发表</span>
      </div>
      <input type="button" value="发表" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {
        name: "app"
      }
    };
  }
};
</script>

<style scoped>
.ppp {
  width: 102px;
  height: 24px;
  color: #999999;
  padding-top: 25px;
  margin-left: 25px;
}
.imgs img {
  margin-top: 26px;
  margin-left: 40px;
}
.hp {
  border-bottom: 1px solid #ccc;
  padding-bottom: 33px;
}
.up-top span {
  width: 37px;
  height: 25px;
  color: #999999;
  margin-top: 25px;
  margin-left: 25px;
}
.up-top {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin: 20px 10px 0;
}
.up-down span {
  margin-top: 15px;
  width: 102px;
  height: 24px;
  margin-left: 25px;
  color: #999999;
}
.up-down {
  border-bottom: 1px solid #ccc;
  padding-bottom: 119px;
  margin: 20px 10px 0;
}
.bubu img {
  margin-top: 31px;
  margin-left: 25px;
}
/*.done{*/
/*display: flex;*/
/*justify-content: flex-end;*/
/*}*/
.last-step {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 19px 20px;
  /*border-top: 10px;*/
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.last-step input {
  width: 93px;
  height: 37px;
  color: #ffffff;
  border-radius: 25px;
  -webkit-appearance: none;
  background-color: #dcdcdc;
  display: block;
  border: none;
}
.last-step span {
  margin-left: 4px;
  color: #00bebe;
}
</style>
