import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mockContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContacts(): Contact[] {
    return Contacts;
  }
}
