import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
//import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root' 
  // providers:[DatePipe]
})
export class TicketService {

  constructor(private http: HttpClient , private msalService:MsalService ) { }

  ticketId : any ;
  view : any ;
  user : any ;
   empResponse : any ;
   manager : any ;
   filterChangeType : any
   filterPriority : any ;
   filterDeviceType : any 
   filterstatus : any ;
   filtered : any ;
   loggedIn : any ;
   empDetails : any ;
   manager1 : any ;
   cabManager : any ;
   something : boolean = false ;
  getEmpDetails ()  {
   // this.user = "vishwas26@gmail.com";
   //  let employee = {empemailid : "mahamad.rafi@jktech.com"};
 //let employee = {empemailid : "mallikarjun.managavi@jktech.com"};
  let employee = {empemailid : "thummana.pavani@jktech.com"};
   
   return this.http.post<any>('http://localhost:3000/EmpManager/empfilter' , employee
    )
  }

  getAllTickets () {
    return this.http.get<any>('http://localhost:3000/RequestManager/allrequests')
  }

  getType () {
    let listmstid = 5;
    return this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid })
  }

  getPriority () {
    let listmstid = 1;
    return this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid })
  }

  getDeviceType () {
    let listmstid = 2;
    return  this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID', { listmstid })
  }

  filterTickets (filterPayLoad : any) {

   return this.http.post<any>('http://localhost:3000/RequestManager/filter', filterPayLoad)

  }

  filteredTickets (filterPayLoad : any) {

    return this.http.post<any>('http://localhost:3000/RequestManager/filter', filterPayLoad)

  }

  getRequestByID (ticket : any) {
    return this.http.post<any>('http://localhost:3000/RequestManager/requestbyid' , ticket)
  }

  getDevices (data : any) {
    let listmstid = data ;
    
    return this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid} )
  }

  getAllLocations () {
    return  this.http.get<any>('http://localhost:3000/LocationManager')
  }

  getRequestStatuses () {
    let listmstid = 6 ;
   return this.http.post<any>('http://localhost:3000/ListDataDetail/getCodeByMasterID' , {listmstid})
  }

  createRequest (addDraftRequestPayLoad : any) {
    console.log("addDraftRequestPayLoad" , addDraftRequestPayLoad)
    return this.http.post<any>('http://localhost:3000/RequestManager/createrequest' , addDraftRequestPayLoad)
  }

  updateRequest (updatePayLoad : any) {
  return  this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , updatePayLoad)

  }

  mgrResponse (managerResponse : any) {
    console.log("managerResponse "  , managerResponse );
    return this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , managerResponse)
  }

  CABresponse (CABresponse : any) {
    return this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , CABresponse)
  }

  closeTicketById (closeTicketPayLoad : any) {
    console.log("close" ,closeTicketPayLoad )
   return this.http.post<any>('http://localhost:3000/RequestManager/updaterequest' , closeTicketPayLoad)
  }

  ticketSequence () {
    return this.http.get<any>('http://localhost:3000/RequestManager/ticketid')
  }

  isLoggedIn():boolean{
    // this.ticketService.loggedIn = true;
    return this.msalService.instance.getActiveAccount()!=null 
  }


  // common service

  getEmployee(){
    // const acc = msal.instance.getAllAccounts()[0]
    // return msal.instance.acquireTokenSilent({account:acc,scopes:[]}).then((response)=>{
    //   console.log('repsonse ---',response)
    //   return this.http.post('httP://localhost:3000/EmpManager/add',{headers:{
    //     'Authorization':`Bearer ${response.idToken}`
    //   }})
    // })
    return this.http.get('http://localhost:3000/EmpManager/')
  }
  
  
  // getidbydevice(data:any){
  //   this.http.post<any>('http://localhost:3000/EmpManager/getidbydevice' ,data)
  // }
  
  addEmployee(data:any){
  //  const acc = msal.instance.getAllAccounts()[0]
   // return msal.instance.acquireTokenSilent({account:acc,scopes:[]}).then((response)=>{
  //  console.log('repsonse ---',response)
      return this.http.post('httP://localhost:3000/EmpManager/add',data)
    //  {headers:{
    //    'Authorization':`Bearer ${response.idToken}`
    //  }})
  //  })
  }
  
  editEmployee(edit:any){
  //  const acc = msal.instance.getAllAccounts()[0]
  //  return msal.instance.acquireTokenSilent({account:acc,scopes:[]}).then((response)=>{
  //    console.log('repsonse ---',response)
      return this.http.post('http://localhost:3000/EmpManager/updateemp',edit)
      //,{headers:{
        //'Authorization':`Bearer ${response.idToken}`
     // }})
  //  })
    
  }
  
  deleteEmployee(empid:any){
    return this.http.post('http://localhost:3000/EmpManager/deleteemployeebyId ',empid)
  }
  
  filterEmployee(empfilter:any){
  //  const acc = msal.instance.getAllAccounts()[0]
  //  return msal.instance.acquireTokenSilent({account:acc,scopes:[]}).then((response)=>{
  //    console.log('repsonse ---',response)
    return this.http.post('http://localhost:3000/EmpManager/empfilter',empfilter)
    //,{headers:{
    //    'Authorization':`Bearer ${response.idToken}`
   //   }})
   // })
    // return this.http.post('http://localhost:3000/EmpManager/empfilter',empfilter)
  }
}
