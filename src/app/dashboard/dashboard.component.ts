import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ContactService } from "../contact.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactService: ContactService, private http: HttpClient) { }
  apiUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  ngOnInit() {
    this.getContacts();
    console.log("Test http", this.http.get(this.apiUrl));
  }

  getContacts(): void {
    console.log("Test contacts ", this.contacts);
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1, 5));

  }

}
