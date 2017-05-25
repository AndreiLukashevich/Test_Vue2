<template>
  <div class="days">
  <div v-if="day">
    <h2>Selected Day</h2>
    Value: {{day.value}} <br />

    <label for="task">Task</label>
    <input type="text" class="form-control col-md-3" id="task" v-model="day.task" required disabled>

    <br />
    <button id="goBack" v-on:click="goBack('/days')" class="btn btn-outline-success">Go Back</button>
    <button id="editTask" v-on:click="editTask(getInput())" class="btn btn-outline-success">Edit</button>
    <button v-if="editSave" id="saveTask" v-on:click="saveTask(getInput())" class="btn btn-outline-success">Save</button>
    </div>
</div>

</template>

<script>
var listDays = require('../shared/day')
export default {
  name: 'day',
  methods: {
    goBack: function (path) {
      this.$router.push(path)
    },
    editTask: function (input) {
      if (input.hasAttribute('disabled')) {
        input.removeAttribute('disabled')
      }
      this.editSave = true
    },
    saveTask: function (input) {
      if (!input.hasAttribute('disabled')) {
        input.setAttribute('disabled', 'disabled')
      }
      this.editSave = false
    },
    getInput: function () {
      return document.getElementsByTagName('input')[0]
    }
  },
  data () {
    return {
      days: listDays,
      day: null,
      editSave: false
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
