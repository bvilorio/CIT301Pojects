import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact'
@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[]=[];
  @Output() contactSelected = new EventEmitter<Contact>();
  contact = new Contact('Brother Vilorio','Brayan Vilorio','vil13003@byui.edu','534-435-2222','assets/brayan.jpg', 'group');
  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact){
    this.contactSelected.emit(contact);
  }
}


