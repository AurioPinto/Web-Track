<template>
  <div>
    <div>
      <div class="nav-bar">
        <div class="nav-element">
          <img src="../assets/images/logo.png" alt />
          <span>Home</span>
          <span>Value Driven</span>
          <span>Library</span>
          <span>People</span>
        </div>
        <div class="icons">
          <input type="text" value="输入你的关键词" />
          <img src="../assets/images/mask.png" alt />
          <img width="19" height="19" src="../assets/images/alert.png" alt />
          <img width="32" height="32" src="../assets/images/people.png" alt />
        </div>
      </div>
    </div>
    <p>我们的愿景驱动力</p>
    <div class="block-1">
      <img width="1513" class="427" src="../assets/images/context.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "learn",
  data() {
    return {
      user: {
        name: "learn"
      }
    };
  }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 6.48%;
  padding: 10px 10px;
  background-color: #00263c;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-element {
  display: flex;
  align-items: center;
}
.nav-element span {
  margin-left: 45px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
.nav-element span:nth-child(3) {
  color: #00bebe;
}
.icons img {
  margin-left: 10px;
}
.icons {
  position: relative;
  display: flex;
  align-items: center;
}
img:nth-child(2) {
  position: absolute;
  right: 81px;
  top: 3px;
}
input {
  width: 192px;
  height: 26px;
  border-radius: 26px;
}
.icons input {
  outline: none;
  color: #999999;
  font-size: 12px;
}
input:hover {
  border: 1px dashed #00bebe;
}
.block-1 img {
  margin: 140px 202px 246px;
}
p {
  font-size: 30px;
  font-weight: 400;
  color: #00263c;
  float: right;
  margin: 60px 170px 0;
}
</style>
