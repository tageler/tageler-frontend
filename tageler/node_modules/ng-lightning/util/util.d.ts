import { ElementRef, Renderer } from '@angular/core';
export declare function toBoolean(value: any): boolean;
export declare function isInt(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function uniqueId(prefix?: string): string;
export interface IReplaceClass {
    renderer: Renderer;
    element: ElementRef;
}
export declare function replaceClass(instance: IReplaceClass, oldClass: string | string[], newClass?: string | string[]): void;
