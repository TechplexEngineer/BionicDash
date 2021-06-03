<script>
	let tabs = [
		{ name: "Tree", active: true },
		{ name: "Tab 1", active: false },
		{ name: "Tab 2", active: false },
	];
	let active = "Tree";
</script>

<ul class="nav nav-tabs nav-justified mt-1">
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