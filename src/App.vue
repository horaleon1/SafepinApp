<template>
  <div id="app">
    <!-- <Navbar></Navbar>
     <h1>¿Cual es tu estado actual?</h1>
    <Principal ></Principal>
    <Problem></Problem>
    <a href>Ver mapa de zona</a>
    <img src="./assets/logo.svg" alt width="45px" height="45px"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vue from "vue";
import Principal from "./components/Principal";
import { EvaIcon } from "vue-eva-icons";
import Problem from "./components/Problem";
import Navbar from "./components/Navbar";
import Status from "./components/Status";


export default {
  name: "app",
  components: {
    Principal,
    [EvaIcon.name]: EvaIcon,
    Problem,
    Navbar,
    Status
  }
};
</script>

<style>
#app {
  width: 378px;
  height: 812px;
}


</style>
