import { TemplateRef, EventEmitter } from '@angular/core';
import { NglTab } from './tab';
export declare class NglTabHeading {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class NglTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class NglTabVerbose extends NglTab {
    id: string;
    heading: string | TemplateRef<any>;
    onActivate: EventEmitter<NglTab>;
    onDeactivate: EventEmitter<NglTab>;
    contentTemplate: NglTabContent;
    headingTemplate: NglTabHeading;
    ngAfterContentInit(): void;
}
