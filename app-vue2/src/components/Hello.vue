<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" class="btn btn-outline-success">Hello world!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
