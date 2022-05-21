<script lang="ts">
    import Sidebar from './low-components/Sidebar.svelte'
    import DataSourcesPane from './high-components/DataSourcesPane.svelte'

    let activeId;
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import Graph from "./high-components/Graph.svelte";

    import {buildTree, TreeNode} from './utils';

    // let rows = 10;
    // let cols = 10;

    import * as Client from '../wailsjs/go/goNTCore/Client.js'
    import {storage} from "../wailsjs/go/models";
    import WidgetWrapper from "./widgets/WidgetWrapper.svelte";
    import NumberSlider from "./widgets/NumberSlider.svelte";
    import ToggleButton from "./widgets/ToggleButton.svelte";
    import TextBox from "./widgets/TextBox.svelte";

    let tabs:string[] = [];
    let entries:Array<storage.SnapShotEntry> = [];
    let metadata = {};
    (async () => {
        tabs = await Client.GetStringArray("/Shuffleboard/.metadata/Tabs", []);
        entries = await Client.GetSnapshot()
        // console.log(entries);
    })();

    let activeTabIdx = 0;
    let activeTabName:string;
    $: activeTabName = tabs[activeTabIdx];

    type WidgetAttrs = {name:string, PreferredComponent:string, Size:number[], Position:number[]}

    let activeTabMetadata:WidgetAttrs[];
    $: activeTabMetadata = ((entries, activeTabName): WidgetAttrs[]=>{
        const prefix = `/Shuffleboard/.metadata/${activeTabName}/`;
        return buildTree(entries.filter(entry=>{
            return entry.key.startsWith(prefix)
        }).map(entry=>{
            entry.key = entry.key.substring(prefix.length)
            return entry
        })).map(extractAttrs) as WidgetAttrs[];
    })(entries, activeTabName);
    $: console.log(activeTabMetadata)

    const extractAttrs = (w:TreeNode) => {
        let attrs = {
            name: w.name
        };
        w.children.map(c=>{
            attrs[c.name] = c.value.value
        })
        console.log(attrs)
        return attrs
    }


</script>

<main class="d-flex" style="height: 100vh">

    <Sidebar bind:activeId></Sidebar>

    {#if activeId == 0}
        <DataSourcesPane></DataSourcesPane>

        <div class="d-flex flex-column flex-fill p-3">
            <ul class="nav nav-tabs">
                {#each tabs as tab, idx}
                    <li class="nav-item">
                        <a class="nav-link" class:active={activeTabIdx === idx} href="#" on:click={()=> activeTabIdx=idx}>{tab}</a>
                    </li>
                {/each}
            </ul>
            <div class="d-flex flex-wrap position-relative">
                {#each activeTabMetadata as widget}
                    <WidgetWrapper title={widget.name} widthPx={widget.Size[0]*100} heightPx={widget.Size[1]*100}>
                        {#if widget.PreferredComponent == "Number Slider"}
                            <NumberSlider />
                        {:else if widget.PreferredComponent == "Toggle Button"}
                            <ToggleButton title={widget.name}/>
                        {:else if widget.PreferredComponent == "Grid Layout"}
                        <!--    @todo, support grid layout-->
                        {:else} <!-- Default is textbox-->
                            <TextBox title={widget.name}/>
<!--                            <pre>{JSON.stringify(widget, null, 4)}</pre>-->
                        {/if}
                    </WidgetWrapper>
                {/each}
            </div>
<!--            <WidgetWrapper>-->
<!--                <NumberSlider/>-->
<!--            </WidgetWrapper>-->
            <!--{#each Array(rows).fill(rows).map((val, idx) => idx) as r}-->
            <!--    <div class="row">-->
            <!--        {#each Array(cols).fill(cols).map((val, idx) => idx) as c}-->
            <!--            <div class="col" style="border: 1px solid black">-->
            <!--                <div style="padding-top: 100%; visibility: hidden">R:{r} C:{c}</div>-->

            <!--            </div>-->
            <!--        {/each}-->
            <!--    </div>-->
            <!--{/each}-->

            <!--        <Graph/>-->
        </div>
    {/if}


</main>

<style>
    /*@import 'bootstrap/dist/css/bootstrap.min.css';*/
    /*@import 'bootstrap-icons/font/bootstrap-icons.css';*/
</style>