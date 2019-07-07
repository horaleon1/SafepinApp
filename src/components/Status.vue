<template>
  <div>
    <div class = "lightBar"></div>
    <img src="../assets/Grupo 135.png" class="globo" />
    <img src="../assets/Grupo 136.png" alt class="globo2" />
    <img src="../assets/Grupo 137.png" alt class="globo3" /> 
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background: url('../assets/mapa1.png')no-repeat;
  background-size: cover;
  height: 753px;
  width: 378px;
}
.lightBar{
 height: 70px;
 width: 378px;
 background-color: blue;
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
</style>

