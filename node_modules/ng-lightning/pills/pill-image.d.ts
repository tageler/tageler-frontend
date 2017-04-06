import { ElementRef, Renderer } from '@angular/core';
export declare class NglPillImage {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer);
    ngAfterContentInit(): void;
}
