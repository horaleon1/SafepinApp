<template>
<div class = "principal" >
<!-- <img src="../assets/logo.svg" alt="Logo SafePin " class="img"> -->

<!-- @click="sidebar = !sidebar" v-bind:class ="{sidebar:sidebar}" -->
<div  class ="img2" @click="sidebar">
</div>

 </div>
</template>

<script>
export default {
  name:'Navbar',
  data (){
   sidebar:false;
  },
  methods:{
   sidebar(){
    return this.background-color +white;
   }
  }
};
</script>

<style scoped>


.img {
  margin-top:2%;
  margin-left: 2.5%;
  height: 40px;
  width: 40px;
}
.img2{
  position:absolute;
  left: 89%;
  top: 3.5%;
  background: url("../assets/menu-2.svg") no-repeat;
  height: 45px;
  width:45px;
}

div{
  height: 65px;
  background-color: #9d80ff;
  width: 100%;
}
 .sidebar{
height: 812px;
width:700px;
background-color:white;
} 
</style>
