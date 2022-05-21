<script>
    /**
     * A view only representation of a true or false value
     * @component
     */

    /**
     * Display name for the component
     */
    export let title = "Boolean Box";

    /**
     * Should the component show true or false color
     */
    export let state = false;

    /**
     * Color to show when state is true. Can be any valid CSS color or hexcode.
     * Hexcodes should start with # (eg. #FFFFFF) for white
     * RGB -- eg. rgb(255,0,153)
     * RGBA -- eg. rgba(51, 170, 51, .1)
     * HSL -- eg. hsl(270, 60%, 70%)
     * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
     */
    export let trueColor = "green";

    /**
     * Color to show when state is false. Can be any valid CSS color or hexcode.
     * See trueColor for examples.
     */
    export let falseColor = "red";

    // Reactive variable color changes its value based on the value of state prop
    $: color = state ? trueColor : falseColor

</script>

<div class="boolean-box" style="background-color: {color}"></div>

<style>
    .boolean-box {
        width: 100%;
        height: 100%;
    }

    /*:global(body, html, div#root) {*/
    /*    height: 100%*/
    /*}*/

</style>