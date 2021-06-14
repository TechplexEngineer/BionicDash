<script>
	export let title = "TITLE";
	export let placeholder = "Type to search...";
	export let options = [
	    "San Francisco",
		"New York",
		"Seattle",
		{name:"Los Angeles", value:"la"},
		"Chicago",
	]
</script>

<label for="exampleDataList" class="form-label">{title}</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="{placeholder}">
<datalist id="datalistOptions">
	{#each options as option}
		{#if typeof option === "string"}
			<option value="{option}"></option>
		{:else}
			<option value="{option.value}">{option.name}</option>
		{/if}
	{/each}
</datalist>

