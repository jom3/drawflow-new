import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

declare var Drawflow: any;

@Component({
  selector: 'app-drawflow-editor',
  imports: [],
  templateUrl: './drawflow-editor.component.html',
  styleUrl: './drawflow-editor.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DrawflowEditorComponent implements AfterViewInit {
  @ViewChild('drawflowEditor', { static: false }) drawflowEditor!: ElementRef;
  editor: any;

  ngAfterViewInit() {
    this.editor = new Drawflow(this.drawflowEditor.nativeElement);
    this.editor.start();

    // Puedes agregar un nodo de ejemplo
    const data = { name: "ejemplo" };
this.editor.addNode(
  'multi-side',
  1, 3,                         // 1 entrada, 3 salidas
  300, 300,
  'multi',
  { label: 'Nodo 4 puntos' },
  `
  <div class="quad-node">
    <div class="quad-label" contenteditable="true" oninput="this.parentNode.dataset.label = this.innerText">
      Nodo 4 puntos
    </div>
  </div>
  `
);


    this.editor.addNode("sample", 1, 1, 100, 100, "sample", data, "Sample Node");
    this.editor.addNode(
      "if-condition",
      1, 2,
      300, 300,
      "if",
      { condition: "x > 10" },
      `
  <div class="node-if">
    <div class="diamond">If</div>
  </div>
  `
    );

  }
}
