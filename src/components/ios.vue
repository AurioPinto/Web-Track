  <template>
  <div>
    <button @click="onOff =true ">show</button>
    <div class="mail" v-show="onOff">
      <img class="img-mail" src="../assets/images/squad.png" alt @click="onOff = false" />
      <div class="main">
        <div>
          <span class="span">到店用户</span>
        </div>
        <div class="rectangle">
          <div class="rectangle0">
            <span>入口</span>
            <img src="../assets/images/up.png" alt />
          </div>
          <div class="rectangle1">
            <span>身份</span>
            <img src="../assets/images/up.png" alt />
          </div>
          <div class="rectangle2">
            <span>时间</span>
            <img src="../assets/images/up.png" alt />
          </div>
        </div>
      </div>
      <div class="big-one">
        <div class="step-one">
          <div class="step">
            <img class="img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>桃子女士</p>
            <div class="opp">
              <span>预定车主</span>
              <span>员工</span>
            </div>
            <div class="border"></div>
            <div class="dell">
              <span>1号门</span>
              <div>
                <span>20秒前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-1 step-one" v-for="(item,index) in 10" :key="index">
          <div class="step-1 step">
            <img class="img-1 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>葡萄女士{{index}}</p>
            <div class="opp-1 opp">
              <span>车主</span>
            </div>
            <div class="border-1 border"></div>
            <div class="dell-1 dell">
              <span>1号门</span>
              <div>
                <span>1分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>圣女果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>圣女果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="less-one">
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>牛油果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>2分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>圣女果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>圣女果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>圣女果女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="done">
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>轮胎先生</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>3分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>栀子花女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>2018-06-10 14:30:29</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/Nio.jpg" alt />
            <p>栀子花女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>2018-06-10 14:30:29</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 step-one">
          <div class="step-2 step">
            <img class="img-2 img" width="60" height="60" src="../assets/images/NIO1jpg.jpg" alt />
            <p>栀子花女士</p>
            <div class="opp-2 opp">
              <span>意向车主</span>
            </div>
            <div class="border-2 border"></div>
            <div class="dell-2 dell">
              <span>1号门</span>
              <div>
                <span>2018-06-10 14:30:29</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ios",
  data() {
    return {
      user: {
        name: "ios"
      },
      onOff: true
    };
  }
};
</script>

<style scoped>
.main {
  margin: 75px 50px 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.img-mail {
  position: absolute;
  top: 10px;
  right: 25px;
}
.step-one {
  margin: 0 50px 0;
}
.span {
  width: 132px;
  height: 42px;
  line-height: 47px;
  color: #333333;
  font-size: 33px;
  color: white;
}
.rectangle {
  display: flex;
}
.rectangle > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rectangle > div + div {
  margin-left: 10px;
}
.rectangle0 {
  width: 90px;
  height: 35px;
  background-color: #dddddd;
}
.rectangle1 {
  width: 90px;
  height: 35px;
  background-color: #dddddd;
}
.rectangle2 {
  width: 90px;
  height: 35px;
  background-color: #dddddd;
}
.step {
  width: 290px;
  height: 175px;
  background-color: white;
  text-align: center;
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.1));
}
.img {
  border-radius: 50%;
  transform: translateY(-50%);
}
.step p {
  font-weight: bold;
  text-align: center;
  margin-top: -21px;
}
.opp > span + span {
  margin-left: 5px;
}
.big-one {
  display: flex;
}
.less-one {
  margin-top: 68px;
  display: flex;
}
.done {
  display: flex;
  margin-top: 68px;
}
.opp {
  display: flex;
  justify-content: center;
}
.opp span {
  border-radius: 10px;
  background: rgba(247, 247, 248, 1);
  padding: 3px 10px 0px 8px;
  /*font-weight: bold;*/
}
.dell {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 5px 35px;
  color: [#666666, #ffff, #bbb];
}
.border {
  /*border: 1px dotted rgba(229,229,229,1);*/
  border: 1px dashed #000000;

  margin: 24px 35px 20px;
}
</style>
