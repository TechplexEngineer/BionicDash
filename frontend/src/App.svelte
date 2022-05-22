<script lang="ts">
    import Sidebar from './low-components/Sidebar.svelte'
    import DataSourcesPane from './high-components/DataSourcesPane.svelte'

    let activeId;
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';

    import {buildTree, TreeNode} from './utils';

    import * as Client from '../wailsjs/go/goNTCore/Client.js'
    import type {storage} from "../wailsjs/go/models";
    import WidgetWrapper from "./widgets/WidgetWrapper.svelte";
    import NumberSlider from "./widgets/NumberSlider.svelte";
    import ToggleButton from "./widgets/ToggleButton.svelte";
    import TextBox from "./widgets/TextBox.svelte";
    import ComponentTester from "./low-components/ComponentTester.svelte";
    import * as cloneDeep from 'lodash.clonedeep'

    let tabs:string[] = [];
    let entries:Array<storage.SnapShotEntry> = [];
    (async () => {
        tabs = await Client.GetStringArray("/Shuffleboard/.metadata/Tabs", []);
        entries = await Client.GetSnapshot()
    })();

    let activeTabIdx = 0;
    let activeTabName:string;
    $: activeTabName = tabs[activeTabIdx];

    type WidgetAttrs = {
        name: string,
        path: string,
        PreferredComponent: string,
        Size: number[],
        Position: number[]
    };

    let activeTabMetadata:WidgetAttrs[] = [];
    $: activeTabMetadata = ((ntEntries, activeTabName): WidgetAttrs[]=>{
        const prefix = `/Shuffleboard/.metadata/${activeTabName}/`;

        const entriesOnCurrentTab = ntEntries.filter(entry=>{
            return entry.key.startsWith(prefix)
        });

        const tree = buildTree(entriesOnCurrentTab, prefix);

        return tree.map(extractAttrs) as WidgetAttrs[];
    })(cloneDeep(entries), activeTabName);
    // $: console.log("activeTabMetadata", activeTabMetadata)

    const extractAttrs = (w:TreeNode): WidgetAttrs => {
        let attrs = {
            name: w.name,
            path: w.path,
            fullPath: w.fullPath
        } as WidgetAttrs;
        w.children.map(c=>{
            attrs[c.name] = c.value.value
        })
        return attrs
    }

</script>

<main class="d-flex" style="min-height: 100vh; overflow: hidden">

    <Sidebar bind:activeId></Sidebar>

    {#if activeId === 0}
        <DataSourcesPane></DataSourcesPane>

        <div class="d-flex flex-column flex-fill p-3 ">
            <ul class="nav nav-tabs">
                {#each tabs as tab, idx}
                    <li class="nav-item">
                        <a class="nav-link" class:active={activeTabIdx === idx} href="#" on:click={()=> activeTabIdx=idx}>{tab}</a>
                    </li>
                {/each}
            </ul>
            <div class="position-relative" style="border: 1px solid black; overflow: scroll; height: 1000px">
                {#each activeTabMetadata as widget}
                    <!--{console.log(widget)}-->
                    <WidgetWrapper
                            title={widget.name}
                            widthPx={widget.Size[0]*100}
                            heightPx={widget.Size[1]*100}

                            leftPx={widget.Position[0]*100}
                            topPx={widget.Position[1]*100}
                    >
                        {#if widget.PreferredComponent === "Number Slider"}
                            <NumberSlider
                                    title={widget.name}
                            />
                        {:else if widget.PreferredComponent === "Toggle Button"}
                            <ToggleButton
                                    title={widget.name}
                            />
                        {:else if widget.PreferredComponent === "Grid Layout"}
                        <!--    @todo, support grid layout-->
                        {:else} <!-- Default is textbox-->
                            <TextBox
                                    title={widget.name}
                            />
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
        {:else if activeId === 1}
        Live Window?
        {:else if activeId === 2}
        <ComponentTester/>
        {/if}


</main>

<style>
    /*@import 'bootstrap/dist/css/bootstrap.min.css';*/
    /*@import 'bootstrap-icons/font/bootstrap-icons.css';*/
</style>