<script>
    export let title = "Boolean Box";
    export let state = false;
    export let trueColor = "green";
    export let falseColor = "red";
    export let resizeable = true;
    export let widthPx = 150;
    export let heightPx = 150;

    $: color = state ? trueColor : falseColor


    let expanding = false;
    let initial = {x:0,y:0,width:0,height:0};
    function startExpand(event) {
        console.log("START", event);
        expanding = true;
        initial.x = event.screenX;
        initial.width = widthPx;
        initial.y = event.screenY;
        initial.height = heightPx;
    }
    function stopExpand(event) {
        console.log("STOP", event);
        expanding = false;
    }
    function expand(event) {
        if (!expanding) return;
        heightPx = (event.screenY - initial.y) + initial.height
        widthPx = (event.screenX - initial.x) + initial.width
        console.log("EXPAND", widthPx)
    }
</script>

<!-- Catch the events no matter where it happens -->
<svelte:window on:mouseup={stopExpand} on:mousemove={expand} />

<div class="card" style="width: {widthPx}px; height: {heightPx}px;">
    <div class="card-header text-center">
		{title}
    </div>
    <div class="card-body" style="background-color: {color}">
        {#if resizeable}
        <i
                class="bi bi-filter resize"
                on:mousedown={startExpand}
        ></i>
        {/if}
    </div>

</div>

<style>
    .card-body {
        background-color: red;
        width: 100%;
        height: 50px;
    }
    .resize {
        color: #ccc;
        cursor: nwse-resize;
        /*float: right;*/
        transform: rotate(-45deg);
        /*margin: -1rem -1rem;*/
        /*align-self: flex-end;*/
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>