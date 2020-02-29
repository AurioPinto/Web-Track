<template>
  <div class="main-page">
    <div class="first">
      <div>
        <img class="img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
        <p class="paragh">桃子(女士)</p>
      </div>
      <div class="flex-1">
        <span>预定车主</span>
        <div>
          <span>员工</span>
        </div>
      </div>
      <div class="bottom"></div>
      <div class="main-one">
        <div>
          <div class="module-1">
            <span>联系方式</span>
            <div>
              <span>15676557554</span>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
        <div>
          <div class="module-1">
            <span>已借出</span>
            <div>
              <span>5本</span>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
        <span class="next module-1">* 还可借2本</span>
        <div class="close">
          <div class="last-step">
            <p>借出</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flash",
  data() {
    return {
      user: {
        name: "flash"
      }
    };
  }
};
</script>

<style scoped>
.main-page {
  margin: 224px 271px 168px;
}
.main-page {
  display: flex;
  justify-content: center;
}
.first {
  width: 500px;
  height: 356px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
}
.img {
  border-radius: 50%;
  transform: translateY(-50%);
}
.paragh {
  height: 26px;
  font-size: 20px;
  font-weight: bold;
  margin-top: -33px;
}
.flex-1 {
  display: flex;
  justify-content: center;
}
.flex-1 {
  margin-top: 8px;
}
.bottom {
  border-bottom: 1px dotted;
  margin: 14px 25px 0;
}
.flex-1 span {
  width: 48px;
  height: 17px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: rgba(255, 255, 255, 1);
  margin-left: 5px;
}
.module-1 {
  padding: 20px 50px 20px;
}
.module-1 span {
  color: #666666;
  font-size: 14px;
}
.module-1 {
  display: flex;
  justify-content: space-between;
}
.last-step {
  width: 225px;
  height: 40px;
  background: rgba(0, 190, 190, 1);
  border-radius: 25px;
}
.last-step p {
  width: 36px;
  height: 22px;
  font-weight: 200;
  text-align: center;
  color: #ffffff;
  font-size: 17px;
  padding: 9px 94px 9px;
}
.next {
  font-weight: bold;
  font-size: 14px;
}
.close {
  display: flex;
  justify-content: center;
}
</style>
