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
    this.getRequestDropdown();
   
  }
  


  // editTicketFormGroup = this.formBuilder.group({
  //   ticketNumber: [{value :'' , disabled : true }],
  //   empID: [{value :'' , disabled : true }],
  //   createdBy: [''],
  //   createdOn: [{value :'' , disabled : true }],
  //   SME_Assigned: [{value :'' , disabled : true }],
  //   approverName: [{value :'' , disabled : true }],
  //   type: ['', Validators.required ,],
  //   priority: ['', Validators.required],
  //   selectDevice: ['', Validators.required],
  //   siteName: ['', Validators.required],
  //   devices: ['', Validators.required],
  //   location: ['', Validators.required],
  //   implementTime: ['', Validators.required],
  //   scheduledDate: ['', Validators.required],
  //   requestStatus: [{value :'' , disabled : true }],
  //   businessJustification: ['', Validators.required],
  //   CMRdescre: ['', Validators.required],
  //   riskImpact: ['', Validators.required],
  //   actionPlan: ['', Validators.required],
  //   rollbackPlan: ['', Validators.required],
  //   note: ['', Validators.required],
  //   backupDate : [''] ,
  //   notifyEndUser : [''] ,
  //   verbalApproval : [''] ,
  //   AttachEmail: [''] ,
  //   mgrAppr: [''] ,
  //   mgrReje: [''] ,
  //   cabmgr: [''] ,
  //   cabReje: [''] ,
  //   mgrRejectionReason:[{value :'' , disabled : true }] ,
  //   cabRejectionReason:[{value :'' , disabled : true }]
    
  // });

  editTicketFormGroup = this.formBuilder.group({
    ticketNumber: [{value :'' , disabled : true }],
    empID: [{value :'' , disabled : true }],
    createdBy: [''],
    createdOn: [{value :'' , disabled : true }],
    SME_Assigned: [{value :'' , disabled : true }],
    approverName: [{value :'' , disabled : true }],
    type: [{value :'' , disabled : true }, Validators.required ,],
    priority: [{value :'' , disabled : true }, Validators.required],
    selectDevice: [{value :'' , disabled : true }, Validators.required],
    siteName: [{value :'' , disabled : true }, Validators.required],
    devices: [{value :'' , disabled : true }, Validators.required],
    location: [{value :'' , disabled : true }, Validators.required],
    implementTime: [{value :'' , disabled : true }, Validators.required],
    scheduledDate: [{value :'' , disabled : true }, Validators.required],
    requestStatus: [{value :{value :'' , disabled : true } , disabled : true }],
    businessJustification: [{value :'' , disabled : true }, Validators.required],
    CMRdescre: [{value :'' , disabled : true }, Validators.required],
    riskImpact: [{value :'' , disabled : true }, Validators.required],
    actionPlan: [{value :'' , disabled : true }, Validators.required],
    rollbackPlan: [{value :'' , disabled : true }, Validators.required],
    note: [{value :'' , disabled : true }, Validators.required],
    backupDate : [{value :'' , disabled : true }] ,
    notifyEndUser : [{value :'' , disabled : true }] ,
    verbalApproval : [{value :'' , disabled : true }] ,
    AttachEmail: [{value :'' , disabled : true }] ,
    mgrAppr: [{value :''  }] ,
    mgrReje: [''] ,
    cabmgr: [{value :'' }] ,
    cabReje: [''] ,
    mgrRejectionReason:[{value :'' , disabled : true }] ,
    cabRejectionReason:[{value :'' , disabled : true }]
    
  });
  
  
  systemtime : any ;
  ticketNumber : any ;
  ticketNumberWithPrefix : any ;
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
 // RequestStatusList: any = [ "Draft" , "New Request" , "Manager Approved" , "Manager Rejected" , "CAB Approved" , "CAB Rejected"];
 RequestStatusList : any ;
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
  someone : boolean = true ;
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
  setCreated : any ;
  mgrRejBtns : boolean = false ;
  verbalApprovalDate : any;
  attachedEmail : any;
  setApprovalDate : any ;
  rejectionReason : any ;

 
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

  // getTicketDetailsById () : void {
    
  //   let ticket = {requestid:this.ticketService.ticketId};
  //   this.http.post<any>('http://localhost:3000/RequestManager/requestbyid' , ticket
  //   ).subscribe(
  //     response => {
  //       this.ticketDetails = response.result;
  //       console.log("TicketDetailsbyId", this.ticketDetails);
      
  //     this.SystemDate = new Date().toISOString().slice(0, 10)
  //       this.setValues();
  //       this.enableAndDisableViewMode();
  
  //     }
  //   );
    
  // }
   
  getTicketDetailsById () {
    let ticket = {requestid:this.ticketService.ticketId};
    this.ticketService.getRequestByID(ticket).subscribe(
      response => {
        this.ticketDetails = response.result;
        console.log("TicketDetailsbyId", this.ticketDetails);
        console.log("id", this.ticketDetails[0].requestid);
        this.ticketNumber = this.ticketDetails[0].requestid;
      
      this.SystemDate = new Date().toISOString().slice(0, 10)
        this.setValues();
        this.enableAndDisableViewMode();
      }
    );
  }


  enableAndDisableViewMode() {
    if ((this.ticketDetails[0].createdby === this.ticketService.empDetails[0].empemailid && this.ticketDetails[0].reqstatus === "Draft") || 
    (this.ticketDetails[0].createdby === this.ticketService.empDetails[0].empemailid && this.ticketDetails[0].reqstatus === "Manager Rejected")) {
      
      if (this.ticketDetails[0].status === "open") {
        this.enableAll();
      }
     

    }
  }

  // getTypeDropdown () : void {
  //   let listmstid = 5 ;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
  //   ).subscribe(
  //     response => {
  //       this.typeList = response.result;
        
  
  //     }
  //   );
  // }

  getTypeDropdown () {
    this.ticketService.getType().subscribe(
      response => {
        this.typeList = response.result;
      }
    );
  }

  // getPriorityDropdown () : void {
  //   let listmstid = 1 ;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
  //   ).subscribe(
  //     response => {
  //       this.priorityList = response.result;
        
        
       
  //     }
  //   );
  // }

  getPriorityDropdown () {
    this.ticketService.getPriority().subscribe(
      response => {
        this.priorityList = response.result;
      }
    );
  }

  getRequestDropdown () {

    this.ticketService.getRequestStatuses().subscribe(
      response => {
        this.RequestStatusList = response.result;
        
      }
    );

  }

  // getDeviceTypeDropdown () : void {
  //   let listmstid = 2 ;
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
  //   ).subscribe(
  //     response => {
  //       this.deviceTypeList = response.result;
        
       
  //     }
  //   );
  // }

  getDeviceTypeDropdown() {
    this.ticketService.getDeviceType().subscribe(
      response => {
        this.deviceTypeList = response.result;
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

  // getDevicesDropdown (data : any) : void {
  //   let listmstid = data;
    
  //   this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid}
  //   ).subscribe(
  //     response => {
  //       this.deviceList = response.result;
       
  //     }
  //   );
  // }

  getDevicesDropdown(data : any) {
    this.ticketService.getDevices(data).subscribe(
      response => {
        this.deviceList = response.result;
      }
    );
  }

  // getLocationDropdown() : void {
    
  //   this.http.get<any>('http://localhost:3000/LocationManager'
  //   ).subscribe(
  //     response => {
  //       this.locationList = response.result;
  //       this.siteNameList = this.locationList;
       
  //     }
  //   );
  // }

  getLocationDropdown () {
    this.ticketService.getAllLocations().subscribe(
      response => {
        this.locationList = response.result;
       this.siteNameList = this.locationList;
      }
    );
  }

  makeUpdateTicketPayLoad ( ) : void {

    //this.ticketNumber = this.editTicketFormGroup.controls['ticketNumber'].value;
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
    this.verbalApprovalDate = this.editTicketFormGroup.controls['verbalApproval'].value;
    this.attachedEmail = this.editTicketFormGroup.controls['AttachEmail'].value;
    
       //let checkbox = document.getElementById("flexSwitchCheckDefault");
       
       


  }





  // sendDataToUpdtTicketAPI () : void {
  
  //   console.log("sendUpdatePayLoad:" , this.editTicketData )
  //   this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , this.editTicketData
  //   ).subscribe(
  //     response => {
  //       this.updtTicketResponse = response;
        
  //     }
  //   );
  

  // }

  sendDataToUpdtTicketAPI () {

    this.ticketService.updateRequest(this.editTicketData).subscribe(
      response => {
        this.updtTicketResponse = response;
       
      }
    );

  }

  getCheckboxResponse1() : void {
    
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
     // this.editTicketFormGroup.controls['mgrReje'].clearValidators();
      this.editTicketFormGroup.controls['mgrReje'].setValidators([]);
      this.editTicketFormGroup.controls['mgrReje'].updateValueAndValidity();
    }
    else {
      this.managerReject = true;
      this.editTicketFormGroup.controls['mgrReje'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['mgrReje'].updateValueAndValidity();
    }
    
  }

 

  CABresponse(value:any) : void {
    this.CABrespon = value
    if (value === "CAB Approved"){
      this.CABrejected = false;
    //  this.editTicketFormGroup.controls['cabReje'].clearValidators();
      this.editTicketFormGroup.controls['cabReje'].setValidators([]);
      this.editTicketFormGroup.controls['cabReje'].updateValueAndValidity();
    }
    else {
      this.CABrejected = true;
     // this.editTicketFormGroup.controls['cabReje'].setValue("");
      this.editTicketFormGroup.controls['cabReje'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['cabReje'].updateValueAndValidity();
      
    }
  }

  transformDateToShow (date : any) {
    let givenDate = date.split('/')
    
    let TransformedDate = givenDate[2] + "-" + givenDate[1] + "-" + givenDate[0];
    return TransformedDate;

  }

  transFormDateToSend (date:any) {
    
    let givenDate = date.split('-')
    
    let TransformedDate = givenDate[0] + "/" + givenDate[1] + "/" + givenDate[2];
    return TransformedDate;
  }

  setValues () : void {
    
    
    this.editTicketFormGroup.controls['ticketNumber'].setValue("CMR-" + this.ticketNumber);
    this.editTicketFormGroup.controls['empID'].setValue(this.ticketDetails[0].empid);
    this.editTicketFormGroup.controls['createdBy'].setValue(this.ticketDetails[0].createdby);
   //this.editTicketFormGroup.controls.createdOn.setValue(this.ticketDetails[0].createddate);

   this.setCreated  = this.ticketDetails[0].createddate;
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
    this.setScheduleDate = this.ticketDetails[0].scheduleddate;
    this.editTicketFormGroup.controls.requestStatus.setValue(this.ticketDetails[0].reqstatus);
    this.editTicketFormGroup.controls.businessJustification.setValue(this.ticketDetails[0].justification);
    this.editTicketFormGroup.controls.CMRdescre.setValue(this.ticketDetails[0].cmrdesc);
    this.editTicketFormGroup.controls.riskImpact.setValue(this.ticketDetails[0].risk);
    this.editTicketFormGroup.controls.actionPlan.setValue(this.ticketDetails[0].actionplan);
    this.editTicketFormGroup.controls.rollbackPlan.setValue(this.ticketDetails[0].rollbackplan);
    this.editTicketFormGroup.controls.note.setValue(this.ticketDetails[0].relincident);
    
    if (this.ticketDetails[0].type === "Emergency") {
      this.emergenc = true;
      //this.editTicketFormGroup.controls.verbalApproval.setValue(this.ticketDetails[0].verbalapprovaldate);
      this.setApprovalDate = this.ticketDetails[0].verbalapprovaldate;
      this.editTicketFormGroup.controls.priority.disable();
      this.editTicketFormGroup.controls.AttachEmail.setValue(this.ticketDetails[0].isemailattached);
      this.editTicketFormGroup.controls['AttachEmail'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['AttachEmail'].updateValueAndValidity();
    }
    if (this.ticketDetails[0].backup === 1) {
      this.backupIsSet = true;
      this.backupDate = true ;
      this.backup = 1;
      //this.editTicketFormGroup.controls.backupDate.setValue(this.ticketDetails[0].backupdate);
      
      this.setBackupDate = this.ticketDetails[0].backupdate;
      
    }
    if (this.ticketDetails[0].downtime === 1) {
      this.notifySet = true;
      this.notifyEndUser = true;
      this.downTime = 1;
    //this.editTicketFormGroup.controls.notifyEndUser.setValue(this.ticketDetails[0].downtimenotifydate);
    this.setNotifyDate = this.ticketDetails[0].downtimenotifydate;
    
    }

    if (this.ticketDetails[0].approveremail === this.ticketService.empDetails[0].empemailid && this.ticketDetails[0].reqstatus === "New Request" ) {
      this.manager = true;
      this.enablemgrButtons = true ;
      this.empButtons = false;
      this.enableCABbuttons = false;
      this.editTicketFormGroup.controls['mgrAppr'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['mgrAppr'].updateValueAndValidity();
      debugger;


    }

   else if ( this.ticketService.empDetails[0].emplevel === "CAB Manager" && this.ticketDetails[0].reqstatus === "Manager Approved" ) {
      this.CABmanager = true;
      this.enableCABbuttons = true ;
      this.enablemgrButtons = false ;
      this.empButtons = false;
      this.editTicketFormGroup.controls['cabmgr'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['cabmgr'].updateValueAndValidity();

    }

    else if (this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby && this.ticketDetails[0].reqstatus === "CAB Approved") {
      this.enablemgrButtons = false;
      this.empButtons = false;
      this.enableCABbuttons = false ;
      this.close = true;
    }

    else if (this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby && this.ticketDetails[0].reqstatus === "Draft") {
      this.enablemgrButtons = false;
      this.empButtons = true;
      this.enableCABbuttons = false ;
      this.close = false;
    }

    else if (this.ticketService.empDetails[0].empemailid === this.ticketDetails[0].createdby && this.ticketDetails[0].reqstatus === "Manager Rejected"
            && this.ticketDetails[0].status === "open") {
      this.enablemgrButtons = false;
      this.empButtons = false;
      this.enableCABbuttons = false ;
      this.close = false;
      this.mgrRejBtns = true;

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

  enableAll () : void {

 //   this.editTicketFormGroup.controls.SME_Assigned.enable();
 //   this.editTicketFormGroup.controls.approverName.enable();
    this.editTicketFormGroup.controls.type.enable();
    this.editTicketFormGroup.controls.priority.enable();
    this.editTicketFormGroup.controls.selectDevice.enable();
    this.editTicketFormGroup.controls.siteName.enable();
    this.editTicketFormGroup.controls.devices.enable();
    this.editTicketFormGroup.controls.location.enable();
    this.editTicketFormGroup.controls.implementTime.enable();
    this.editTicketFormGroup.controls.scheduledDate.enable();
   // this.editTicketFormGroup.controls.requestStatus.enable();
    this.editTicketFormGroup.controls.businessJustification.enable();
    this.editTicketFormGroup.controls.CMRdescre.enable();
    this.editTicketFormGroup.controls.riskImpact.enable();
    this.editTicketFormGroup.controls.actionPlan.enable();
    this.editTicketFormGroup.controls.rollbackPlan.enable();
    this.editTicketFormGroup.controls.note.enable();
    this.editTicketFormGroup.controls.backupDate.enable();
    this.editTicketFormGroup.controls.notifyEndUser.enable();
    this.editTicketFormGroup.controls.verbalApproval.enable();
    this.editTicketFormGroup.controls.AttachEmail.enable();
    this.someone = false ;
    
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
      this.setApprovalDate = this.SystemDate;
      this.editTicketFormGroup.controls['AttachEmail'].setValidators([Validators.required]);
      this.editTicketFormGroup.controls['AttachEmail'].updateValueAndValidity();


      
    }
    else {
      this.emergenc = false ;
      this.editTicketFormGroup.controls['priority'].setValue("Low");
     // this.priorityList = [{listdtlcode : "High" }, {listdtlcode : "Medium" },{listdtlcode : "Low" }]
      this.editTicketFormGroup.controls.priority.enable();
      this.setApprovalDate = ""; 
     // this.editTicketFormGroup.controls['AttachEmail'].clearValidators();
      this.editTicketFormGroup.controls['AttachEmail'].setValidators([]);
      this.editTicketFormGroup.controls['AttachEmail'].updateValueAndValidity();
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
    relincident:this.note,backup:this.backup,backupdate:this.backupDate,downtime:this.downTime,downtimenotifydate:this.notifyEndUser ,
    verbalapprovaldate : this.verbalApprovalDate , isemailattached : this.attachedEmail}
    
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
    relincident:this.note,backup:this.backup,backupdate:this.backupDate,downtime:this.downTime,downtimenotifydate:this.notifyEndUser,
    verbalapprovaldate : this.verbalApprovalDate , isemailattached : this.attachedEmail}
    
    this.sendDataToUpdtTicketAPI();
    

}

// sendmgrResponse() {
//   let rejectReson = this.editTicketFormGroup.controls['mgrReje'].value;
//   let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.managerRespon , rejreason : rejectReson , status : this.ticketDetails[0].status }
//   console.log("mgr response " , mgr);
//   this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , mgr
//   ).subscribe(
//     response => {
    
//     let updStatus = response;
      
//     }
//   ); 

// }

sendmgrResponse () {

  let rejectReson = this.editTicketFormGroup.controls['mgrReje'].value;
  let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.managerRespon , rejreason : rejectReson , status : this.ticketDetails[0].status }
  this.ticketService.mgrResponse(mgr).subscribe(
    response => {
      let updStatus = response;
    }
  );
}


// SendCabManagerResponse() {
//   let cabRejReason = this.editTicketFormGroup.controls['cabReje'].value;
//   let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.CABrespon , rejreason : cabRejReason , status : this.ticketDetails[0].status}

//   this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , mgr
//   ).subscribe(
//     response => {
      
//     }
//   );
// }

SendCabManagerResponse() {
  let cabRejReason = this.editTicketFormGroup.controls['cabReje'].value;
  let mgr = {requestid:this.ticketDetails[0].requestid , reqstatus : this.CABrespon , rejreason : cabRejReason , status : this.ticketDetails[0].status}
  this.ticketService.CABresponse(mgr).subscribe(
    response => {
      let updStatus = response;
    }
  );
}

// closeTicket () {

//   let closeTicketPayLoad = {requestid:this.ticketDetails[0].requestid , reqstatus :this.ticketDetails[0].reqstatus , status:"closed"}
//   console.log("closeTicketPayLoad" , closeTicketPayLoad)
//   this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , closeTicketPayLoad
//   ).subscribe(
//     response => {
    
      
//     }
//   );
// }

closeTicket () {
  // 
  let closeTicketPayLoad = {requestid:this.ticketDetails[0].requestid , reqstatus :this.ticketDetails[0].reqstatus , empid:this.ticketService.empDetails[0].empid , status:"closed"}
  this.ticketService.closeTicketById(closeTicketPayLoad).subscribe(
    response => {
      let updStatus = response;
    }
  );
}

}
