<script>
	export let state = false;
</script>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" bind:checked={state}>
<!--  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>-->
</div>

<style>
	.form-check.form-switch, .form-check-input {
		width: 100%;
		height: 100%;
	}
	.form-switch .form-check-input {
		width: 100%;
	}

	:global(body, html, div#root) {
        height: 100%
    }

</style>
