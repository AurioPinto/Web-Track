<template>
  <div>
    <div class="main">
      <img width="81" height="30" src="../assets/images/other-nio.jpg" alt />
      <div class="search">
        <input type="text" value="输入你的关键词" />
        <img src="../assets/images/mask.png" alt />
      </div>
    </div>
    <div class="line-box">
      <div class="box">
        <img width="96" height="96" src="../assets/images/fill-1.png" alt />
        <p>Fresh Services</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-2.png" alt />
        <p>Pulse</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-3.png" alt />
        <p>Workflow</p>
      </div>
      <div class="box">
        <img width="96" height="96" src="../assets/images/fill-4.png" alt />
        <p>Work Day</p>
      </div>
    </div>
    <div class="line-box">
      <div>
        <img width="96" height="96" src="../assets/images/fill-5.png" alt />
        <p>plm</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-6.png" alt />
        <p>Recruiting System</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-7.png" alt />
        <p>Appadmin</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-8.png" alt />
        <p>Vomadmin</p>
      </div>
    </div>
    <div class="line-box">
      <div>
        <img width="96" height="96" src="../assets/images/fill-9.png" alt />
        <p>Fresh Services</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-10.png" alt />
        <p>Pulse</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-5.png" alt />
        <p>Workflow</p>
      </div>
      <div>
        <img width="96" height="96" src="../assets/images/fill-10.png" alt />
        <p>Work Day</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "java",
  data() {
    return {
      user: {
        name: "java"
      }
    };
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  padding-top: 24px;
}
input {
  height: 18px;
  font-size: 12px;
  color: #999999;
  padding-left: 15px;
}
.search input {
  width: 236px;
  outline: none;
  height: 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
}
.search {
  position: relative;
}
.search img {
  position: absolute;
  right: 8px;
  top: 4px;
}
.line-box {
  display: flex;
  justify-content: space-around;
  margin-top: 127px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}
.box {
  box-shadow: 0px 10px 22px 0px rgba(0, 38, 60, 0.15);
}
</style>
