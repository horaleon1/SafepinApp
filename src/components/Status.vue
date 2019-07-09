<template>
  <div>
    <div class="navbar">
      <button class="logo">
        <router-link to="/home">
          <img src="../assets/logo.svg" alt width="35px" height="35px" />
        </router-link>
      </button>
    </div>
    <div class="lightBar">
      <h4>+4 Personas de tu Grupo</h4>
      <img src="../assets/circle-512.png" alt class="usersCircle1" />
      <img src="../assets/circle-512.png" alt class="usersCircle2" />
      <img src="../assets/circle-512.png" alt class="usersCircle3" />
      <img src="../assets/circle-512.png" alt class="usersCircle4" />
    </div>
    <img src="../assets/mapa1.png" alt class="mapa" />
    <button class="menu">
      <router-link to="/navbar">
        <img src="../assets/menu-2.svg" alt="Menu derecho" class="menuDerecho" />
      </router-link>
    </button>
    <button>
      <router-link to="/contacto">
        <img src="../assets/Grupo 135.png" class="globo" />
      </router-link>
    </button>

    <img src="../assets/Grupo 136.png" alt class="globo2" />
    <img src="../assets/Grupo 137.png" alt class="globo3" />


<!-- 
    <button @click="modal = !modal" class = "prueba">hola</button>
    <div class = "modal" v-if="modal">
     <h3>modal</h3>
    </div> -->


  </div>
  
</template>

<script>
export default {
  name: "status",
  data:{
    modal:false,
  },
  methods: {
    modalTrue: function(){
      modal:true;
    }
  },
};
</script>

<style scoped>
.navbar {
  height: 80px;
  background-color: #3e4270;
}
.mapa {
  height: 732px;
  width: 378px;
}
.lightBar {
  height: 80px;
  width: 378px;
  background-color: #3e4270;
  opacity: 0.45;
  position: absolute;
}
.globo {
  height: 75px;
  width: 75px;
  position: absolute;
  top: 30%;
  left: 50%;
}
.globo2 {
  height: 75px;
  width: 75px;
  position: absolute;
  top: 50%;
  left: 20%;
}
.globo3 {
  height: 75px;
  width: 75px;
  position: absolute;
  top: 70%;
  left: 60%;
}
.menu {
  position: absolute;
  left: 87%;
  top: 3%;
}
.logo {
  margin-left: 43%;
}
h4 {
  color: #fff;
  font-size: 14px;
  margin-top: 8.5%;
  position: absolute;
  left: 48%;
}
.usersCircle1 {
  height: 40px;
  widows: 40px;
  margin-top: 5%;
  margin-left: 13%;
}
.usersCircle2 {
  height: 40px;
  widows: 40px;
  margin-top: 5%;
  margin-left: -4%;
}
.usersCircle3 {
  height: 40px;
  widows: 40px;
  margin-top: 5%;
  margin-left: -4%;
}
.usersCircle4 {
  height: 40px;
  widows: 40px;
  margin-top: 5%;
  margin-left: -4%;
}
.modal{
  height: 100px;
  width:100px;
}
.prueba{
  position:absolute;
  top: 30%;
}
</style>

