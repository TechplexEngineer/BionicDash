export type TreeNode = {
    name: string
    value: NTelement
    path: string
    children: TreeNode[]
}

// network table keys
export type NTelement = {
    "key":           string,  //"/FMSInfo/.type",
    "value":         string,  //"\"FMSInfo\"",
    "type":          string,  //"string ",
    "id":            number,  //0,
    "sn":            number,  //1,
    "is_persistent": boolean, //false
};

// build a tree from the raw list of NTelements
export const buildTree = (elements: NTelement[]): TreeNode[] => {
    let tree: TreeNode[] = [];
    let level = {tree};

    elements.forEach(path => {
        path.key.split('/').reduce((r, name, i, a) => {
            if (name === "") {
                return r
            }
            if (!r[name]) {
                r[name] = {tree: []};
                const obj = {
                    name,
                    value: {},
                    path: r[name].tree.length > 0 ? path.key.substring(0, name.length) : path.key,
                    children: r[name].tree
                } as TreeNode;

                if (path.key.endsWith(name)) {
                    obj.value = path
                }

                if (!Array.isArray(r.tree)) {
                    r.tree = [];
                }

                r.tree.push(obj);
            }
            return r[name];
        }, level)
    });
    return tree;
}
