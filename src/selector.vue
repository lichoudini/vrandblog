<template>
  <div class='lastpost'>
    <ul id="listaposteos">
      <li v-for="post in posts">
        {{ post.titulo }}
    </li>
</ul>
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
    .end(function (response) {
      self.posts=response.body;
    });
  },
  methods:{
    ultimopost: function(){
      return this.posts[this.posts.length -1];
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
