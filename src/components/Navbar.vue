<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#9D80FF">
    <a class="navbar-brand img" href="#"></a>
    <button
      class="navbar-toggler pull-left"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name:'Navbar',
};
</script>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
}
#navbar2 {
  background-color: #9d80ff;
}
.img {
  background-image: url("/Users/Horace/tiembapp/src/assets/logo.svg");
  height: 50px;
  width: 50px;
}
</style>
