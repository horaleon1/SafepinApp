<template>
  <div id="app">
    <Navbar></Navbar>
    <Status></Status>
    <!-- <h1>¿Cual es tu estado actual?</h1>
    <Principal ></Principal>
    <Problem></Problem>
    <a href>Ver mapa de zona</a>
    <img src="./assets/logo.svg" alt width="45px" height="45px" />-->
 
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

h1 {
  width: 70%;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 35px;
  position: absolute;
  left: 13%;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: #9d80ff;
  position: absolute;
  top: 80%;
  left: 27%;
  font-size: 20px;
  margin-top: 25px;
  font-size: 20px;
  text-decoration: underline;
}
img {
  position: absolute;
  top: 0.65%;
  left: 42%;
}
</style>
