import { TemplateRef } from '@angular/core';
export declare class NglFormLabelTemplate {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare function getFormLabel(label: string, labelTemplate: NglFormLabelTemplate): string | TemplateRef<any>;
