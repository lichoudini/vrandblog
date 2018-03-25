<template>
  <div class='lastpost'>
    <div id='titulo'>
      <p>{{titulo}}</p>
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
  created() {
    var self = this;
    unirest.get('http://www.vrand.com.ar/blog/api.php?opn=posts')
    .end(function (response) {
      self.posts=response.body;
      self.titulo=self.posts[response.body.length -1].titulo;
      self.subtitulo=self.posts[response.body.length -1].subtitulo;
      self.texto=self.posts[response.body.length -1].texto;      
    });
  },
  data () {
    return {
      posts:[],
      titulo:'',
      subtitulo:'',
      texto:''
    }
  },
  methods:{
    postrequerido: function(quepost){
      return this.titulo =this.posts[quepost].titulo;
    }
  }
}


</script>

<style lang="css">
  .lastpost {
    padding: 50px 50px 50px 50px;
    background-color: #AA3E39;
    color:#fff;
  }
</style>
