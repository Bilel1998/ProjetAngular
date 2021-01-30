import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { AjoutParticipantComponent } from './ajout-participant/ajout-participant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterFormateurComponent } from './ajouter-formateur/ajouter-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'Menu', component: MenuComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Formateurs', component: FormateursComponent },
  { path: 'ajoutFormateur', component: AjouterFormateurComponent },
  { path: 'ajoutParticipant', component: AjoutParticipantComponent },
  { path: 'editFormateur/:id', component: EditFormateurComponent },
  { path: 'editParticipant/:id', component: EditParticipantComponent },

  { path: 'Participants', component: ParticipantsComponent },
  { path: '**', component: PagenotfoundComponent }

  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    MenuComponent,
    DashboardComponent,
    FormateursComponent,
    ParticipantsComponent,
    AjoutParticipantComponent,
    AjouterFormateurComponent,
    EditFormateurComponent,
    EditParticipantComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,

    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
