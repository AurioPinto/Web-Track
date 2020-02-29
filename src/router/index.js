import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/views/home";
import Trump from "@/views/Trump";
import West from "@/views/West";
import branch from "@/views/branch";
import nio from "@/views/nio";
import app from "@/views/app";
import digital from "@/views/digital";
import top from "@/views/top";
import blue from "@/views/blue";
import london from "@/views/london";
import china from "@/views/china";
import ios from "@/views/ios";
import log from "@/views/log";
import local from "@/views/local";
import day from "@/views/day";
import flash from "@/views/flash";
import value from "@/views/value";
import query from "@/views/query";
import sky from "@/views/sky";
// import ping from "@/views/ping";
// import file from "@/views/file";
// import node from '@/views/node'
import atom from "@/views/atom";
import flex from "@/views/flex";
// import debug from "@/views/debug";
import people from "@/views/people";
import users from "@/views/users";
// import login from "@/views/login";
import learn from "@/views/learn";
import java from "@/views/java";
import active from "@/views/active";
// import global from "@/views/global";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/Trump",
      name: "Trump",
      component: Trump
    },
    {
      path: "/West",
      name: "West",
      component: West
    },
    {
      path: "/branch",
      name: "branch",
      component: branch
    },
    {
      path: "/nio",
      name: "nio",
      component: nio
    },
    {
      path: "/app",
      name: "app",
      component: app
    },
    {
      path: "/digital",
      name: "digital",
      component: digital
    },
    {
      path: "/top",
      name: "top",
      component: top
    },
    {
      path: "/blue",
      name: "blue",
      component: blue
    },
    {
      path: "/london",
      name: "london",
      component: london
    },
    {
      path: "/china",
      name: "china",
      component: china
    },
    {
      path: "/ios",
      name: "ios",
      component: ios
    },
    {
      path: "/log",
      name: "log",
      component: log
    },
    {
      path: "/local",
      name: "local",
      component: local
    },
    {
      path: "/day",
      name: "day",
      component: day
    },
    {
      path: "/flash",
      name: "flash",
      component: flash
    },
    {
      path: "/value",
      name: "value",
      component: value
    },
    {
      path: "/query",
      name: "query",
      component: query
    },
    {
      path: "/sky",
      name: "sky",
      component: sky
    },
    // {
    //   path: "/ping",
    //   name: "ping",
    //   component: ping
    // },
    // {
    //   path: "/file",
    //   name: "file",
    //   component: file
    // },
    // {
    //   path: "/node",
    //   name: "node",
    //   component: node
    // },
    {
      path: "/atom",
      name: "atom",
      component: atom
    },
    {
      path: "/flex",
      name: "flex",
      component: flex
    },
    {
      path: "/debug",
      name: "debug",
      component: debug
    },
    {
      path: "/people",
      name: "people",
      component: people
    },
    {
      path: "/users",
      name: "users",
      component: users
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login
    // },
    {
      path: "/learn",
      name: "learn",
      component: learn
    },
    {
      path: "/java",
      name: "java",
      component: java
    },
    {
      path: "/active",
      name: "active",
      component: active
    }
    // {
    //   path: "/global",
    //   name: "global",
    //   component: global
    // }
  ]
});
