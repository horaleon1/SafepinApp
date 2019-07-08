<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vue from "vue";

export default {
  name: "app"
};
</script>

<style>
#app {
  width: 378px;
  height: 812px;
}
</style>
