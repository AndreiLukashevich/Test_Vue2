<template>
  <div id="app">

    <h1 class="titleApp">
  	  Vue 2
    </h1>

    <nav>
      <router-link to="/home" class="btn btn-success btn-sm">Home</router-link> 
      <router-link to="/days" class="btn btn-success btn-sm">Days</router-link>
    </nav>
    <br />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  h1.titleApp {
      padding: 0 0 20px 65px;
      background: url('./assets/logo.png') no-repeat;
  }
  #app {
    margin: 20px 10px;
}
  
</style>
