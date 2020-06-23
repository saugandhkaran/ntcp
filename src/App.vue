<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'the-header': Header
  },
}
</script>
<style lang="scss">

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
div {
  padding: 0;
  margin: 0;
}

.flex-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.between {
    justify-content: space-between
  }
  &.around {
    justify-content: space-around;
  }
  &.center {
    justify-content: center;
  }
  &.column {
    flex-direction: column;
  }
}

.form-control {
  p {
    text-align: left;
    padding: 5px 0px;
  }
  input, textarea, select {
    padding: 10px;
    min-width: 250px;
    border-radius: 6px;
    font-size: 16px;
    border: 1px solid #D9DADC;
  }
}


button {
  padding: 10px 15px;
  border-radius: 25px;
  border: 1px solid #D9DADC;
  margin: 20px 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
