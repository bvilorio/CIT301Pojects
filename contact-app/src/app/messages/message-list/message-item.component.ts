import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  message;

  constructor() { }

  ngOnInit() {
  }

}
