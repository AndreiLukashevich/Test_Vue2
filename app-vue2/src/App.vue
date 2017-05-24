<template>
  <div id="app">
    <img src="./assets/logo.png">

    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/days">Days</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
