import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NewRequestComponent } from './new-request/new-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { HeaderComponent } from './header/header.component';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { EmployeeComponent } from './employee/employee.component';



export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'d76f4c48-fcf4-4182-ba25-6b92e5ba3e7f',
      authority: "https://login.microsoftonline.com/a7bae7fa-0df1-4562-a554-16a95f54c8ce",
      redirectUri:'http://localhost:4200/'
    }
  })
}



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTicketComponent,
    NewRequestComponent,
    EditRequestComponent,
    HeaderComponent,
    EmployeeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
     Ng2SearchPipeModule ,
    MsalModule ,

     
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
     useFactory: MSALInstanceFactory
    },MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
