import {Component, OnInit, Input} from '@angular/core';
import {extractMessages} from "@angular/compiler/src/i18n/extractor_merger";

@Component({
  selector: 'ca-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {

  @Input() document:Document;
  @Input() documentIdx:number;
  constructor() { }

  ngOnInit() {
  }

}
