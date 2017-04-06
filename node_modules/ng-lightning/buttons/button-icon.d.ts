import { ElementRef, Renderer } from '@angular/core';
export declare class NglButtonIcon {
    element: ElementRef;
    renderer: Renderer;
    private _type;
    nglButtonIcon: 'container' | 'border' | 'border-filled' | 'small' | '';
    constructor(element: ElementRef, renderer: Renderer);
    private normalize(type?);
}
