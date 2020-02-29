<template>
  <div class="hello">
    <div class="tab_bar">
      <span>推荐</span>
      <span>最新</span>
    </div>

    <div class="list">
      <!--<list-item v-for="($list,index) in list"></list-item>-->
    </div>
   </div>
</template>

<script>
import listItem from '../components/list-item'

export default {
  name: 'home',
  data: function () {
    return {
      list: [
        1, 2, 3, 4
      ],
      msg: 'Welcome to NIO West'
    }
  },
  components: {
    listItem
  }
}
</script>

<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .tab_bar{
      background:#fff;
      font-size:26px;
      color:#333;
      height:63px;
      margin-bottom: 10px;

  }
.list{
  background-color: white;
  padding:0 25px;
}
.list ul{
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
  .p{
    background: #00BCBC;
    margin-top:20px;

  }
  .p1{
    background: #fff;
    font-size: 18px;
    color:black;
  }
  .div{
    width:750px;
    height:1334px;
    background:rgba(255,255,255,1);
  }
  .west{
    background-color: #fff;
  }
  .west1{
    width:191px;
    height:20px;
    font-size:20px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:20px;
    border-bottom: #00BCBC;

  }
  .west2{
    height: 29px;
    width: 325px;
    font-size: 20px;
    color:black;
    float:left;
  }
  .west3{
    width:62px;
    height:29px;
    border-radius:2px;
    border:1px solid;
  }
 .pinto{
   background-color: #fff;
 }
 .pinto1{
   width:44px;
   height:30px;
   font-size:22px;
   color:rgba(0,190,190,1);

 }
 .pinto2{
   width:325px;
   height:29px;
   font-size:20px;
   float: left;

 }

  </style>
