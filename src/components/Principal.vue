<template>
  <div>
    <eva-icon name="heart" class="ok" height="60px" width="60px"></eva-icon>
    <button><router-link to="/status">Estoy bien!</router-link></button>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";

export default {
  name: "Principal",
  components: {
    [EvaIcon.name]: EvaIcon
  },
  methods: {
    toUrl() {
      console.log("aqui estoy");
    }
  }
};
</script>

<style scoped>
.ok {
  position: absolute;
  left: 33%;
  top: 24%;
  fill: white;
}

div {
  border-radius: 50%;
  background-color: #7bfdad;
  height: 180px;
  width: 180px;
  position: relative;
  left: 24%;
  top: 1%;
  margin-top: 145px;
  box-shadow: 0px 0px 5px;
}
h3 {
  color: white;
  font-size: 24px;
  position: absolute;
  left: 18%;
  top: 63%;
}
</style>

