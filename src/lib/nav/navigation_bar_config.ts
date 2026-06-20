export class item {
    name: string;
    path: string;
    visible: boolean;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
        this.visible = true;
    }
}

export class folder {
    name: string;
    items: ( item | folder )[] = [];
    visible: boolean;    

    constructor(name: string, items: Array<item | folder>) {
        this.name = name;
        this.items = items
        this.visible = true;
    }
}

export let tree = [
    new item("test item", "/test_item"),
    new folder("Star Technology", [
        new item("something to make it overflow", "/line"),
        new item("some other line", "/some_other line"),
        new folder("test folder",[
            new item("test", "/test"),
            new item("test", "/test"),
            new item("test", "/test"),
         ]),
    ]),
];