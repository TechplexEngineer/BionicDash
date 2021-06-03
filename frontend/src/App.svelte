

<script>
	import Modal from 'svelte-simple-modal';
	import HelloWorld from './components/HelloWorld.svelte'
	import logo from './logo.png';

	(async () =>{
		console.log(await window.backend.basic())
	})()
</script>

<main>

	<div class="container">
		<div class="row">
			<div class="col">col1</div>
			<div class="col">col2</div>
		</div>
	</div>


</main>

<style>
</style>