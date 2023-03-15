import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  addTicketFormGroup = this.formBuilder.group({
    ticketNumber: [{value :'' , disabled : true }],
    empID: [{value :'' , disabled : true }],
    createdBy: ['', Validators.required],
    createdOn: ['', Validators.required],
    SME_Assigned: ['', Validators.required],
    approverName: ['', Validators.required],
    type: ['', Validators.required],
    priority: ['', Validators.required],
    selectDevice: ['', Validators.required],
    siteName: ['', Validators.required],
    devices: ['', Validators.required],
    location: ['', Validators.required],
    implementTime: ['', Validators.required],
    scheduledDate: ['', Validators.required],
    businessJustification: ['', Validators.required],
    CMRdescre: ['', Validators.required],
    riskImpact: ['', Validators.required],
    actionPlan: ['', Validators.required],
    rollbackPlan: ['', Validators.required],
    note: ['', Validators.required]
  });

}
