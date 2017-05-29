<template>
  <div class="days">
  <h3>Days</h3>
    <ul>
      <li v-for="(day, index) in days" >
        <router-link class="nav-link" active-class="active" :to="{name: 'day', params: {id: index} } ">
          {{index + 1}}. {{day.value}}
        </router-link>
        <transition name="fade">
          <router-view></router-view>
        </transition>
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
.days li {
  list-style-type: none;
  cursor: pointer;
  margin: 2px;
}
.days li:hover {
  background-color:#40ee88;
}
  .nav-link {
    padding: 0px;
    color:#1d1e1f;
  }
</style>
