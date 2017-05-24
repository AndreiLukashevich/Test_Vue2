<template>
  <ul class="days">
    <li v-for="(day, index) in days">
      <router-link :to="{name: 'day', params: {id: index} }">{{day.value}}</router-link>
    </li>
  </ul>
</template>

<script>
var listDays = require('../shared/day')
export default {
  name: 'days',
  data () {
    return {
      days: listDays
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.days li {
  list-style-type: none;
  cursor: pointer;
  margin:2px;
}
.days li:hover {
  background-color: lightgreen;
}

.days li.selected {
  font-weight: bold;
  background-color: lightgreen;
}
</style>
