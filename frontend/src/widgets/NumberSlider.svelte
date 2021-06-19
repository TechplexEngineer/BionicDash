<script>
	export let min = -1.0;
	export let max = +1.0;
	export let value = 0.0;
	export let step = 0.1;

	//@todo there is a case where zero isn't a stop on the slider.
	let arr = [];
	// let range = Math.abs(min)+Math.max(max)
	// let markers = range/step+1;
	for (let i=min; i<=max; i+=step) {
	    // handle negative zero
	    arr.push(i.toFixed(1)==0?0:i.toFixed(1))
	}
	// console.log(markers)
	// let arr = Array.from(Array(markers).keys())
</script>

<div class="row">
	{#each arr as v}
	<div class="col text-center">{v}</div>
	{/each}
</div>
<div class="row bb-px">
	<input type="range" class="form-range" {min} {max} {step} bind:value>
</div>
<div class="row">
	<div class="col"></div>
	<div class="col text-center">{value}</div>
	<div class="col"></div>
</div>
<div class="row">
	<div class="col text-start">
		<button class="btn btn-primary" on:click={()=>{value=min}}>Min ({min})</button>
	</div>
	<div class="col text-center">
		{#if (min <= 0 && 0 <= max)}
			<button class="btn btn-primary" on:click={()=>{value=0}}>Zero</button>
		{/if}
	</div>
	<div class="col text-end">
		<button class="btn btn-primary" on:click={()=>{value=max}}>Max ({max})</button>
	</div>
</div>


<style>
	.bb-px {
		padding: 0 20px;
	}
	.row > * {
		padding: 0;
	}
</style>