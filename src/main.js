import Vue from 'vue';
import App from './App.vue';
import Pepe from './pepe.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
var unirest = require('unirest');

Vue.use(BootstrapVue);
Vue.use(unirest);


var apiURL ='http://www.vrand.com.ar/blog/api.php?opn=posts&callback?'

var pep = new Vue({
  el: '#pepe',
  render: h => h(Pepe)
});


var tito = new Vue({
  el: '#app',
  render: h => h(App)
});