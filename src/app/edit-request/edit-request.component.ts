import { Component , OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
  providers:[DatePipe]
})
export class EditRequestComponent implements OnInit {

  constructor(private http: HttpClient , private formBuilder: FormBuilder , private datepipe :DatePipe,
    private ticketService:TicketService ) {
      

  }

  ngOnInit(): void {
    
    this.getTypeDropdown();
    this.getPriorityDropdown();
    this.getDeviceTypeDropdown();
    
    this.getTicketDetailsById();
    this.getLocationDropdown();
    this.selectedDeviceType("dummy");
    if (this.ticketService.view === true) {
      
    this.disableAll ();
    }
  }
  


  editTicketFormGroup = this.formBuilder.group({
    ticketNumber: [{value :'' , disabled : true }],
    empID: [{value :'' , disabled : true }],
    createdBy: [''],
    createdOn: [{value :'' , disabled : true }],
    SME_Assigned: [{value :'' , disabled : true }],
    approverName: [{value :'' , disabled : true }],
    type: ['', Validators.required],
    priority: ['', Validators.required],
    selectDevice: ['', Validators.required],
    siteName: ['', Validators.required],
    devices: ['', Validators.required],
    location: ['', Validators.required],
    implementTime: ['', Validators.required],
    scheduledDate: ['', Validators.required],
    requestStatus: [{value :'' , disabled : true }],
    businessJustification: ['', Validators.required],
    CMRdescre: ['', Validators.required],
    riskImpact: ['', Validators.required],
    actionPlan: ['', Validators.required],
    rollbackPlan: ['', Validators.required],
    note: ['', Validators.required],
    backupDate : [''] ,
    notifyEndUser : [''] ,
    verbalApproval : [''] ,
    AttachEmail: [''] ,
    mgrAppr: [''] ,
    mgrReje: [''] ,
    cabmgr: [''] ,
    cabReje: [''] ,
    mgrRejectionReason:[{value :'' , disabled : true }] ,
    cabRejectionReason:[{value :'' , disabled : true }]
    
  });
  
  
  systemtime : any ;
  ticketNumber : any ;
  empID : any ;
  createdBy : any ;
  createdOn : any ;
  SME_Assigned : any ;
  approverName : any ;
  type : any ;
  priority : any ;
  selectDevice : any ;
  siteName : any ;
  devices : any ;
  location : any ;
  implementTime : any ;
  scheduledDate : any ;
  RequestStatus : any;
  businessJustification : any ;
  CMRdescre : any ;
  riskImpact : any ;
  actionPlan : any ;
  rollbackPlan : any ;
  note : any ;
  editTicketData : any ;
  backupDate : any ;
  notifyEndUser : any ;
  SME_list : any;
  approverList : any ;
  typeList : any  ;
  priorityList: any ;
  deviceTypeList : any ;
  siteNameList : any  ;
  deviceList : any ;
  locationList : any ;
  RequestStatusList: any = [ "Draft" , "New Request" , "Manager Approved" , "Manager Rejected" , "CAB Approved" , "CAB Rejected"];
  updtTicketResponse : any ; 
  backup : any = 0;
  downTime : any = 0;
  manager : boolean = false;
  CABmanager : boolean = false;
  managerReject : boolean = false;
  CABrejected : boolean = false ;
  managerRespon : any ;
  CABrespon : any ;
  ticketDetails : any ;
  empDevices : any ;
  backupIsSet : any ;
  notifySet : any ;
  someone : any ;
  emergenc : any ;
  enablemgrButtons : any ;
  enableCABbuttons : any ;
  empButtons : boolean = false;
  mgrRjctRsn : any;
  cabRejRsn : any ;
  close : any;
  setScheduleDate : any ;
  setBackupDate : any ;
  setNotifyDate : any ;
  SystemDate : any;

 
 // now = new Date();
  //SystemDate : any = this.datepipe.transform(this.now, 'dd/MM/YYYY');
 // SystemDate : any = this.datepipe.transform(this.now, 'MM/dd/YYYY');



  // getDate () {
   
   
  //  this.SystemDate = this.datepipe.transform(now, 'd/m/yyyy, h:mm a');
  //  console.log("date" , this.SystemDate);
  //   this.systemtime = this.datepipe.transform(now, 'h:mm a');
  //   console.log("date" , this.SystemDate);
  //  console.log("time" , this.systemtime);
  //   this.editTicketFormGroup.controls.createdOn.setValue(this.SystemDate);
  //  this.editTicketFormGroup.controls.implementTime.setValue(this.systemtime);
  //   this.editTicketFormGroup.controls.ticketNumber.setValue("CR-23456");
  //   this.editTicketFormGroup.controls.empID.setValue("2777");
  //   this.editTicketFormGroup.controls['SME_Assigned'].setValue("sudhir.k@Jktech.com");
  //   this.editTicketFormGroup.controls['createdBy'].setValue("sudhir.k@Jktech.com");
  //   this.editTicketFormGroup.controls['approverName'].setValue("naveen.poovaiah@jktech.com");
  //   this.editTicketFormGroup.controls['priority'].setValue("Medium");
  //   this.editTicketFormGroup.controls['businessJustification'].setValue("Medium");
    
  // }

  getTicketDetailsById () : void {
    
    let ticket = {requestid:this.ticketService.ticketId};
    this.http.post<any>('http://localhost:3000/RequestManager/requestbyid' , ticket
    ).subscribe(
      response => {
        this.ticketDetails = response.result;
        console.log("TicketDetails", this.ticketDetails);
      //  this.manager = this.ticketService.manager1;
       // this.CABmanager = this.ticketService.cabManager ;
      //  this.empDevices = this.ticketDetails[0].device;
      this.SystemDate = new Date().toISOString().slice(0, 10)
        this.setValues();
  
      }
    );
    
  }

  getTypeDropdown () : void {
    let listmstid = 5 ;
    this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
    ).subscribe(
      response => {
        this.typeList = response.result;
        console.log("typeList", this.typeList);
  
      }
    );
  }

  getPriorityDropdown () : void {
    let listmstid = 1 ;
    this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
    ).subscribe(
      response => {
        this.priorityList = response.result;
        console.log("priorityList", this.priorityList);
        
       
      }
    );
  }

  getDeviceTypeDropdown () : void {
    let listmstid = 2 ;
    this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
    ).subscribe(
      response => {
        this.deviceTypeList = response.result;
        console.log("deviceTypeList", this.deviceTypeList);
       
      }
    );
  }

  // getSiteNameDropdown () : void {
  //   let listmstid = 5 ;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
  //   ).subscribe(
  //     response => {
  //       this.siteNameList = response.result;
       
  //     }
  //   );
  // }

  getDevicesDropdown (data : any) : void {
    let listmstid = data;
    
    this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
    ).subscribe(
      response => {
        this.deviceList = response.result;
       
      }
    );
  }

  getLocationDropdown() : void {
    debugger
    this.http.get<any>('http://localhost:3000/LocationManager'
    ).subscribe(
      response => {
        this.locationList = response.result;
        this.siteNameList = this.locationList;
       
      }
    );
  }

  makeUpdateTicketPayLoad ( ) : void {
debugger ;
    this.ticketNumber = this.editTicketFormGroup.controls['ticketNumber'].value;
    this.empID = this.editTicketFormGroup.controls['empID'].value;
    this.createdBy = this.editTicketFormGroup.controls['createdBy'].value;
    this.createdOn = this.editTicketFormGroup.controls['createdOn'].value;
  //this.createdOn = "03/30/2023"
    this.SME_Assigned = this.editTicketFormGroup.controls['SME_Assigned'].value;
    this.approverName = this.editTicketFormGroup.controls['approverName'].value;
    this.type = this.editTicketFormGroup.controls['type'].value;
    this.priority = this.editTicketFormGroup.controls['priority'].value;
    this.selectDevice = this.editTicketFormGroup.controls['selectDevice'].value;
    this.siteName = this.editTicketFormGroup.controls['siteName'].value;
    this.devices = this.editTicketFormGroup.controls['devices'].value;
    this.location = this.editTicketFormGroup.controls['location'].value;
    this.implementTime = this.editTicketFormGroup.controls['implementTime'].value;
    this.scheduledDate = this.editTicketFormGroup.controls['scheduledDate'].value;
  // this.scheduledDate = "03/30/2023";
    this.businessJustification = this.editTicketFormGroup.controls['businessJustification'].value;
    this.CMRdescre = this.editTicketFormGroup.controls['CMRdescre'].value;
    this.riskImpact = this.editTicketFormGroup.controls['riskImpact'].value;
    this.actionPlan = this.editTicketFormGroup.controls['actionPlan'].value;
    this.rollbackPlan = this.editTicketFormGroup.controls['rollbackPlan'].value;
    this.note = this.editTicketFormGroup.controls['note'].value;
    this.backupDate = this.editTicketFormGroup.controls['backupDate'].value;
    this.notifyEndUser = this.editTicketFormGroup.controls['notifyEndUser'].value;
    
       //let checkbox = document.getElementById("flexSwitchCheckDefault");
       
       


  }





  sendDataToUpdtTicketAPI () : void {
  
    console.log("sendUPdtPayLoad:" , this.editTicketData )
    this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , this.editTicketData
    ).subscribe(
      response => {
        this.updtTicketResponse = response;
        console.log("updtTicketResponse", this.updtTicketResponse);
        
      }
    );
  

  }

  getCheckboxResponse1() : void {
    debugger;
    let element = <HTMLInputElement> document.getElementById("flexSwitchCheckDefault"); 
    if (element.checked)
     { 
      this.backupDate = true;
      this.backup = 1 ;
     // this.editTicketFormGroup.controls['backupDate'].setValue(this.SystemDate);
     this.setBackupDate = this.SystemDate;


    }
    else {
      this.backupDate = false;
      this.backup = 0 ;
     // this.editTicketFormGroup.controls['backupDate'].setValue("");
     this.setBackupDate = "";
    }
  }

  getCheckboxResponse2() : void {
    debugger;
    let element = <HTMLInputElement> document.getElementById("flexSwitchCheckDefault1"); 
    if (element.checked)
     { 
      this.notifyEndUser = true;
      this.downTime = 1;
    //  this.editTicketFormGroup.controls['notifyEndUser'].setValue(this.SystemDate);
    this.setNotifyDate = this.SystemDate;
    }
    else {
      this.notifyEndUser = false;
      this.downTime = 0;
     // this.editTicketFormGroup.controls['notifyEndUser'].setValue("");
     this.setNotifyDate = "";
    }
  }

  managerResponse (value:any) : void {
    this.managerRespon = value
    
    if (value === "Manager Approved"){
      this.managerReject = false;
    }
    else {
      this.managerReject = true;
    }
    
  }

 

  CABresponse(value:any) : void {
    this.CABrespon = value
    if (value === "CAB Approved"){
      this.CABrejected = false;
    }
    else {
      this.CABrejected = true;
    }
  }

  transformDateToShow (date : any) {
    let givenDate = date.split('/')
    console.log(givenDate);
    let TransformedDate = givenDate[2] + "-" + givenDate[1] + "-" + givenDate[0];
    return TransformedDate;

  }

  transFormDateToSend (date:any) {
    
    let givenDate = date.split('-')
    console.log(givenDate);
    let TransformedDate = givenDate[0] + "/" + givenDate[1] + "/" + givenDate[2];
    return TransformedDate;
  }

  setValues () : void {
    
    
    this.editTicketFormGroup.controls['ticketNumber'].setValue(this.ticketDetails[0].requestid);
    this.editTicketFormGroup.controls['empID'].setValue(this.ticketDetails[0].empid);
    this.editTicketFormGroup.controls['createdBy'].setValue(this.ticketDetails[0].createdby);
   this.editTicketFormGroup.controls.createdOn.setValue(this.ticketDetails[0].createddate);

    this.editTicketFormGroup.controls.SME_Assigned.setValue(this.ticketDetails[0].smeemailid);
    this.editTicketFormGroup.controls.approverName.setValue(this.ticketDetails[0].approveremail);
    this.editTicketFormGroup.controls.type.setValue(this.ticketDetails[0].type);
    this.editTicketFormGroup.controls.priority.setValue(this.ticketDetails[0].priority);
    
    this.editTicketFormGroup.controls.selectDevice.setValue(this.ticketDetails[0].devicetype);
    this.editTicketFormGroup.controls.siteName.setValue(this.ticketDetails[0].sitename);
    this.editTicketFormGroup.controls.devices.setValue(this.ticketDetails[0].device);
    this.editTicketFormGroup.controls.location.setValue(this.ticketDetails[0].location);
    this.editTicketFormGroup.controls.implementTime.setValue(this.ticketDetails[0].implemettime);
    //this.editTicketFormGroup.controls.scheduledDate.setValue(this.ticketDetails[0].scheduleddate);
    this.setScheduleDate = this.transformDateToShow(this.ticketDetails[0].scheduleddate);
    this.editTicketFormGroup.controls.requestStatus.setValue(this.ticketDetails[0].reqstatus);
    this.editTicketFormGroup.controls.businessJustification.setValue(this.ticketDetails[0].justification);
    this.editTicketFormGroup.controls.CMRdescre.setValue(this.ticketDetails[0].cmrdesc);
    this.editTicketFormGroup.controls.riskImpact.setValue(this.ticketDetails[0].risk);
    this.editTicketFormGroup.controls.actionPlan.setValue(this.ticketDetails[0].actionplan);
    this.editTicketFormGroup.controls.rollbackPlan.setValue(this.ticketDetails[0].rollbackplan);
    this.editTicketFormGroup.controls.note.setValue(this.ticketDetails[0].relincident);
    
    if (this.ticketDetails[0].type === "Emergency") {
      this.emergenc = true;
      this.editTicketFormGroup.controls.verbalApproval.setValue(this.SystemDate);
     // this.editTicketFormGroup.controls.AttachEmail.setValue("Yes");
    }
    if (this.ticketDetails[0].backup === 1) {
      this.backupIsSet = true;
      this.backupDate = true ;
      //this.editTicketFormGroup.controls.backupDate.setValue(this.ticketDetails[0].backupdate);
      console.log("this.ticketDetails[0].backupdate;" , this.ticketDetails[0].backupdate)
      this.setBackupDate = this.transformDateToShow(this.ticketDetails[0].backupdate);
      console.log("this.setBackupDate" , this.setBackupDate);
      
    }
    if (this.ticketDetails[0].downtime === 1) {
      this.notifySet = true;
      this.notifyEndUser = true;
    //this.editTicketFormGroup.controls.notifyEndUser.setValue(this.ticketDetails[0].downtimenotifydate);
    this.setNotifyDate = this.transformDateToShow( this.ticketDetails[0].downtimenotifydate);
    
    }

    if (this.ticketDetails[0].approveremail === this.ticketService.empDetails[0].empemailid && this.ticketDetails[0].reqstatus === "New Request" ) {
      this.manager = true;
      this.enablemgrButtons = true ;
      this.empButtons = false;
      this.enableCABbuttons = false;  
      



    }

   else if ( this.ticketService.empDetails[0].emplevel === "CAB Manager" && this.ticketDetails[0].reqstatus === "Manager Approved" ) {
      this.CABmanager = true;
      this.enableCABbuttons = true ;
      this.enablemgrButtons = false ;
      this.empButtons = false;

    }

    else if (this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby && this.ticketDetails[0].reqstatus === "CAB Approved") {
      this.enablemgrButtons = false;
      this.empButtons = false;
      this.enableCABbuttons = false ;
      this.close = true;
    }

    else if ((this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby) && (this.ticketDetails[0].reqstatus === "Manager Rejected" || this.ticketDetails[0].reqstatus === "Draft")) {
      this.enablemgrButtons = false;
      this.empButtons = true;
      this.enableCABbuttons = false ;
      this.close = false;
    }



    if (this.ticketDetails[0].reqstatus === "Manager Rejected" || this.ticketDetails[0].reqstatus === "CAB Rejected") {
      this.mgrRjctRsn = true;
      this.editTicketFormGroup.controls.mgrRejectionReason.setValue(this.ticketDetails[0].rejreason);
    }
    // if (this.ticketDetails[0].rejreason != "") {
    //   this.mgrRjctRsn = true;
    //   this.editTicketFormGroup.controls.cabRejectionReason.setValue(this.ticketDetails[0].rejreason);
    // }

   

    // if (this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby && (this.ticketDetails[0].reqstatus === "Draft" || this.ticketDetails[0].reqstatus === "Manager Rejected"))

    // this.enablemgrButtons = false;
    // this.empButtons = true;
    // this.enableCABbuttons = false ;
    // this.close = false;


  }

  disableAll () : void {

    this.editTicketFormGroup.controls.SME_Assigned.disable();
    this.editTicketFormGroup.controls.approverName.disable();
    this.editTicketFormGroup.controls.type.disable();
    this.editTicketFormGroup.controls.priority.disable();
    this.editTicketFormGroup.controls.selectDevice.disable();
    this.editTicketFormGroup.controls.siteName.disable();
    this.editTicketFormGroup.controls.devices.disable();
    this.editTicketFormGroup.controls.location.disable();
    this.editTicketFormGroup.controls.implementTime.disable();
    this.editTicketFormGroup.controls.scheduledDate.disable();
    this.editTicketFormGroup.controls.requestStatus.disable();
    this.editTicketFormGroup.controls.businessJustification.disable();
    this.editTicketFormGroup.controls.CMRdescre.disable();
    this.editTicketFormGroup.controls.riskImpact.disable();
    this.editTicketFormGroup.controls.actionPlan.disable();
    this.editTicketFormGroup.controls.rollbackPlan.disable();
    this.editTicketFormGroup.controls.note.disable();
    this.editTicketFormGroup.controls.backupDate.disable();
    this.editTicketFormGroup.controls.notifyEndUser.disable();
    this.editTicketFormGroup.controls.verbalApproval.disable();
    this.editTicketFormGroup.controls.AttachEmail.disable();
    this.someone = true ;
    
  }

  selectedDeviceType(value : any) : void{
    
    if (value === "Network" || this.empDevices === "Network") {
      this.getDevicesDropdown(3);
      this.empDevices = "";
    }
    else {
      this.getDevicesDropdown(4);
    }
  }

  typeResponse (response : any) : void {
      
    if (response === "Emergency") {
      this.editTicketFormGroup.controls['priority'].setValue("Critical");
      this.editTicketFormGroup.controls.priority.disable();
      this.emergenc = true ;


      
    }
    else {
      this.emergenc = false ;
      this.editTicketFormGroup.controls['priority'].setValue("");
     // this.priorityList = [{listdtlcode : "High" }, {listdtlcode : "Medium" },{listdtlcode : "Low" }]
      this.editTicketFormGroup.controls.priority.enable();
    }

}

sendDraftRequest () : void {
  this.makeUpdateTicketPayLoad();

  this.RequestStatus = "Draft"

  this.editTicketData = {requestid:this.ticketNumber , empid:this.empID , createdby:this.createdBy ,
    createddate:this.createdOn ,smeemailid:this.SME_Assigned , approveremail:this.approverName ,
    type:this.type,priority:this.priority,devicetype:this.selectDevice,sitename:this.siteName,
    device:this.devices,location:this.location,implemettime:this.implementTime,
    scheduleddate:this.scheduledDate,reqstatus:this.RequestStatus,justification:this.businessJustification,
    cmrdesc:this.CMRdescre,risk:this.riskImpact,actionplan:this.actionPlan,rollbackplan:this.rollbackPlan,
    relincident:this.note,backup:this.backup,backupdate:this.backupDate,downtime:this.downTime,downtimenotifydate:this.notifyEndUser}
    
    this.sendDataToUpdtTicketAPI();

}

sendNewRequest () : void {

  this.makeUpdateTicketPayLoad();
  
  this.RequestStatus = "New Request"

  this.editTicketData = {requestid:this.ticketNumber , empid:this.empID , createdby:this.createdBy ,
    createddate:this.createdOn ,smeemailid:this.SME_Assigned , approveremail:this.approverName ,
    type:this.type,priority:this.priority,devicetype:this.selectDevice,sitename:this.siteName,
    device:this.devices,location:this.location,implemettime:this.implementTime,
    scheduleddate:this.scheduledDate,reqstatus:this.RequestStatus,justification:this.businessJustification,
    cmrdesc:this.CMRdescre,risk:this.riskImpact,actionplan:this.actionPlan,rollbackplan:this.rollbackPlan,
    relincident:this.note,backup:this.backup,backupdate:this.backupDate,downtime:this.downTime,downtimenotifydate:this.notifyEndUser}
    
    this.sendDataToUpdtTicketAPI();
    

}

sendmgrResponse() {
  let rejectReson = this.editTicketFormGroup.controls['mgrReje'].value;
  let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.managerRespon , rejreason : rejectReson}

  this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , mgr
  ).subscribe(
    response => {
    //  this.updtTicketResponse = response;
    //  console.log("updtTicketResponse", this.updtTicketResponse);
    let updStatus = response;
      
    }
  ); 

}
SendCabManagerResponse() {
  let cabRejReason = this.editTicketFormGroup.controls['cabReje'].value;
  let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.CABrespon , rejreason : cabRejReason}

  this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , mgr
  ).subscribe(
    response => {
    //  this.updtTicketResponse = response;
    //  console.log("updtTicketResponse", this.updtTicketResponse);
      
    }
  );
}

closeTicket () {

  let closeTicketPayLoad = {requestid:this.ticketDetails[0].requestid , status:"closed"}
  this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , closeTicketPayLoad
  ).subscribe(
    response => {
    //  this.updtTicketResponse = response;
    //  console.log("updtTicketResponse", this.updtTicketResponse);
      
    }
  );
}
}
