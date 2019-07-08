<template>
  <div>
    <div class="navbar">
      <img src="../assets/logo.svg" alt width="35px" height="35px" class="logo" />
    </div>
    <button class="menu">
      <router-link to="/navbar">
        <img src="../assets/menu-2.svg" alt="Menu derecho" class="menuDerecho" />
      </router-link>
    </button>
    <h1>¿Cual es tu estado actual?</h1>
    <button>
      <router-link to="/status">
        <div class="botonVerde">
          <eva-icon name="heart" class="ok" height="80px" width="80px"></eva-icon>
        </div>
      </router-link>
    </button>
    <h3 class="text">Estoy bien!</h3>
    <button>
      <router-link to="/status">
        <div class="botonRojo">
          <eva-icon name="alert-triangle" class="ok2" width="80px" height="80px"></eva-icon>
          <h3 class="text2">Tengo un Problema</h3>
        </div>
      </router-link>
    </button>
    <button>
      <router-link to="/status" class="link3">Ver mapa de zona</router-link>
    </button>
  </div>
</template>


<script>
import { EvaIcon } from "vue-eva-icons";
export default {
  name: "Home",
  components: {
    [EvaIcon.name]: EvaIcon
  }
};
</script>


<style scoped>
div {
  font-family: sans-serif;
}
.navbar {
  height: 80px;
  background-color: #3e4270;
}
h1 {
  width: 70%;
  margin-top: 20px;
  margin-left: 70px;
  margin-bottom: 10px;
  font-size: 35px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 550;
  color: #2f2e57;
  line-height: 48px;
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
  margin-left: 42%;
}
.ok {
  fill: white;
  margin-left: 5px;
  margin-top: 45px;
}
.ok2 {
  fill: white;
  margin-top: 45px;
}

.botonVerde {
  border-radius: 50%;
  background-color: #7bfdad;
  height: 200px;
  width: 200px;
  box-shadow: 0px -1px 5px black;
  margin-top: -430px;
  margin-left: -9px;
}
.text {
  color: #3e4270;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 160px;
  left: 42%;
  position: absolute;
}
.text2 {
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin-top: 10px;
}
.botonRojo {
  border-radius: 50%;
  background-color: #fa4047;
  height: 200px;
  width: 200px;
  box-shadow: 0px -1px 5px black;
  margin-top: -190px;
  margin-left: -9px;
}
button .link3 {
  color: #2f2e57;
  margin-top: 70px;
  margin-left: 10px;
  font-size: 19px;
}
.menuDerecho {
  height: 35px;
  width: 35px;
}
.menu {
  position: absolute;
  left: 79%;
  top: 0.01%;
}
.logo {
  margin-left: 155px;
}
</style>
