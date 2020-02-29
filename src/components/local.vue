<template>
  <div>
    <button @click="onOff = true">show</button>
    <div class="link" v-show="onOff">
      <div class="link-1">
        <img class="squad" src="../assets/images/squad.png" alt @click="onOff = false" />
        <div class="first">
          <img class="img" width="85" height="85" src="../assets/images/Nio.jpg" alt />
          <p class="paragh">桃子女士</p>
          <div class="text">
            <span>预定车主</span>
            <span>员工</span>
          </div>
        </div>
        <div class="main-point">
          <div class="second">
            <div class="rectangle">
              <span>车辆信息</span>
              <p>ES8创始版 NO.0083</p>
            </div>
            <div class="paragh1 rectangle">
              <span>今日预约</span>
              <p>咖啡讲堂 | 11:00-13:00</p>
            </div>
          </div>
          <div class="main">
            <div class="none-point first-point">
              <span>Fellow</span>
              <div>
                <span>王一名</span>
              </div>
            </div>
            <div class="first-point">
              <span>生日</span>
              <div>
                <span>09-18</span>
              </div>
            </div>
            <div class="last-point first-point">
              <div class="over-last first-point">
                <span>手机号</span>
                <div>
                  <span>15573285854</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mode">
        <div class="table">
          <div class="one">
            <div class="one-one">
              <span>标签</span>
              <div>
                <img src="../assets/images/nio-icon.png" alt />
              </div>
            </div>
            <p class="table-paragh">互联网 | 程序员 | 年薪百万</p>
          </div>
        </div>
        <div class="table">
          <div class="one">
            <div class="one-one">
              <span>口味</span>
              <div>
                <img src="../assets/images/nio-icon.png" alt />
              </div>
            </div>
            <p class="table-paragh">咖啡少糖 | 多奶</p>
          </div>
        </div>
        <div class="table">
          <div class="one">
            <div class="one-one">
              <span>社会关系</span>
              <div>
                <img src="../assets/images/nio-icon.png" alt />
              </div>
            </div>
            <p class="table-paragh">丈夫：王一博 | 儿子：王晓成</p>
          </div>
        </div>
      </div>
      <div class="over">
        <div class="dot-dot">
          <div class="over-1">
            <span>历史足迹</span>
            <div class="img-text">
              查看全部
              <img class="img" width="6" height="15" src="../assets/images/slah.png" alt />
            </div>
          </div>
          <div class="one-over over-1">
            <p>图书管理 | 归还图书《从你的全世界路过》</p>
            <div class="dope">
              <p>2018-09-09 18:30:27</p>
            </div>
          </div>
          <div class="bottom"></div>
          <div class="one-over over-1">
            <p>图书管理 | 归还图书《从你的全世界路过》</p>
            <div class="dope">
              <p>2018-09-09 18:30:27</p>
            </div>
          </div>
          <div class="bottom"></div>
          <div class="one-over over-1">
            <p>图书管理 | 归还图书《从你的全世界路过》</p>
            <div class="dope">
              <p>2018-09-09 18:30:27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "local",
  data() {
    return {
      user: {
        name: "local"
      },
      onOff: true
    };
  }
};
</script>

<style scoped>
.link {
  margin: 118px 0 0;
}
.link-1 {
  background-color: white;
  position: relative;
}
.first {
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
.text {
  display: flex;
  justify-content: center;
}
.text span {
  margin-top: 10px;
  border-radius: 10px;
  background: rgba(247, 247, 248, 1);
  padding: 3px 10px 0px 8px;
}
.text > span + span {
  margin-left: 10px;
}
.rectangle {
  flex: 1;
  height: 59px;
  background-color: #f0fcfc;
}
.rectangle span {
  width: 56px;
  height: 14px;
  font-weight: bold;
  padding: 15px 15px 25px;
}
.none-point {
  display: flex;
  justify-content: space-between;
}
.rectangle p {
  padding: 15px 15px 25px;
}
.rectangle:last-child {
  margin-left: 26px;
}
.main-point {
  padding: 25px 48px 10px;
}
.second {
  display: flex;
  justify-content: space-between;
}
.main {
  display: flex;
  justify-content: space-between;
}
.first-point {
  display: flex;
  align-items: center;
  padding: 0 15px 0;
}
.first-point {
  flex: 1;
  height: 40px;
  margin-top: 10px;
  background-color: #fbfbfb;
}
.first-point + .first-point {
  margin-left: 27px;
}
.table {
  margin: 20px 50px 20px;
}
.table {
  /*width: 480px;*/
  height: 99px;
  background-color: #ffffff;
}
.table {
  flex: 1px;
  align-items: center;
  padding: 0 15px 0;
}
.table + .table {
  margin-left: 26px;
}
.one-one {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 25px;
}
.one-one span {
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
}
.table-paragh {
  width: 260px;
  height: 20px;
  font-size: 14px;
  padding: 0 13px 25px;
  color: #666666;
}
.mode {
  display: flex;
}
.dot-dot p {
  margin-top: 5px;
}
.over {
  margin: 20px 50px 16px;
}
.over {
  /*width: 924px;*/
  height: 191px;
  background-color: white;
}
.over-1 {
  padding: 15px 15px 25px;
}
.over-1 {
  display: flex;
  justify-content: space-between;
}
.over-1 {
  font-weight: 200;
  font-size: 14px;
  color: #666666;
  margin-top: -14px;
}
.one-over {
  display: flex;
  justify-content: space-between;
}
.bottom {
  border-bottom: 1px solid #ccc;
  margin: -10px 15px 10px;
}
.squad {
  position: absolute;
  right: 50px;
  top: 36px;
}
.first-point {
  display: flex;
  justify-content: space-between;
}
.over-last {
  display: flex;
  justify-content: space-between;
}
</style>
