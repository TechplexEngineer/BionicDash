<script>
    import Tree from "../low-components/tree.svelte";

    $: tree = [];

    let filter = "";

    (async () => {
        let keys = await window.backend.Client.GetSnapshot("");
        keys = keys.sort()
        let level = {tree};

        keys.forEach(path => {
            path.key.split('/').reduce((r, name, i, a) => {
                if (name === "") {
                    return r
                }
                if (!r[name]) {
                    r[name] = {tree: []};
                    const obj = {
                        name,
                        path: path.key,
                        value: path.value,
                        children: r[name].tree
                    };
                    r.tree.push(obj)
                    tree = tree;  // make the reactivity work
                }

                return r[name];
            }, level)
        })
        tree = tree; // make the reactivity work
        // console.log(JSON.stringify(tree, null, 4))

    })();
</script>

<div class="d-flex flex-column mt-2 bg-light border-end" style="max-height: 100vh; overflow-y: scroll">
    <div>
        <h2 class="text-center fs-5">Data Sources</h2>
    </div>
<!--    <button class="btn btn-primary">Toggle Hidden Entries</button>-->
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Filter List" bind:value={filter}>
        <label for="floatingInput">Filter List</label>
    </div>

    <Tree {tree} let:node>
        {#if node.path.toLowerCase().includes(filter.toLowerCase())}
        <div class="name" title="{node.path}">
            {node.name}
            <div class="float-end">
                {node.value}
            </div>
        </div>
        {/if}
    </Tree>
</div>