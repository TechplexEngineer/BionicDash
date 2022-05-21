<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let resizeable = true;
    export let widthPx = 150;
    export let heightPx = 150;

    export let draggable = true;
    export let topPx = 0;
    export let leftPx = 0;
    export let title = "DEFAULT TITLE";

    let boundCard;


    let expanding = false;
    let dragging = false;
    let initialExpand = {x:0,y:0,width:0,height:0};
    let initialDrag = {x:0,y:0};
    function startExpand(event) {
        expanding = true;
        initialExpand.x = event.screenX;
        initialExpand.width = widthPx;
        initialExpand.y = event.screenY;
        initialExpand.height = heightPx;
    }

    function startMove(event) {
        dragging = true;
        // console.log(event.screenX, event.screenY, topPx, leftPx)
        let bounds = boundCard.parentElement.getBoundingClientRect()
        console.log(bounds)
        console.log(event.offsetX, event.offsetY, topPx, leftPx)
        initialDrag.x = event.offsetX + bounds.x;
        initialDrag.y = event.offsetY + bounds.y;
    }

    function mouseUp(event) {
        if (expanding) {
            expanding = false;
            dispatch('expanded', {
                newWidth: widthPx,
                newHeight: heightPx,
                props: $$props,
            });
        }
        if (dragging) {
            dragging = false;
            dispatch('dragging', {
                newTop: topPx,
                newLeft: leftPx,
                props: $$props,
            });
        }
    }
    function mouseMove(event:MouseEvent) {
        if (expanding) {
            heightPx = (event.screenY - initialExpand.y) + initialExpand.height
            widthPx = (event.screenX - initialExpand.x) + initialExpand.width
        }
        if (dragging) {
            topPx = event.pageY - initialDrag.y;
            leftPx = event.pageX - initialDrag.x;
        }
    }
</script>

<!-- Catch the events no matter where it happens -->
<svelte:window on:mouseup={mouseUp} on:mousemove={mouseMove} />

<div class="card" class:drag-handle={draggable}
     bind:this={boundCard}
     style="width: {widthPx}px; height: {heightPx}px; margin: 5px; position: absolute; top: {topPx}px; left:{leftPx}px">
    <div class="card-header text-center" on:mousedown={startMove}>
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
    .drag-handle {
        cursor: grab;
    }
</style>