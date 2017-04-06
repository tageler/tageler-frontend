import { ChangeDetectorRef, EventEmitter } from '@angular/core';
export declare class NglPill {
    detector: ChangeDetectorRef;
    removable: boolean;
    unlinked: boolean;
    nglPillRemove: EventEmitter<{}>;
    constructor(detector: ChangeDetectorRef);
    remove(): void;
}
