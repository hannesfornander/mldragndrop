<template>
  <div id="app">
    <div class="page-head">
      <h1>DragNDrop</h1>
    </div>
    <MainColumns />
  </div>
</template>

<script>
import MainColumns from './components/MainColumns.vue'

export default {
  name: 'App',
  components: {
    MainColumns
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.page-head {
  text-align: center;
  border-bottom: 5px solid black;
}

.column-head {
  text-align: center;
  border-bottom: 5px solid black;
}

body {
  margin: 0;
}

</style>
