import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mockContact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContacts(): Observable<Contact[]> {
    return of(Contacts);
  }

  getContact(id: number): Observable<Contact> {
    return of(Contacts.find(contact => contact.id === id));
  }
}
