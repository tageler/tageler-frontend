import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform  {

  constructor(private sanitizer: DomSanitizer){}

  transform(html: string) : SafeHtml {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
