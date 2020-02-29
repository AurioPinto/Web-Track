<template>
  <div class="branch">
    <div class="Rectangle">
      <div class="profile">
        <div class="first">
          <img class="img-circle" src="../assets/images/img-7.jpg" alt />
          <img class="img-icon" src="../assets/images/NIO1jpg.jpg" alt />
        </div>
        <div class="text">
          <p class="name">Raquel Haag</p>
          <p class="dep">Digital Operations China</p>
          <p class="type">ES8Model</p>
        </div>
        <div class="plus">
          <div class="title-one step">
            <div class="next-step">
              <img src="../assets/images/machine.png" alt />
              <span class="one">Machine Learning</span>
            </div>
            <span class="second">212</span>
          </div>
          <div class="over-step step">
            <div class="next-step">
              <img src="../assets/images/deep.jpeg" alt />
              <span class="digital">Deep Learning</span>
            </div>
            <span class="owner">32</span>
          </div>
          <div class="boss-1 step">
            <div class="next-step">
              <img src="../assets/images/computer.jpg" alt />
              <span class="pm-digital">Computer Vision</span>
            </div>
            <span class="own">10</span>
          </div>
          <div class="king-1 step">
            <div class="next-step">
              <img src="../assets/images/web.png" alt />
              <span class="mv-digital">Web Developer</span>
            </div>
            <div class="switch">
              cn
              <span>
                <i></i>
              </span>
              en
            </div>
          </div>
        </div>
        <!-- last step -->
        <div class="footer">
          <div class="move up">
            <img src="../assets/images/compass icon.png" alt />
            <div>
              <p class="stand">Compass</p>
            </div>
          </div>
          <div class="move-1 up">
            <img src="../assets/images/seacch icon.png" alt />
            <div>
              <p class="stand">Search</p>
            </div>
          </div>
          <div class="move-2 up">
            <img src="../assets/images/writting.jpg" alt />
            <div>
              <p class="stand">Search</p>
            </div>
          </div>
          <div class="move-3 up">
            <img src="../assets/images/chat icon.png" alt />
            <div>
              <p class="stand">Notes</p>
            </div>
          </div>
          <div class="move-4 up">
            <img src="../assets/images/tttime.jpg" alt />
            <div>
              <p class="stand">Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "branch",
  data() {
    return {
      user: {
        name: "branch"
      }
    };
  }
};
</script>

<style scoped>
.branch {
  background: url("../assets/images/bali.jpg") no-repeat center top
    rgba(249, 249, 249, 1);
  background-size: 375px 119px;
  min-height: 100vh;
  position: relative;
  padding-top: 82px;
}
.Rectangle {
  padding: 0 17px;
}
.profile {
  height: 158px;
  background-color: white;
  padding-top: 61px;
  position: relative;
  box-sizing: border-box;
}
.first {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
}
.first .img-icon {
  width: 22px;
  height: 13px;
  position: absolute;
  right: 0;
  bottom: 7.5px;
}
.img-circle {
  width: 89px;
  height: 89px;
  border-radius: 50%;
}
.profile img {
  align-content: center;
}
.text .name {
  margin-top: 17px;
  text-align: center;
}
.stand {
  align-items: center;
}
.text .dep {
  text-align: center;
  color: black;
  margin-top: 10px;
}
.text .type {
  margin-top: 15px;
  text-align: center;
  margin-bottom: 15px;
}
.step {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  font-size: 16px;
  color: #666;
  border-bottom: 1px solid #ccc;
  height: 64px;
  align-items: center;
}
.step img {
  width: 19px;
  height: 19px;
  margin-right: 19px;
}
.step .next-step {
  display: flex;
  align-items: center;
}
.footer {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
}
.up {
  text-align: center;
  color: #54585a;
}

.up img {
  width: 18px;
  height: 18px;
}
.type {
  width: 80px;
  padding: 0 10px;
  height: 19px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 13px;
  margin: 0 auto;
}

.move-2.up img {
  width: 43px;
  height: 43px;
  margin-top: -20px;
}
.switch {
  display: flex;
  align-items: center;
}
.switch span {
  position: relative;
  background-color: black;
  width: 47px;
  height: 24px;
  border-radius: 12px;
  margin: 0 5px;
}
.switch span i {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  width: 23px;
  height: 23px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.plus {
  background-color: white;
}
</style>
