<script>
    import TreeNode from "./tree-node.svelte";

    export let tree = [];
</script>

{#each tree as _node, i}
    <TreeNode node={_node} index={i} let:node let:leaf>
        <slot {node} {leaf}>
            <div class="name">NODE: {node.name} LEAF?{leaf}</div>
        </slot>
    </TreeNode>
{/each}