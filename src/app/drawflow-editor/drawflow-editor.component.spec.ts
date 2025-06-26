import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawflowEditorComponent } from './drawflow-editor.component';

describe('DrawflowEditorComponent', () => {
  let component: DrawflowEditorComponent;
  let fixture: ComponentFixture<DrawflowEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawflowEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawflowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
