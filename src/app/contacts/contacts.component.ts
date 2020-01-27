import { Component, OnInit } from '@angular/core';
import { Contacts } from "../mockContact";
import { concat } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  contacts = Contacts;
  ngOnInit() {
    console.log("Contact arr => ", this.contacts)
  }

}
