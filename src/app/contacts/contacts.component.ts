import { Component, OnInit } from '@angular/core';
// import { Contacts } from "../mockContact";
import { Contact } from "../contact";
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts: Contact[];

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }
  selectedContact: Contact;
  ngOnInit() {
    this.getContacts();
    console.log("Contact arr => ", this.contacts)
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

}
