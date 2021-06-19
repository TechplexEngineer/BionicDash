<script>
	export let title = "BUTTON";
	export let state = false;


	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function clicked(event) {
		dispatch("clicked", {event, props: $$props})
    }
</script>

<button class="btn btn-primary toggle-button"
		class:btn-primary={state}
		class:btn-outline-primary={!state}
		on:click={clicked}>{title}</button>

<style>
	.toggle-button {
		width: 100%;
		height: 100%;
	}
</style>