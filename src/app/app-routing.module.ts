import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from "./contacts/contacts.component"
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
