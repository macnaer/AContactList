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

  APIData: any[];
  constructor(private contactService: ContactService, private http: HttpClient) { }
  apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&category=sport&apiKey=18f1c87e444741aca30db0a569bba999`;;

  ngOnInit() {
    this.getContacts();
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    })

  }

  getContacts(): void {
    console.log("Test contacts ", this.contacts);
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1, 5));

  }

}
