<script>
    export let title = "Boolean Box";
    export let state = false;
    export let trueColor = "green";
    export let falseColor = "red";


    $: color = state ? trueColor : falseColor

</script>

<div class="boolean-box" style="background-color: {color}"></div>

<style>
    .boolean-box {
        width: 100%;
        height: 100%;
    }

    :global(body, html, div#root) {
        height: 100%
    }

</style>