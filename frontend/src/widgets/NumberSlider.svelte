<script>
	/**
     * An input/output number control.
	 * Can be used to show a value in a range,
	 * or as a user input or switch between input and output.
     * @component
     */

    /**
	 * The minimum value the slider can go to
     * @type {number}
     */
	export let min = -1;

    /**
	 * The maximum value the slider can go to
     * @type {number}
     */
	export let max = +1;

    /**
	 * The value of the slider
     * @type {number}
     */
	export let value = 0.0;

    /**
	 * Increments the slider can be set to
     * @type {number}
     */
	export let step = 0.0625; //default from smart dashboard
    /**
	 * Hide the numberline
     * @type {boolean}
     */
	export let hideNumbers = false;
    /**
	 * Do not show the min, max and zero buttons
     * @type {boolean}
     */
	export let hideButtons = false;

	//@todo there is a case where zero isn't a stop on the slider.
	// eg. if min or max is not an integer

	let median = (min+max)/2;

</script>

{#if !hideNumbers}
<div class="row">
	<div class="col text-center">{min}</div>
	<div class="col"></div>
	<div class="col text-center">{(min+median)/2}</div>
	<div class="col"></div>
	<div class="col text-center">{median}</div>
	<div class="col"></div>
	<div class="col text-center">{(max+median)/2}</div>
	<div class="col"></div>
	<div class="col text-center">{max}</div>
</div>
{/if}
<div class="row bb-px">
	<input type="range" class="form-range" {min} {max} {step} bind:value>
</div>
<div class="row">
	<div class="col"></div>
	<div class="col text-center">{value}</div>
	<div class="col"></div>
</div>
{#if !hideButtons}
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
{/if}

<style>
	.bb-px {
		padding: 0 36px;
	}
	.row > * {
		padding: 0;
	}
</style>