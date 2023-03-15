import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { HttpClientModule } from '@angular/common/http';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { MaslGuard } from './masl.guard';

const routes: Routes = [
  {path:'' , component:DashboardComponent },
  {path:'add_ticket' , component:AddTicketComponent},
  {path:'new_request' , component:NewRequestComponent},
  {path:'dashboard' , component:CoursesComponent},
  {path:'edit_request' , component:EditRequestComponent},
  {path:"something/:id" , component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) , HttpClientModule],
  // imports: [RouterModule.forRoot(routes, {
  //   initialNavigation:'enabledBlocking'
  // })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
