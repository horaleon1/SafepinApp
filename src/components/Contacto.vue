<template>
  <div class="principal">
    <div class="cuadro">
      <div class="rojo"></div>
      <img src="../assets/images.png" alt class="user" />
      <h3>Nombre Apellido</h3>
      <h4>Primo</h4>
      <img src="../assets/more-vertical.svg" alt class="puntos" />
      <div class="phones">
        <ul>
          <li>
            <eva-icon name="phone-call" class="phoneGrey" width="15px" height="15px"></eva-icon>
          </li>
          <li>
            <h5 class="phoneNumbers">55 1020 4368</h5>
          </li>
        </ul>
      </div>
      <div class="phones2">
        <ul>
          <li>
            <eva-icon name="phone-call" class="phoneGrey" width="15px" height="15px"></eva-icon>
          </li>
          <li>
            <h5 class="phoneNumbers">55 1020 4368</h5>
          </li>
        </ul>
      </div>
      <div class="segundaListaDiv">
        <ul class="segundaLista">
          <li>Ultima Actualización</li>
          <li class="li2">
            Ver historial
            <eva-icon name="arrow-forward" width="20px" height="15px" class="arrow"></eva-icon>
          </li>
        </ul>
      </div>
      <div class="textosColores">
        <h4 class="textMorado">
          Nombre Apellido ha respondido que
          <span class="textRojo">tiene un problema</span>
        </h4>
      </div>
      <div class = "botones">
      <button class = "status">Ver Status</button>
      <button class = "acudir">Acudir</button>
      </div>
      <button class = "help">¿Necesitas Ayuda?</button>
    </div>
  </div>
</template>
 <script>
import { EvaIcon } from "vue-eva-icons";
export default {
  name: "Contacto",
  components: {
    [EvaIcon.name]: EvaIcon
  }
};
</script>

 <style scoped>
.principal {
  background-color: #b4b0b0;
  width: 378px;
  height: 812px;
}

.cuadro {
  background-color: #ffffff;
  width: 90%;
  height: 300px;
  border-radius: 5px;
  margin-left: 5%;
  position: absolute;
  top: 30%;
}
.rojo {
  background-color: #fa4047;
  width: 100%;
  height: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.user {
  width: 50px;
  height: 50px;
  margin-top: 5%;
  margin-left: 10%;
}
h3 {
  color: #2f2e57;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: -13%;
  margin-left: 29%;
  font-weight: 650;
}
h4 {
  color: #b4b0b0;
  font-size: 14px;
  letter-spacing: 1px;
  margin-left: 29%;
}
.puntos {
  margin-top: -27%;
  margin-left: 87%;
}
.phones {
  margin-left: 20%;
  margin-top: -2%;
}
.phoneGrey {
  fill: #b4b0b0;
  margin-left: -170%;
}
.phoneNumbers {
  color: #b4b0b0;
  font-size: 13px;
  font-weight: 400;
  margin-left: -25%;
  margin-top: 7%;
}
ul {
  list-style: none;
  display: inline;
}
ul li {
  float: left;
}
.phones2 {
  margin-left: 62%;
  margin-top: -10%;
}
.segundaLista {
  color: #b4b0b0;
  font-size: 11px;
}
.arrow {
  fill: #b4b0b0;
}
.segundaListaDiv {
  margin-left: 6%;
  margin-top: 12%;
}
.li2 {
  margin-left: 27%;
}
.textosColores {
  margin-left: -35%;
  margin-top: 3%;
}
.textMorado {
  font-size: 12px;
  font-weight: 400;
  color: #2f2e57;
}
.textRojo {
  font-size: 12px;
  font-weight: 400;
  color: #fa4047;
  line-height: 15px;
}
.botones{
margin-left: 4%;
margin-top: 5%;
}
.status{
border: 1px solid #2f2e57;
background-color: #ffffff;
border-radius: 3px;
width: 140px;
height: 40px;
letter-spacing: 1px;
}
.acudir{
border: 1px solid #2f2e57;
background-color: #2f2e57;
border-radius: 3px;
color:#ffffff;
width: 140px;
height: 40px;
margin-left: 5%;
letter-spacing: 1px;
}
.help{
  color:#ffffff;
  text-decoration: underline;
  margin-top: 10%;
  margin-left: 25%;
}
</style>
 