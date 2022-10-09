export namespace main {
	
	export class AddTodoReq {
	    title: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new AddTodoReq(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.description = source["description"];
	    }
	}
	export class AddTodoRes {
	    id: string;
	    title: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new AddTodoRes(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.description = source["description"];
	    }
	}

}

