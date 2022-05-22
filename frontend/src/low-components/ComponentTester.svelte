<script lang="ts">
    import LeftPane from "./LeftPane.svelte";

    type ComponentWrap = {
        name: string
        component: any
    };

    let activeComponent:ComponentWrap;

    import * as stories from '../stories';

    const stripSuffix = (str:string, suffix:string) => {
        return str.substring(0, str.length-suffix.length)
    };

    const stripPrefix = (str:string, prefix:string) => {
        return str.substring(prefix.length, str.length)
    };

    //@todo this makes a dumb assumption that file will have a Stories suffix
    let components:ComponentWrap[]  = [];
    let wrappedComponents:ComponentWrap[] = [];

    Object.keys(stories).map(c => {
        if (c.startsWith("Wrapped")) {
            wrappedComponents = [...wrappedComponents, {
                component: stories[c],
                name: stripPrefix(stripSuffix(c, "Stories"), "Wrapped")
            } as ComponentWrap]
        } else {
            components = [...components, {
                component: stories[c],
                name: stripSuffix(c, "Stories")
            } as ComponentWrap]
        }
    });
    wrappedComponents = wrappedComponents.sort((a,b)=>a.name-b.name)
    components = components.sort((a,b)=>a.name-b.name)

</script>

<LeftPane>

    <p>Wrapped Components</p>
    <ul>
        {#each wrappedComponents as c}
            <li>
                <a href="#" on:click={()=>{activeComponent = c}}>{c.name}</a>
            </li>
        {/each}
    </ul>

    <p>Components</p>
    <ul>
        {#each components as c}
            <li>
                <a href="#" on:click={()=>{activeComponent = c}}>{c.name}</a>
            </li>
        {/each}
    </ul>

    <p>Active Component: <br> {activeComponent?.name}</p>
</LeftPane>

<div class="position-relative">
    <!--@todo this makes a dumb assumption that file will have a Stories suffix-->
    <svelte:component this={activeComponent?.component}/>
</div>