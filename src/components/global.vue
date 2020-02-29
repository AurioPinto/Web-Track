<template>
  <div class="main-one">
    <div class="nav-bar">
      <div class="p">
        <img src="../assets/images/logo.png" alt />
        <div class="router">
          <router-link to="/首页">首页</router-link>
          <router-link to="/价值驱动">价值驱动</router-link>
          <router-link to="/图书馆">图书馆</router-link>
          <router-link to="/伙伴">伙伴</router-link>
        </div>
      </div>
      <div class="img">
        <div>
          <img width="19" height="19" src="../assets/images/alert.png" alt />
        </div>
        <div>
          <img width="32" height="32" src="../assets/images/people.png" alt />
        </div>
      </div>
    </div>
    <div class="display">
      <div class="search-1">
        <input class="search" type="text" placeholder="Search" />
        <img width="15" height="16" class="search-pic" src="../assets/images/icon_search.png" alt />
      </div>
    </div>
    <div class="box-box">
      <div class="profile-pp" v-show="onOff">
        <img class="btn" src="../assets/images/btn_closed.png" alt @click="onOff = false" />
        <div class="profile">
          <img :src="currentPeople.avatar" alt />
          <div class="paragh">
            <P>{{currentPeople.cnName}}</P>
            <P>{{currentPeople.enName}}</P>
            <P>数字运营部中国</P>
          </div>
        </div>
        <div class="first-buttom">
          <p class="lol">
            <span>基本信息</span>
          </p>
        </div>
        <div class="text-box">
          <p class="bold">邮件</p>
          <p>{{currentPeople.邮件}}</p>
        </div>
        <div>
          <p class="bold">电话</p>
          <p>{{currentPeople.电话}}</p>
        </div>
        <div>
          <p class="bold">汇报</p>
          <p>{{currentPeople.汇报}}</p>
        </div>
        <div>
          <p class="bold">地点</p>
          <p>shanghai-CN</p>
        </div>
        <div>
          <p class="bold">员工编号</p>
          <p>{{currentPeople.员工编号}}</p>
        </div>
        <div>
          <p class="bold">毕业院校</p>
          <p>{{currentPeople.毕业院校}}</p>
        </div>
        <div>
          <p class="bold">前公司</p>
          <p>{{currentPeople.前公司}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "global",
  data() {
    return {
      user: {
        name: "global"
      },
      person: [
        {
          avatar: "../assets/images/west-bj.jpg",
          cnName: "斯提凡",
          enName: "Pinto West",
          邮件: "aurio.pinto@nio.com",
          电话: "+86 18717897971",
          前公司: "Microsoft",
          汇报: "Andy Lu",
          毕业院校: "Tongji University",
          员工编号: "0182638"
        }
      ],
      currentPeople: {},
      onOff: false
    };
  },
  methods: {
    showInfo(person) {
      console.log(person);
      this.currentPeople = person;
      this.onOff = true;
    }
  }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 70px;
  background-color: #00263c;
}
.nav-bar {
  display: flex;
  justify-content: space-around;
}
.p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.p .router a {
  margin: 45px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: PingFangSC-Semibold;
  text-decoration: none;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img img {
  margin: 10px;
}
.display {
  margin: 40px 170px 50px;
}
.search {
  width: 25%;
  height: 4.44%;
  background: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 12px 32px 12px;
  box-shadow: 0px 4px 8px 0px rgba(84, 88, 90, 0.08);
  outline: none;
}
.search:hover {
  border: 1px solid #00bebe;
}
.search-1 img:nth-child(2) {
  position: absolute;
  right: 1138px;
  top: 11px;
}
.search-1 {
  display: flex;
  position: relative;
}

.profile-pp {
  width: 18.75%;
  height: 729px;
  background-color: #ffffff;
  margin-top: 18px;
  position: relative;
}

.btn {
  position: absolute;
  top: 16px;
  right: 20px;
}

.profile-pp {
  padding: 30px 30px 0;
}
</style>
