// place files you want to import through the `$lib` alias in this folder.

export { default as GTNH_icon } from './assets/GTNH_icon.png';
export { default as NavigationBar } from './nav/navigation_bar.svelte';
export { default as MainBox } from './main_box.svelte';

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