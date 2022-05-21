<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let resizeable = true;
    export let widthPx = 150;
    export let heightPx = 150;
    export let title = "DEFAULT TITLE";


    let expanding = false;
    let initial = {x:0,y:0,width:0,height:0};
    function startExpand(event) {
        expanding = true;
        initial.x = event.screenX;
        initial.width = widthPx;
        initial.y = event.screenY;
        initial.height = heightPx;
    }
    function stopExpand(event) {
        expanding = false;
        dispatch('expanded', {
			newWidth: widthPx,
            newHeight: heightPx,
            props: $$props,
		});
    }
    function expand(event) {
        if (!expanding) return;
        heightPx = (event.screenY - initial.y) + initial.height
        widthPx = (event.screenX - initial.x) + initial.width
    }
</script>

<!-- Catch the events no matter where it happens -->
<svelte:window on:mouseup={stopExpand} on:mousemove={expand} />

<div class="card" style="width: {widthPx}px; height: {heightPx}px; margin: 5px">
    <div class="card-header text-center">
        {title}
    </div>
    <div class="card-body h-75">
        <div class="overflow-scroll h-100">
            <slot></slot>
        </div>
        {#if resizeable}
        <i class="bi bi-filter resize-handle"
           on:mousedown={startExpand}
        ></i>
        {/if}
    </div>

</div>

<style>
    .resize-handle {
        color: #ccc;
        cursor: nwse-resize;
        transform: rotate(-45deg);
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>