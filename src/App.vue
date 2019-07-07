<template>
  <div id="app">
    <Navbar></Navbar>
    <h1>¿Cual es tu estado actual?</h1>
   <Principal></Principal>
   <Problem></Problem>
   <a href=""> Ver mapa de zona</a>
   <img src="./assets/logo.svg" alt="" width="45px" height="45px">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Geo from './components/Geo'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Principal from './components/Principal'
import { EvaIcon } from 'vue-eva-icons'
import Problem from './components/Problem'
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    Principal,
    [EvaIcon.name]: EvaIcon,
    Problem,
    Navbar
  },
  

}
</script>

<style>
#app{
  width:378px;
  height:812px;
}

h1{
  width: 70%;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 35px;
 position: absolute;
 left: 13%;
}
a{
  color: #9D80FF;
  position: absolute;
  top: 80%;
  left: 27%;
  font-size: 20px;
  margin-top: 25px;
  font-size: 20px;
  text-decoration: underline;
}
img{
  position: absolute;
  top:0.65%;
  left: 42%;
}
</style>
