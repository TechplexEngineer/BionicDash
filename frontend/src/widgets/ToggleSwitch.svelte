<script>
    export let state = false;
    export let title = "TITLE";
</script>

<div class="form-check form-switch h-100 p-0 w-100 text-center">
    <label class="form-check-label" for="flexSwitchCheckDefault">{title}</label>
    <div class="d-flex justify-content-center h-100 mt-1">
        <input class="form-check-input mx-auto mt-0" type="checkbox" bind:checked={state}>
    </div>
</div>

<style>
    .form-check.form-switch .form-check-input {
        width: 80%;
        height: 40%;
        /*height: 50%;*/
    }

    /*.form-switch .form-check-input {*/
    /*    width: 100%;*/
    /*    margin-top: 0;*/
    /*}*/

    :global(body) {
        height: 100%
    }

    :global(html) {
        height: 100%
    }

    :global(div#root) {
        height: 100%
    }

</style>
