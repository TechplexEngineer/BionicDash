<script lang="ts">
    import {slide} from "svelte/transition";

    export let node;
    export let index;

    let showChildren = true;
</script>

<style>
    .node .content {
        display: flex;
        align-items: center;
    }

    .node .content.haschildren:hover {
        cursor: pointer;
    }

    .node .content .button {
        width: 20px;
        height: 20px;
        transform: rotate(-90deg);
        transition: transform 0.3s;
    }

    .node .content .button.active {
        transform: rotate(0deg);
        margin-top: -5px;
    }

    .node .content .spacer {
        width: 20px;
        height: 20px;
    }

    .node .content .name {
        margin-left: 10px;
        font-size: 15px;
    }

    .children {
        margin-left: 20px;
    }

</style>

<div class="node">
    <div class="content"
         class:haschildren={node.children.length}
         on:click={() => {
            showChildren = !showChildren;
         }}
         style="overflow: hidden; position: relative"
    >
        {#if node.children.length}
            <div class="button" class:active={showChildren} style="margin-right: -20px; position: absolute;">
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                </svg>
            </div>
            <div style="margin-left: 20px;width: 100%">
                <slot {node} leaf={false}/>
            </div>
        {:else}
            <div style="margin-left: 20px;width: 100%">
                <slot {node} leaf={true}/>
            </div>
        {/if}
    </div>
    {#if node.children.length && showChildren}
        <div class="children" transition:slide|local>
            {#each node.children as _node, i}
                <svelte:self node={_node} index={i} let:node let:leaf>
                    <slot {node} {leaf}/>
                </svelte:self>
            {/each}
        </div>
    {/if}
</div>