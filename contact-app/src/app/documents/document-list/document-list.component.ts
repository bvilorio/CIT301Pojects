import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../documents.service";

@Component({
  selector: 'ca-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents : Document[]=[];

  constructor(private ds:DocumentsService) { }

  ngOnInit() {

    this.documents = this.ds.getDocuments();
  }

}
