<script>
    import Sidebar from './low-components/Sidebar.svelte'
    import DataSourcesPane from './high-components/DataSourcesPane.svelte'

</script>

<main class="d-flex" style="height: 100vh">

    <Sidebar></Sidebar>

    <DataSourcesPane></DataSourcesPane>




    <div class="d-flex flex-column flex-fill">
        Column
    </div>


</main>

<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';
    @import 'bootstrap-icons/font/bootstrap-icons.css';
</style>