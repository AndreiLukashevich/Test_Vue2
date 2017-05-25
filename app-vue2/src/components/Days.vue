<template>
  <div class="days">
  <h3>Days</h3>
    <ul>
      <li v-for="(day, index) in days" >
        <router-link :to="{name: 'day', params: {id: day.id} }">{{index + 1}}. {{day.value}}</router-link>
      </li>
    </ul>
  </div>
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
.days ul {
  margin: 10px;
}
.days li {
  list-style-type: none;
  cursor: pointer;
  margin: 2px;
}
.days li:hover {
  background-color: lightgreen;
}

.days li.selected {
  font-weight: bold;
  background-color: lightgreen;
}
</style>
