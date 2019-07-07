<template>
  <div>
  <eva-icon name="alert-triangle" width="60px" height = "60px" v-on:click="tourl" class = "ok" ></eva-icon>
  <h3>Tengo un Problema</h3>
  </div>
</template>

<script>
import { EvaIcon } from 'vue-eva-icons'

export default {
  name: "Problem",
  data: {},
  components:{
   [EvaIcon.name]: EvaIcon
  },
  methods: {
    tourl() {
      console.log("aqui estoy");
    }
  }
};
</script>

<style scoped>
.ok {
position: absolute;
left: 33.5%;
top: 20%;
fill: white;
}

div{
  border-radius: 50%;
  background-color: #FA4047;
  height: 180px;
  width: 180px;
  position: relative;
  left: 23%;
  top: 3%;
 margin-top: 35px;
 box-shadow: 0px 0px 6px;
}
h3{
  color:white;
  font-size: 15px;
  position: absolute;
  top: 65%;
  left: 13%;
}

</style>