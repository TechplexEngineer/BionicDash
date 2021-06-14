<script>
	export let title = "BUTTON";


	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function clicked(event) {
		dispatch("clicked", {event, props: $$props})
    }
</script>

<button class="btn btn-primary toggle-button" on:click={clicked}>{title}</button>

<style>
	.toggle-button {
		width: 100%;
		height: 100%;
	}
</style>