

<script>
	import Modal from 'svelte-simple-modal';
	import HelloWorld from './components/HelloWorld.svelte'

	(async () =>{
		console.log(await window.backend.basic())
	})()

	let tabs = [
		{ name: "Tree", active: true },
		{ name: "Tab 1", active: false },
		{ name: "Tab 2", active: false },
	];
	let active = "Tree";


	import Tree from "./components/tree.svelte";
    $: tree = [];

	(async (t) => {
	    let keys = await window.backend.Client.GetKeys("");
		keys = keys.sort()
        let level = {tree};

        keys.forEach(path => {
            path.split('/').reduce((r, name, i, a) => {
                if(!r[name]) {
                    r[name] = {tree: []};
                    const obj = {name, children: r[name].tree};
                    if (name === "") { obj.name="Root" }
                    r.tree.push(obj)
                }

                return r[name];
            }, level)
        })
		tree = tree; // make the reactivity work
		console.log(JSON.stringify(tree, null, 4))

	})(tabs);
	tabs.push({ name: "Tab 2", active: false })

</script>

<main>

	<ul class="nav nav-tabs mt-1">
		{#each tabs as tab}
		<li class="nav-item">
			<a class="nav-link"
			   class:active={tab.name == active}
			   href="#"
			   on:click={() => active = tab.name}
			>
				{tab.name}
			</a>
		</li>
		{/each}
	</ul>


	<div class="container mt-2">
		<div class="row">
			<div class="col">
                <Tree {tree} let:node>
                    <div class="name">{node.name}</div>
                </Tree>
			</div>
			<div class="col"></div>
		</div>
	</div>


</main>

<style>
</style>