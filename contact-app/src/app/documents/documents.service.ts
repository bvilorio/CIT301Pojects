import { Injectable } from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS"; MOCKDOCUMENTS

@Injectable()
export class DocumentsService {

  documents: Document[] =[];

  getDocuments(){
    return this.documents = MOCKDOCUMENTS; //added
  }

  getDocument(idx: number){
  }


  constructor() { }

}
