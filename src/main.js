import Vue from 'vue';
import App from './App.vue';
import Lastpost from './pepe.vue';
import Selector from './selector.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
var unirest = require('unirest');

Vue.use(BootstrapVue);
Vue.use(unirest);

var pep = new Vue({
  el: '#pepe',
  render: h => h(Lastpost)
});


var tito = new Vue({
  el: '#app',
  render: h => h(App)
});

var selec = new Vue({
	el: '#selector',
	render: h => h(Selector)
});