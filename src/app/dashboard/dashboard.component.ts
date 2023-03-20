import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, 
    private ticketService: TicketService , private activatedRoute:ActivatedRoute , private router:Router ) {

  }

  searchFormGroup = this.formBuilder.group({

    changeType: [''],
    priority: [''],
    deviceType: [''],
    status: [''],


  });


  searchValue: any;
  edit: boolean = false;

  tickets: any;
  typeList: any;
  priorityList: any;
  deviceTypeList: any;
  user: any;
  empResponse: any;
  manager: any;
  log : any ;
  some : any;


  id : any = this.activatedRoute.snapshot.params['id'];
  

  //[{
  //   TicketID: "CR-305819", ChangeType: "Normal", CreatedBy: "sagar@jktech.com", Priority: "Critical", DeviceType: "network", CreatedDate: "1/20/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager approved", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-405819", ChangeType: "Normal", CreatedBy: "mahmad.rafi@jktech.com", Priority: "Critical", DeviceType: "network", CreatedDate: "1/21/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager approved", TicketStatus: "open"
  // }, {
  //   TicketID: "CR-505819", ChangeType: "Normal", CreatedBy: "mallikarjun@jktech.com", Priority: "High", DeviceType: "network", CreatedDate: "1/23/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "CAB Approved", TicketStatus: "Close"} ,
  //   {TicketID: "CR-605819", ChangeType: "Normal", CreatedBy: "vishwas@jktech.com", Priority: "low", DeviceType: "network", CreatedDate: "1/24/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "CAB Approved", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-705819", ChangeType: "Normal", CreatedBy: "abhishek@jktech.com", Priority: "low", DeviceType: "network", CreatedDate: "1/25/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "CAB Approved", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-805819", ChangeType: "Emergency", CreatedBy: "guru@jktech.com", Priority: "High", DeviceType: "server", CreatedDate: "1/26/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager approved", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-905819", ChangeType: "Emergency", CreatedBy: "anand@jktech.com", Priority: "medium", DeviceType: "server", CreatedDate: "1/27/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager approved", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-205819", ChangeType: "Emergency", CreatedBy: "babu@jktech.com", Priority: "High", DeviceType: "server", CreatedDate: "1/28/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager rejected", TicketStatus: "Closed"
  // }, {
  //   TicketID: "CR-105819", ChangeType: "Emergency", CreatedBy: "Sivamurthy@jktech.com", Priority: "medium", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
  //   Status: "manager rejected", TicketStatus:"open"}
  // ]


  

  ngOnInit(): void {
    
   //if (this.ticketService.loggedIn === true) {
   
  //  this.log = true;
  debugger;
 
  this.some = setTimeout(() => {
    this.getAllRequest();
  }, 300) ;
    
    this.getTypeDropdown();
    this.getPriorityDropdown();
    this.getDeviceTypeDropdown();
  // this.empDetails();
   
//    if (this.id != "") {
//     this.getTicketById(this.id);
//  }

  }



  // getAllRequest(): void {
  //   this.http.get<any>('http://localhost:3000/RequestManager/allrequests'
  //   ).subscribe(
  //     response => {
  //       this.tickets = response.result;
        
        
  //       if (this.ticketService.filtered === true) {
  //         this.getFlteredRecords();
  //       }
        

  //     }
  //   );
  // }

  getAllRequest () {
    
    this.ticketService.getAllTickets().subscribe(
      response => {
        this.tickets = response;
        this.tickets = this.tickets.result;
        if (this.ticketService.filtered === true) {
                  this.getFlteredRecords();
                 }
      }
    );
  }

  // empDetails () { not required
    
  //   this.ticketService.getEmpDetails().subscribe(
  //     response => {
  //       this.empResponse = response.result;
        

  //    if (this.empResponse[0].emplevel === "Manager") {
  //     this.manager = true;
      
  //  }
  //     }
  //   );
  // }

  // getTypeDropdown(): void {
  //   let listmstid = 5;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid }
  //   ).subscribe(
  //     response => {
  //       this.typeList = response.result;
        



  //     }
  //   );
  // }

  getTypeDropdown () {

    this.ticketService.getType().subscribe(
      response => {
        this.typeList = response;
        this.typeList = this.typeList.result;
      }
    );

  }


  // getPriorityDropdown(): void {
  //   let listmstid = 1;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid }
  //   ).subscribe(
  //     response => {
  //       this.priorityList = response.result;
        

  //     }
  //   );
  // }

  getPriorityDropdown () {
    this.ticketService.getPriority().subscribe(
      response => {
        this.priorityList = response;
        this.priorityList = this.priorityList.result;
      }
    );
  }

  // getDeviceTypeDropdown(): void {
  //   let listmstid = 2;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid }
  //   ).subscribe(
  //     response => {
  //       this.deviceTypeList = response.result;
        

  //     }
  //   );
  // }

  getDeviceTypeDropdown () {
    this.ticketService.getDeviceType().subscribe(
      response => {
        this.deviceTypeList = response;
        this.deviceTypeList = this.deviceTypeList.result;
      }
    );
  }

  enableDisbaleEdit(createdName: any, reqStatus: any , approver : any , ticketStatus : any): void {
    
     
    if ((createdName === this.ticketService.empDetails[0].empemailid && reqStatus === "Draft") || 
    (createdName === this.ticketService.empDetails[0].empemailid && reqStatus === "Manager Rejected")) {
      this.edit = true;
      this.ticketService.view = false;
      console.log("draft or reject");
     
      

    }
    else if ((createdName === this.ticketService.empDetails[0].empemailid )&&(reqStatus === "CAB Rejected")) {
      this.edit = true;
      this.ticketService.view = true;
      console.log("createdName" , createdName ,this.ticketService.empDetails[0].empemailid )
      console.log("reqStatus" , reqStatus);
     
    }
    else if ((createdName === this.ticketService.empDetails[0].empemailid && reqStatus === "CAB Approved") && ticketStatus === "open") {
      this.edit = true;
      this.ticketService.view = true;
      console.log("draft or reject");
    }
  else if ( this.ticketService.empDetails[0].empemailid === approver ) {
      this.edit = true;
      this.ticketService.view = true;
      
      if (reqStatus === "New Reques") {
        this.ticketService.manager1 = true ;
      }
    }
    else if (this.ticketService.empDetails[0].emplevel === "CAB Manager") {
      this.edit = true;
      this.ticketService.view = true;
      if (reqStatus === "Manager Approved") {
        this.ticketService.cabManager= true ;
      }
    }
    else {
      this.edit = false;
    }
  }
  searchResults(): void {


    //let searchValue1 = document.getElementById("SearchBar").text();
    //let searchValue1 = (<HTMLInputElement>document.getElementById("SearchBar")).value; 
    this.searchValue = (<HTMLInputElement>document.getElementById("SearchBar")).value;
    
  }

  // filterRecords(): void {
  //   this.ticketService.filtered = true ;
  //   this.ticketService.filterChangeType = this.searchFormGroup.controls['changeType'].value;
  //   this.ticketService.filterPriority = this.searchFormGroup.controls['priority'].value;
  //   this.ticketService.filterDeviceType = this.searchFormGroup.controls['deviceType'].value;
  //   this.ticketService.filterstatus = this.searchFormGroup.controls['status'].value;

  //   let filterPayLoad = {
  //     type: this.ticketService.filterChangeType,
  //     priority: this.ticketService.filterPriority,
  //     reqstatus: this.ticketService.filterDeviceType,
  //     devicetype: this.ticketService.filterstatus
  //   };
    

  //   this.http.post<any>('http://localhost:3000/RequestManager/filter', filterPayLoad
  //   ).subscribe(
  //     response => {
  //       this.tickets = response.result;
        

  //     }
  //   );


  // }

  filterRecords () {

    this.ticketService.filtered = true ;
      this.ticketService.filterChangeType = this.searchFormGroup.controls['changeType'].value;
      this.ticketService.filterPriority = this.searchFormGroup.controls['priority'].value;
      this.ticketService.filterDeviceType = this.searchFormGroup.controls['deviceType'].value;
      this.ticketService.filterstatus = this.searchFormGroup.controls['status'].value;
  
      let filterPayLoad = {
        type: this.ticketService.filterChangeType,
        priority: this.ticketService.filterPriority,
        reqstatus: this.ticketService.filterstatus  ,
        devicetype: this.ticketService.filterDeviceType
      };

      this.ticketService.filterTickets(filterPayLoad).subscribe(
        response => {
          this.tickets = response;
          this.tickets = this.tickets.result;
          console.log("filtered tickets :"  ,this.tickets )
        }
      );

  }

  // getFlteredRecords(): void {
    
  //   let filterPayLoad = {
  //     type: this.ticketService.filterChangeType,
  //     priority: this.ticketService.filterPriority,
  //     reqstatus: this.ticketService.filterDeviceType,
  //     devicetype: this.ticketService.filterstatus
  //   };
    

  //   this.http.post<any>('http://localhost:3000/RequestManager/filter', filterPayLoad
  //   ).subscribe(
  //     response => {
  //       this.tickets = response.result;
        

  //     }
  //   );


  // }

  getFlteredRecords () {

    let filterPayLoad = {
          type: this.ticketService.filterChangeType,
          priority: this.ticketService.filterPriority,
          reqstatus: this.ticketService.filterstatus  ,
          devicetype: this.ticketService.filterDeviceType
        };

        this.ticketService.filteredTickets(filterPayLoad).subscribe(
          response => {
            this.tickets = response;
            this.tickets = this.tickets.result;
          }
        );

  }

  clearForm(): void {

    this.searchFormGroup.controls.changeType.setValue("");
    this.searchFormGroup.controls.priority.setValue("");
    this.searchFormGroup.controls.deviceType.setValue("");
    this.searchFormGroup.controls.status.setValue("");
    
    this.ticketService.filtered = false ;
    this.ticketService.filterChangeType = "";
    this.ticketService.filterPriority = "";
    this.ticketService.filterDeviceType = "";
    this.ticketService.filterstatus = "";
    this.getAllRequest();
  }

  sendTicketIdToService(ticketNo: any): void {

    this.ticketService.ticketId = ticketNo;
    //this.ticketService.view = false;
  }

  viewTicket(ticketNo: any): void {
    this.ticketService.ticketId = ticketNo;
    this.ticketService.view = true;
  }

  setFilteredValues () {
    this.searchFormGroup.controls.changeType.setValue(this.ticketService.filterChangeType);
    this.searchFormGroup.controls.priority.setValue(this.ticketService.filterPriority);
    this.searchFormGroup.controls.deviceType.setValue( this.ticketService.filterDeviceType);
    this.searchFormGroup.controls.status.setValue(this.ticketService.filterstatus);
  }

  // getTicketById (ticketId : any) : void {
    
  //   let ticket = {requestid : ticketId}
  //   this.http.post<any>('http://localhost:3000/RequestManager/requestbyid' , ticket
  //   ).subscribe(
  //     response => {
  //       this.tickets = response.result;
        
        
       
  
  //     }
  //   );
  // }

  getTicketById (ticketId : any) {
    let ticket = {requestid : ticketId}

    this.ticketService.getRequestByID(ticket).subscribe(
      response => {
        this.tickets = response ;
        this.tickets = this.tickets.result;
      }
    );

  }



}


