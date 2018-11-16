<template>
  <div id="app">
  	 
   <!-- <img src="./assets/logo.png">-->
       <my-head ></my-head>
       <router-view/>  
       <hr />
       <my-footer></my-footer>
  </div>
</template>

<script>
	import Head from './components/Head'
	import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
  	'my-head':Head,
  	'my-footer':Footer
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
