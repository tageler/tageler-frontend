import { ElementRef, Renderer, OnDestroy } from '@angular/core';
import { NglDropdown } from './dropdown';
export declare class NglDropdownTrigger implements OnDestroy {
    private element;
    private renderer;
    private dropdown;
    private parentFocusEventSubscription;
    constructor(element: ElementRef, renderer: Renderer, dropdown: NglDropdown);
    ngOnDestroy(): void;
    toggleOpen(): void;
    onKeyDownOpen($event: Event): void;
    focus(): void;
}
