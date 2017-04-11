import { TemplateRef, EventEmitter } from '@angular/core';
export declare class NglTab {
    templateRef: TemplateRef<any>;
    id: string;
    heading: string | TemplateRef<any>;
    onActivate: EventEmitter<NglTab>;
    onDeactivate: EventEmitter<NglTab>;
    private _active;
    constructor(templateRef: TemplateRef<any>);
    active: boolean;
}
