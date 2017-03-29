import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Router, ActivatedRoute} from "@angular/router";
import{Document}from "../document"

@Component({
  selector: 'ca-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private oldDocument: Document;
  private editMode: boolean = false;
  private documentIdx: number;

  constructor(private documentsService: DocumentsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('idx')) {
          this.documentIdx = +params['idx'];
          this.oldDocument = this.documentsService.getDocument(this.documentIdx);
          this.editMode = true;
        } else {
          this.oldDocument = null;
          this.editMode = false;
        }
      }
    );
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  onSubmit(value) {
    let newDocument = new Document(null, value.name, value.description, value.documentUrl, null);

    if (this.editMode) {
      newDocument.id = this.oldDocument.id;
      this.documentsService.updateDocument(this.oldDocument, newDocument);
    } else {
      this.documentsService.addDocument(newDocument);
    }

    this.router.navigate(['documents']);
  }

  onCancel() {
    this.router.navigate(['documents']);
  }
}
