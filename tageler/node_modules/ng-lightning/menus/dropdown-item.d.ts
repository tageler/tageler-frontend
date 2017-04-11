import { ElementRef, Renderer } from '@angular/core';
export declare class NglDropdownItem {
    private element;
    private renderer;
    private isFocused;
    onFocus(): void;
    onBlur(): void;
    constructor(element: ElementRef, renderer: Renderer);
    hasFocus(): boolean;
    focus(): void;
}
