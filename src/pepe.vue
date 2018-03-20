<template>
  <div class='pepe'>
    <div id='titulo'>
      <p>{{posts[1]}}</p>
    </div>
    <div id='subtitulo'>
      <p>{{subtitulo}}</p>
    </div>
    <div id='texto'>
      <p>{{texto}}</p>
    </div>
  </div>
</template>

<script>
var unirest = require('unirest');
export default {
  name:'notas',
  data () {
    return {
      posts:[],
      nombre:'hkppkpkppka'
    }
  },
  created() {
    var self = this;
    unirest.get('http://www.vrand.com.ar/blog/api.php?opn=posts')
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
  self.posts=response.body;
});
}
}


</script>

<style lang="css">
  .pepe {
    min-width: 370px;
    padding: 50px 50px 50px 50px;
    background-color: #AA3E39;
    color:#fff;
  }
</style>
