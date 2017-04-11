import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class NglButtonState {
    element: ElementRef;
    renderer: Renderer;
    _selected: boolean;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    constructor(element: ElementRef, renderer: Renderer);
    onSelectChange(): void;
    private toggleClass(className, isAdd);
}
