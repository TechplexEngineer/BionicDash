export type TreeNode = {
    name: string
    value: NTelement
    path: string
    children: TreeNode[]
    fullPath?: string
}

// network table keys
export type NTelement = {
    "key":           string,  //"/FMSInfo/.type",
    "value":         string,  //"\"FMSInfo\"",
    "type":          string,  //"string ",
    "id":            number,  //0,
    "sn":            number,  //1,
    "is_persistent": boolean, //false
    fullPath?: string //this seems like a hack... Maybe we should have a different type as the first arg to buildTree
};

// build a tree from the raw list of NTelements
export const buildTree = (elements: NTelement[], prefixToRemove?: string): TreeNode[] => {
    let tree: TreeNode[] = [];
    let level = {tree};

    if (prefixToRemove?.length) {
        elements.map(entry => {
            entry.fullPath = entry.key;
            entry.key = entry.key.substring(prefixToRemove.length);
            return entry;
        });
    }
    // console.log("-------Here----------")
    elements.forEach(path => {
        const a = path.key.split('/').reduce((r, name, idx, arr) => {
            // console.log("reducing:", path.key.split('/'), JSON.stringify(r), name)
            if (name === "") {
                return r
            }
            if (!r[name]) {
                r[name] = {tree: []};

                const obj = {
                    name,
                    value: {},
                    path:  arr.slice(0, idx+1).join("/"),
                    children: r[name].tree
                } as TreeNode;

                if (path.fullPath) {
                    const fullPathParts = path.fullPath.split("/")
                    const lastIdx = fullPathParts.lastIndexOf(name)
                    obj.fullPath = fullPathParts.slice(0, lastIdx+1).join("/").replace("/.metadata","")
                }

                // if we are processing the last path element
                if (path.key.endsWith(name)) { //same as idx == arr.length-1
                    // console.log(path, name)
                    obj.value = path
                }

                if (!Array.isArray(r.tree)) {
                    r.tree = [];
                }

                r.tree.push(obj);
            }
            return r[name];
        }, level)
        // console.log("ReducerResult",JSON.stringify(a))
    });
    // console.log(tree)
    return tree;
}
