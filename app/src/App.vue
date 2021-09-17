<template>
  <div id="app">
    <AppMainLogin />
  </div>
</template>

<script>
import AppMainLogin from './app/login/LoginMain'
export default {
  name: 'app',
  components: { AppMainLogin }
}
</script>

<style>
@import "../node_modules/font-awesome/css/font-awesome.min.css";
@import url('../node_modules/bootstrap/dist/css/bootstrap.css');
@import url('https://fonts.googleapis.com/css?family=Questrial');
body {
  background-color: #eff4f7;
}
#app {
  margin-top: 50px;
  font-family: 'Questrial', sans-serif;
}

button {
  cursor: pointer;
  background: 0;
}

.button {
  cursor: pointer;
  width: 35px;
  border: 0;
  border-radius: 0px;
  margin-top: 6px;
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  transition: opacity 800ms;
}

.button:focus, button:active {
  outline: none;
  background-color: none;
}

.button:hover {
  opacity: 0.6;
}
</style>
