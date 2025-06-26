import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'drawflow',
    loadComponent:()=>import('./drawflow-editor/drawflow-editor.component').then(c=>c.DrawflowEditorComponent)
  }
];
