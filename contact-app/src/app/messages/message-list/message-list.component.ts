import { Component, OnInit } from '@angular/core';
import {extractMessages} from "@angular/compiler/src/i18n/extractor_merger";
import {Message} from "../message";
import {MessagesService} from "../messages.service";


@Component({
  selector: 'ca-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages : Message[]=[];

  constructor( private ms:MessagesService) { }

  ngOnInit() {

    this.messages = this.ms.getMessages();

  }

}
