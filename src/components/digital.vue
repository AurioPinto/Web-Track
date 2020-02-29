<!--suppress ALL -->
<template>
  <div class="model">
    <div class="event">
      <div class="event-one">
        <p>选择你的心情</p>
        <img width="30" height="30" src="../assets/images/apple.jpg" alt />
        <img width="30" height="30" src="../assets/images/microsoft.png" alt />
        <img width="30" height="30" src="../assets/images/apple.jpg" alt />
        <img width="30" height="30" src="../assets/images/microsoft.png" alt />
        <img width="30" height="30" src="../assets/images/apple.jpg" alt />
      </div>
      <div class="event-sec">
        <p>有所作为是生活的最高境界。</p>
      </div>
      <div class="event-parg">
        <p>命运是一件很不可思议的东西。虽人各有志，往往在实现理想时会遭遇到许多困难，反而会使自己走向与志趣相反的路，而一举成功。我想我就是这样。</p>
      </div>
      <div class="event-image" v>
        <div>
          <img width="60" height="60" src="../assets/images/camer.png" alt />
          <!--<img src="../assets/images/Stop.png" alt="" class="delete">-->
        </div>
        <div class="box">
          <img width="60" height="60" src="../assets/images/apple.jpg" alt />
          <img src="../assets/images/Stop.png" alt class="delete" />
        </div>
        <div class="box">
          <img width="60" height="60" src="../assets/images/microsoft.png" alt />
          <img src="../assets/images/Stop.png" alt class="delete" />
        </div>
      </div>
      <div class="over">
        <div>
          <img width="17" height="12" src="../assets/images/3.png" alt />
          <span>以实名发表</span>
        </div>
        <input type="button" value="发表" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "digital",
  data() {
    return {
      user: {
        name: "digital"
      }
    };
  }
};
</script>

<style scoped>
.event-one {
  border-bottom: 1px solid #ccc;
  padding-bottom: 33px;
}
.event-one p {
  padding-top: 25px;
  width: 102px;
  height: 24px;
  margin-left: 25px;
  color: #999999;
  /*font-weight: normal;*/
}
.event-one img {
  margin-top: 28px;
  margin-left: 42px;
}
.event-sec p {
  width: 334px;
  height: 25px;
  margin-top: 25px;
  color: #333333;
}
.event-sec {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin: 15px 15px 0;
}
.event-parg p {
  width: 325px;
  height: 108px;
  color: #333333;
  padding: 15px 25px 36px;
}
.event-parg {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin: 15px 15px 0;
}
.event-image {
  display: flex;
}

.event-image img {
  margin-top: 35px;
  margin-left: 23px;
}
.over {
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
.over input {
  width: 93px;
  height: 37px;
  color: #ffffff;
  border-radius: 25px;
  -webkit-appearance: none;
  background-color: #00bcbc;
  display: block;
  border: none;
}
.over span {
  margin-left: 4px;
  color: #00bebe;
}
.box {
  position: relative;
}
.box .delete {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  transform: translate(50%, -50%);
}
</style>
