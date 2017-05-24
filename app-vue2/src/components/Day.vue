<template>
  <div class="days">
    <h2 v-if="day">
      {{day.task}}
    </h2>
  </div>
</template>

<script>
var listDays = require('../shared/day')
export default {
  name: 'day',
  data () {
    return {
      days: listDays,
      day: null
    }
  },
  created () {
    var id = this.$route.params.id

    this.day = this.days[id]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
