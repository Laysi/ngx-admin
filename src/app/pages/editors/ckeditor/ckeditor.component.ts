import { Component } from '@angular/core';
@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [(ngModel)]="mycontent" [config]="{ extraPlugins: 'divarea', height: '320' }" (change)="0;"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
  mycontent:string;
}
