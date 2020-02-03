import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    console.log("Test contacts ", this.contacts);
    this.contacts = this.contactService.getContacts().slice(1, 6);
    // this.contactService.getContacts()
    //   .subscribe(contacts => this.contacts = contacts.slice(1, 5));
    // .subscribe(contacts => this.contacts = contacts.slice(1, 5));
  }

}
