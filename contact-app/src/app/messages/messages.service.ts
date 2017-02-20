import { Injectable } from '@angular/core';
import {Message} from "./message";
import {MOCKMESSAGES} from "./MOCKMESSAGES";

@Injectable()
export class MessagesService {

  messages : Message[]=[];

  getMessages(){

    this.messages = MOCKMESSAGES;
    return this.messages;
  }

  getMessage(idx: number){}

  constructor() { }

}
