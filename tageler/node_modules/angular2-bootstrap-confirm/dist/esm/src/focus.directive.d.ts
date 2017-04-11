import { ElementRef, OnChanges, Renderer } from '@angular/core';
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
export declare class Focus implements OnChanges {
    private renderer;
    private elm;
    mwlFocus: boolean;
    constructor(renderer: Renderer, elm: ElementRef);
    ngOnChanges(changes: any): void;
}
