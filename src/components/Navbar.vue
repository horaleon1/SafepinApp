<template>
  <div class="principal">
    <div class="blanca">
      <img src="../assets/user.png" alt="" class = "user">
      <img src="../assets/more-vertical.svg" alt="" class = "puntos">
      <h4>Nombre Apellido</h4>
      <ul>
        <li>Mapa</li>
        <li>Grupo de Emergencia</li>
        <li>Notificaciones</li>
        <li>Numeros de Emergencia</li>
        <li>Recomendaciones</li>
      </ul>
      <button>
        <router-link to="/home">
          <div class="gris"></div>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.blanca {
  height: 812px;
  width: 100%;
  background-color: #fff;
}
.gris {
  height: 812px;
  background-color: lightgrey;
  width: 10%;
  position: absolute;
  top: 0%;
  left: 0%;
}
.user{
  height: 50px;
  width:50px;
  margin-left: 47%;
  margin-top: 10%;
}
.puntos{
  margin-left: 28%;
  margin-top: 7%
}
h4{
  margin-left: 31%;
  color:#2F2E57;
  font-size: 22px;
  margin-top:5%;
}
ul {
margin-top: 20%;
margin-left: 10%;
list-style: none;
color: #2F2E57;
}
ul li{
margin-top: 8%;
}
</style>
