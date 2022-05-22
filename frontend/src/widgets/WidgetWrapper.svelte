<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import * as Client from '../../wailsjs/go/goNTCore/Client.js'

    const dispatch = createEventDispatcher();

    export let resizeable = true;
    export let widthPx = 150;
    export let heightPx = 150;

    export let draggable = true;
    export let topPx = 0;
    export let leftPx = 0;
    export let title = "DEFAULT TITLE";

    export let ntKey = "";
    export let ntType = "";

    let boundCard;


    let expanding = false;
    let dragging = false;
    let initialExpand = {x: 0, y: 0, width: 0, height: 0};
    let initialDrag = {x: 0, y: 0};

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

    function mouseMove(event: MouseEvent) {
        if (expanding) {
            heightPx = (event.screenY - initialExpand.y) + initialExpand.height
            widthPx = (event.screenX - initialExpand.x) + initialExpand.width
        }
        if (dragging) {
            topPx = event.pageY - initialDrag.y;
            leftPx = event.pageX - initialDrag.x;
        }
    }

    export let value;

    (async()=>{
    if (ntKey) {
        // console.log("AddKeyListener", ntKey)
        // AddKeyListener(ntKey, (entry)=>{
        //     console.log("Listener Fired", entry)
        // });
        console.log(ntKey, ntType)

        switch (ntType) {
            case "Boolean":
                value = await Client.GetBoolean(ntKey, false)
                break;
            // case "PutBoolean":
            //     break;
            case "Double":
            case "Number":
                value = await Client.GetNumber(ntKey, -1)
                console.log("got %s for %s", value, ntKey)
                break;
            // case "PutNumber":
            //     break;
            case "String":
                value = await Client.GetString(ntKey, "")
                break;
            case "PutString":
                break;
            case "Raw":
                value = await Client.GetRaw(ntKey, [])
                break;
            case "PutRaw":
                break;
            case "BooleanArray":
                value = await Client.GetBooleanArray(ntKey, [])
                break;
            case "PutBooleanArray":
                break;
            case "NumberArray":
                value = await Client.GetNumberArray(ntKey, [])
                break;
            case "PutNumberArray":
                break;
            case "StringArray":
                value = await Client.GetStringArray(ntKey, [])
                break;
            // case "PutStringArray":
            //     break;
            case "":
                // nothing to do here. Just an empty wrapper
                break
            default:
                console.log("Unknown type! %s for %s", ntType, ntKey)
        }


    }
    })()
</script>

<!-- Catch the events no matter where it happens -->
<svelte:window on:mouseup={mouseUp} on:mousemove={mouseMove}/>

<div class="card" class:drag-handle={draggable}
     bind:this={boundCard}
     style="width: {widthPx}px; height: {heightPx}px; margin: 5px; position: absolute; top: {topPx}px; left:{leftPx}px">
    <div class="card-header text-center" on:mousedown={startMove}>
        {title}
    </div>
    <div class="card-body h-75">
        <div class="overflow-scroll h-100">
            <slot {value} {ntKey}></slot>
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