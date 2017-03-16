import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Document} from "../document";
import{WindRef}from "../../wind-ref.service";

@Component({
  selector: 'ca-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private documentIdx: number;
  private document: Document;
  private nativeWindow: any;




  constructor(private documentsService:DocumentsService, private router: Router,
              private route:ActivatedRoute, private windref: WindRef) {

    this.nativeWindow = this.windref.getNativeWindow();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any)=> {
        this.documentIdx = params['idx'];
        this.document = this.documentsService.getDocument(this.documentIdx)

      }

    )
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }

  onEdit(){

    this.router.navigate(['/documents', this.documentIdx,'edit'])
  }

  onDelete(){
    this.documentsService.deleteDocument(this.document);
    this.router.navigate(['/documents'])

  }

  onAddDocumentList(){


  }
  onView(){

    this.nativeWindow.open(this.document.url)
  }

}
