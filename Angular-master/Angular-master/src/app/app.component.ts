import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions,IPDFViewerApplication,FreeTextEditorAnnotation  } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularPRo';

  constructor(
    private ngxService: NgxExtendedPdfViewerService,
  ) { }


  async ngOnInit() {
    await this.ngxService.addImageToAnnotationLayer({
      urlOrDataUrl: 'https://chat.google.com/dm/8-W3UsAAAAE/DMKs2cKbUTw/DMKs2cKbUTw?cls=10',
      page: 11,       // optional parameter
      left: 0,        // default value: 0
      bottom: '0%',   // default value: 0
      right: '100%',  // default value: 100%
      top: '100%',    // default value: 100%
      rotation: 270   // default value: 0
    });
  }
}
