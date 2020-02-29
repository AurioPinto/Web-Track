<template>
  <div class="python">
    <div class="main-one">
      <div class="text">
        <p>选择应用</p>
      </div>
      <div class="tag">
        <div>
          <div class="rectangle">
            <img src="../assets/images/loading.png" alt />
          </div>
          <p>空间管理</p>
        </div>
        <div>
          <div class="rectangle-1 rectangle">
            <img src="../assets/images/Group.png" alt />
          </div>
          <p>卡券兑换</p>
        </div>
        <div>
          <div class="rectangle-2 rectangle">
            <img src="../assets/images/4.png" alt />
          </div>
          <p>用户到店</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "log",
  data() {
    return {
      user: {
        name: "log"
      }
    };
  }
};
</script>

<style scoped>
.text p {
  width: 136px;
  height: 46px;
  font-size: 33px;
  font-weight: bold;
  color: #333333;
  margin: 92px 50px 162px;
}
.rectangle {
  width: 130px;
  height: 130px;
  background-color: #ffffff;
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.1));
}
.tag {
  display: flex;
  justify-content: center;
}
.tag > div + div {
  margin-left: 50px;
}
p {
  margin-top: 14px;
  text-align: center;
  color: #333333;
}
img {
  padding: 48px 52px 50px;
}
</style>
