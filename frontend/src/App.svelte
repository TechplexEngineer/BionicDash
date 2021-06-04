<script>
    import Sidebar from './low-components/Sidebar.svelte'
    import DataSourcesPane from './high-components/DataSourcesPane.svelte'

    let activeId;
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import '@carbon/charts/styles.min.css';

    import Graph from "./high-components/Graph.svelte"
</script>

<main class="d-flex" style="height: 100vh">

    <Sidebar bind:activeId/>

    {#if activeId === 0}
        <DataSourcesPane/>
    {/if}




    <div class="d-flex flex-column flex-fill">
        <Graph/>
    </div>


</main>

<style>
    /*@import 'bootstrap/dist/css/bootstrap.min.css';*/
    /*@import 'bootstrap-icons/font/bootstrap-icons.css';*/
</style>