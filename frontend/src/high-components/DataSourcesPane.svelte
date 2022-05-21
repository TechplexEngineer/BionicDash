<script lang="ts">
    import Tree from "../low-components/tree.svelte";
    import {Input} from 'sveltestrap';
    import {buildTree, NTelement} from '../utils'
    import * as Client from '../../wailsjs/go/goNTCore/Client.js'

    let userInputSearchFilter = "";
    let userHideMetadata = true; //bound to checkbox, should hide all items that have a dot following a slash eg. Shuffleboard/.metadata


    let keys: NTelement[] = [];
    let filteredElements: NTelement[] = keys;


    const sortElementsByKey = (elements: NTelement[]): NTelement[] => {
        return elements.sort((a, b) => {
            if (a.key < b.key) {
                return -1
            } else if (a.key > b.key) {
                return 1
            }
            return 0
        })
    }

    (async () => {
        keys = await Client.GetSnapshot();

        // sort by entry name
        keys = sortElementsByKey(keys);
    })();


    const filterElements = (elements, userHideMetadata, userInputSearchFilter) => {
        filteredElements = elements.filter((el, idx) => {
            // Hide any nodes that don't match the filter
            if (!el.key.toLowerCase().includes(userInputSearchFilter.toLowerCase())) {
                // console.log("Hiding %s(%s) b/c filter does not match", node.name, node.path)
                return false;
            }
            if (userHideMetadata && el.key.match(/\/\./)) {
                // console.log("Hiding %s(%s) b/c metadata", node.name, node.path)
                return false;
            }
            return true;
        });
    }

    $: filterElements(keys, userHideMetadata, userInputSearchFilter)
</script>

<div class="d-flex flex-column mt-2 bg-light border-end" style="max-height: 100vh; overflow-y: scroll; min-width: 250px">
    <div>
        <Input type="checkbox" label="Hide Metadata" class="float-end" bind:checked={userHideMetadata}/>
        <h2 class="text-center fs-5">Data Sources</h2>
    </div>

    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Filter List"
               bind:value={userInputSearchFilter}>
        <label for="floatingInput">Filter List</label>
    </div>

    <div class="mx-2">
        <Tree tree={buildTree(filteredElements)} let:node let:leaf>
            <div class="name" title={leaf ? node.path : undefined}>
                {node.name}
                <div class="float-end">
                    {typeof node.value.value === 'undefined' ? "" : node.value.value}
                </div>
            </div>
        </Tree>
    </div>
</div>