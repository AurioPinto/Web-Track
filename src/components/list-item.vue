<template>
  <div class="item">
    <div class="top">
      <div class="user-info">
        <img src="../assets/images/berlin.png" alt />
        <p class="name">Elmer Manning</p>
      </div>
      <p class="text">有所作为是生活的最高境界。</p>
    </div>
    <div class="logo">
      <img src="../assets/images/js.png" alt />
      <img src="../assets/images/js.png" alt />
    </div>
    <div class="bottom">
      <div>
        <span class="tag">版规</span>
        <span class="i">
          <i>20评论</i>
          <i>882阅读</i>
        </span>
      </div>
      <span>1小时前</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-item",
  data() {
    return {
      msg: "Welcome to NIO West"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  color: #333;
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
}
.item .user-info {
  display: flex;
  margin-bottom: 14px;
}
.item .user-info img {
  width: 20px;
  height: 20px;
  background: #00bebe;
  margin-right: 8px;
  border-radius: 50%;
}
.item .user-info .name {
  font-size: 14px;
}
.text {
  margin-bottom: 8px;
  font-size: 17px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.bottom .tag {
  color: #00bebe;
  font-size: 11px;
}
.i i {
  margin-bottom: 6px;
  font-size: 13px;
  padding: 16px 0px;
  margin-right: 10px;
  font-style: normal;
}
.logo img {
  width: 75px;
  height: 75px;
  margin-right: 10px;
  border-radius: 2px;
  margin-top: 2px;
}
</style>
