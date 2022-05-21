<script>
    import Sidebar from './low-components/Sidebar.svelte'
    import DataSourcesPane from './high-components/DataSourcesPane.svelte'

    let activeId;
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import Graph from "./high-components/Graph.svelte";

    let rows = 10;
    let cols = 10;

</script>

<main class="d-flex" style="height: 100vh">

    <Sidebar bind:activeId></Sidebar>

    {#if activeId == 0}
        <DataSourcesPane></DataSourcesPane>
    {/if}


    <div class="d-flex flex-column flex-fill p-3">
        {#each Array(rows).fill(rows).map((val, idx) => idx) as r}
            <div class="row">
                {#each Array(cols).fill(cols).map((val, idx) => idx) as c}
                    <div class="col" style="border: 1px solid black">
                        <div style="padding-top: 100%">R:{r} C:{c}</div>

                    </div>
                {/each}
            </div>
        {/each}

        <!--        <Graph/>-->
    </div>


</main>

<style>
    /*@import 'bootstrap/dist/css/bootstrap.min.css';*/
    /*@import 'bootstrap-icons/font/bootstrap-icons.css';*/
</style>