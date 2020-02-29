<template>
  <div class="skys">
    <div class="wifi">
      <div class="expert">
        <img width="26" height="26" src="../assets/images/Nio.jpg" alt />
        <span>Elmer Manning</span>
        <p class="p1">非常忙碌的工作，停下来想一想大约是为了理想。</p>
        <p class="p2">命运是一件很不可思议的东西。虽人各有志，往往在实现理想时会遭遇到许多困难，反而会使自己走向与志趣相反的路，而一举成功。我想我就是这样。</p>
        <img class="img" width="176" height="126" src="../assets/images/NIO1jpg.jpg" alt />
        <img class="img-1 img" width="103" height="126" src="../assets/images/Nio.jpg" alt />
      </div>
      <div class="last-main">
        <div class="last-one">
          <div>
            <span>20评论</span>
            <span>178阅读</span>
          </div>
          <div class="last-last">
            <span>40分钟前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blue",
  data() {
    return {
      user: {
        name: "blue"
      }
    };
  }
};
</script>

<style scoped>
.skys {
  flex: 1;
  background-color: white;
}
.wifi {
  padding: 17px 20px 20px;
}
.expert span {
  width: 100px;
  height: 2px;
}
.p1 {
  width: 285px;
  height: 48px;
  margin-top: 20px;
  color: #333333;
  font-weight: 200;
}
.p2 {
  width: 285px;
  height: 84px;
  margin-top: 23px;
}
.img {
  margin-top: 15px;
}
.img-1 {
  margin-left: 6px;
}
.last-one {
  display: flex;
  justify-content: space-between;
  margin-top: 39px;
  color: #999999;
}
</style>
