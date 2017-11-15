<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <users></users>
    <!--<test msg="Hello Rufus"></test>-->
  </div>
</template>

<script>
 import Test from './components/Test'
 import Users from './components/users.vue'

export default {
  name: 'app',
  components:{
    Users,
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
