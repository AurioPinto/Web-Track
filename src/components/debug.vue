<template>
  <div>
    <div class="one-main">
      <div class="first-img">
        <img width="150" height="122" src="../assets/images/me.png" alt />
      </div>
      <div class="paragh">
        <p>维护中，稍等片刻…</p>
        <p>稍后再来</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "debug",
  data() {
    return {
      user: {
        name: "debug"
      }
    };
  }
};
</script>
<style scoped>
.first-img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80%;
}
.paragh {
}
p:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 56px;
  color: rgba(84, 88, 90, 1);
}
.paragh p:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #999999;
  /*padding-top: 20px;*/
}
</style>
