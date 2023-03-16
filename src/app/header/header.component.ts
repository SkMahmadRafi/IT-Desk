import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';
import { TicketService } from '../ticket.service';
// import {getToken} from '../../app/fetch';

  export let msal:MsalService;
  export let userIdToken:any
  export let tokens:any
  @Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  showMe:boolean=true;

profile:any="";



  toggleTag(){
    this.showMe = !this.showMe;
  }

constructor(private msalService:MsalService , private ticketService:TicketService) {
    msal = this.msalService;
   }

   manager : any ;
  empResponse : any ;
  
  ngOnInit(): void {
     
    this.msalService.instance.handleRedirectPromise().then(
          async res=>{
            if(res != null && res.account != null){
              this.msalService.instance.setActiveAccount(res.account)
              this.profile=res.account;
              console.log(res.account.username);
              console.log(res.account.name);
              
              
              // 
              
              
              // userIdToken = await getToken(['User.Read'])
            }
          }
      )
      this.empDetails();
    

 
}
  // toggleSidebar(){
  //   this.opened = !this.opened;
  // }
  getTokenReponses():any{
    const acc = msal.instance.getAllAccounts()[0]
  msal.instance.acquireTokenPopup({account:acc,scopes:[]}).then((response)=>{
    
    tokens = response
  }
).catch((err)=>{
  tokens ={};
  })
}




  isLoggedIn():boolean{
    // this.ticketService.loggedIn = true;
    return this.msalService.instance.getActiveAccount()!=null 
  }

  empDetails () {
    
    this.ticketService.getEmpDetails().subscribe(
      response => {
        this.empResponse = response.result;
       
        
        this.ticketService.empDetails = this.empResponse;
        
     if (this.empResponse[0].emplevel === "Manager") {
      this.manager = true;
      
   }
      }
    );
  }

  // clickedOnLogIn () {
  //   this.msalService.instance.handleRedirectPromise().then(
  //     async res=>{
  //       if(res != null && res.account != null){
  //         this.msalService.instance.setActiveAccount(res.account)
  //         this.profile=res.account;
  //         console.log(res.account.username);
  //         console.log(res.account.name);
  //         this.ticketService.loggedIn = true;
  //         
  //         this.empDetails();
          
  //         // userIdToken = await getToken(['User.Read'])
  //       }
  //     }
  // )
  // }

  login(){
  this.msalService.loginRedirect()
  // 
  // this.msalService.instance.handleRedirectPromise().then(
  //   async res=>{
  //     console.log('response login',res)
  //     if(res != null && res.account != null){
  //       this.msalService.instance.setActiveAccount(res.account)
  //       this.profile=res.account;
  //       console.log(res.account.username);
  //       console.log(res.account.name);
  //       this.ticketService.loggedIn = true;
  //       this.empDetails();
        
  //       // userIdToken = await getToken(['User.Read'])
  //     }
  //   }
// )
  //console.log(this.msalService);
  


    // this.msalService.instance.loginPopup().then((response:any)=>{
    //   console.log('---------------------',response)
    //   this.msalService.instance.setActiveAccount(response.account)
    //   const account = this.msalService.instance.getAllAccounts()[0]
    //   // this.msalService.instance.acquireTokenRedirect({account:account,scopes: ["User.read"]}).then((response)=>[
    //   //   console.log("@@@@@@@",response)
    //   // ])
    // })
    // subscribe((response:any)=>{
    // })
  }
  logout(){
    // debugger
    // console.log('inside logout')
    // this.msalService.logout();
    // console.log('inside logout2')
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200/def'
    });
  }
    
}
// function getToken(arg0: string[]): any {
//   throw new Error('Function not implemented.');
// }

