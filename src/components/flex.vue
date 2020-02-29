<template>
  <div class="page">
    <div class="main-main">
      <div>
        <div class="move">
          <span>无待审状态</span>
        </div>
        <div class="first-step one">
          <div class="move-1">
            <span>待审(8)</span>
            <span>待做(5)</span>
            <span>待阅(7)</span>
          </div>
          <div>
            <center>
              <img width="144" height="100" src="../assets/images/Group (2).png" alt />
            </center>
            <img width="97" height="18" src="../assets/images/textas.png" alt />
          </div>
          <div class="footer">
            <p>新建待办</p>
          </div>
        </div>
      </div>
      <div>
        <div class="move">
          <span>无待做状态</span>
        </div>
        <div class="first-step one">
          <div class="move-1">
            <span>待审(8)</span>
            <span>待做(5)</span>
            <span>待阅(7)</span>
          </div>
          <div>
            <center>
              <img width="144" height="100" src="../assets/images/Group (2).png" alt />
            </center>
            <img width="97" height="18" src="../assets/images/textas.png" alt />
          </div>
          <div class="footer">
            <p>新建待办</p>
          </div>
        </div>
      </div>
      <div>
        <div class="move">
          <span>无待阅状态</span>
        </div>
        <div class="first-step one">
          <div class="move-1">
            <span>待审(8)</span>
            <span>待做(5)</span>
            <span>待阅(7)</span>
          </div>
          <div>
            <center>
              <img width="144" height="100" src="../assets/images/Group (2).png" alt />
            </center>
            <img width="97" height="18" src="../assets/images/textas.png" alt />
          </div>
          <div class="footer">
            <p>新建待办</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flex",
  data() {
    return {
      user: {
        name: "flex"
      }
    };
  }
};
</script>

<style scoped>
.page {
  margin: 10.12% 24.08% 17.05%;
}
.first-step {
  width: 336px;
  height: 457px;
  margin-top: 11px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  background-color: #ffffff;
}
.move span {
  height: 36px;
  font-size: 24px;
  font-weight: 300;
  color: #000000;
  line-height: 36px;
}
.move-1 span {
  height: 24px;
  font-size: 16px;
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05); */
  /* border-radius: 6px; */
}
.move-1 span:first-child {
  color: #00bebe;
}
.first-step img:first-child {
  margin-top: 101px;
}
.first-step img:nth-child(2) {
  margin-top: 11px;
  padding: 11px 108px 121px;
}
.main-main {
  display: flex;
}
.main-main,
div {
  margin-right: 26px;
}
.main-main,
span,
span {
  margin-right: 21px;
}
.one {
  padding: 20px 20px 101px;
}
.footer {
  border-top: 1px solid #e5e5e5;
  margin: 93px 0 0;
}
.footer p {
  text-align: center;
  margin-top: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
</style>
