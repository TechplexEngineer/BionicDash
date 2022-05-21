export namespace storage {
	
	export class SnapShotEntry {
	    key: string;
	    value: string;
	    type: string;
	    id: number;
	    sn: number;
	    is_persistent: boolean;
	
	    static createFrom(source: any = {}) {
	        return new SnapShotEntry(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.value = source["value"];
	        this.type = source["type"];
	        this.id = source["id"];
	        this.sn = source["sn"];
	        this.is_persistent = source["is_persistent"];
	    }
	}

}

