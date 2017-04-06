import { ElementRef, Renderer } from '@angular/core';
export declare class NglButton {
    element: ElementRef;
    renderer: Renderer;
    private _type;
    nglButton: 'neutral' | 'brand' | 'destructive' | 'inverse';
    private prefix;
    constructor(element: ElementRef, renderer: Renderer);
}
