<script lang="ts">
    import LeftPane from "./LeftPane.svelte";


    let activeComponentName = "";

    import * as stories from '../stories';

    console.log();

    //@todo this makes a dumb assumption that file will have a Stories suffix
    let components = Object.keys(stories).map(e=>e.substring(0, e.length-"Stories".length));
    // console.log(Object.keys(stories), components)

    // $: console.log(stories[`${activeComponentName}Stories`])
</script>

<LeftPane>
    <p>Components</p>
    <ul>
        {#each components as c}
            <li>
                <a href="#" on:click={()=>{activeComponentName = c}}>{c}</a>
            </li>
        {/each}
    </ul>
    <p>Active Component: <br> {activeComponentName}</p>
</LeftPane>

<div class="position-relative">
    <!--@todo this makes a dumb assumption that file will have a Stories suffix-->
    <svelte:component this={stories[`${activeComponentName}Stories`]}/>
</div>