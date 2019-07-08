<template>
  <div class = principal>
    <div class = "cuadro">
     <div class = "rojo"></div>
     <img src="../assets/images.png" alt="" class = "user">
     <h3>Nombre Apellido</h3>
     <h4>Primo</h4>
     <img src="../assets/more-vertical.svg" alt="" class = "puntos">
    </div>
  </div>
</template>
 <script>
export default {
  name: "Contacto"
};
</script>

 <style scoped>
 .principal{
   background-color: #B4B0B0;
   width: 378px;
   height: 812px;
 }

.cuadro{
  background-color: #FFFFFF;
  width:90%;
  height: 300px;
  border-radius: 5px;
  margin-left: 5%;
  position: absolute;
  top:30%;
}
.rojo{
  background-color: #FA4047;
  width: 100%;
  height: 18px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.user{
  width:50px;
  height: 50px;
  margin-top: 5%;
  margin-left: 10%;
}
h3{
  color:#2F2E57;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top:-13%;
  margin-left: 29%;
  font-weight: 650;
}
h4{
  color:#B4B0B0;
  font-size: 14px;
  letter-spacing: 1px;
  margin-left: 29%;
}
.puntos{
  margin-top:-27%;
  margin-left: 87%;
}
</style>
 