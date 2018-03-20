<template>
  <div class='app'>
  	<form action="http://www.vrand.com.ar/blog/api.php" method="post">
  		<input id="carga" name="type" type="hidden" value="nuevopost">
  		<div class="form-group">
  			<label for="title">Titulo</label>
  			<textarea class="form-control" v-model='title' name='titulo' rows="1"></textarea>
  		</div>
  		<div class="form-group">
  			<label for="copy">Subtitulo</label>
  			<textarea class="form-control" v-model='subtitulo' name='subtitulo' rows="1"></textarea>
  		</div>
  		<div class="form-group">
  			<label for="texto">Texto</label>
  			<textarea class="form-control" v-model='texto' name='texto' rows="6"></textarea>
  		</div>
  		 <input id="carga" name="url" type="hidden" v-bind:value='url'>
  		 <button type="submit" class="btn btn-primary btn-block">Cargar</button>
  	</form>
  </div>
</template>

<script>


export default {
  name: 'nota',
  data () {
    return { 
    	title:'',
    	subtitulo:'',
    	texto:'',
    	url:document.URL
     }
  }
}

</script>

<style lang="css">
  .app {
  	min-width: 370px;
  	padding: 50px 50px 50px 50px;
    background-color: #68979B;
    color:#fff;
  }
</style>
