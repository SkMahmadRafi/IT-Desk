import { Component, OnInit, Input } from '@angular/core';
// import { SourceService } from '../source.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [DatePipe]
})

export class CoursesComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  tickets = [{
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }, {
    TicketID: "CR-305819", ChangeType: "Emergency", CreatedBy: "Sagar@jktech.com", Priority: "Critical", DeviceType: "Hardware", CreatedDate: "1/30/2023", ApproverName: "Sandeep.Kapoor@jktech.com",
    Status: "CAB Approved", TicketStatus: "Closed"
  }]

  sagar = [
    { doc_id: 'ANN001', Doc_Desc: 'HappyAnniversary to you', Doctype: 'pdf', doc_name: 'Anniversarybonus', doc_statuscode: 'Active' },
     { doc_id: 'wel002', Doc_Desc: 'Welcome ', Doctype: 'pdf', doc_name: 'welcome document', doc_statuscode: 'Active' }, 
     { doc_id: '14', Doc_Desc: 'Happy Anniversary', Doctype: 'pdf', doc_name: 'Anniversary bonus', doc_statuscode: 'Active' }]
  //  @Input() courseResponse:any;


  //   constructor ( private course: SourceService, 
  //                 public datepipe: DatePipe, 
  //                 private http: HttpClient,
  //                 private formbuilder: FormBuilder,
  //                 private toastr: ToastrService){


  //   }
  //   formValue!: FormGroup;
  //   added:any;
  //   courses = this.course.courseList ;
  //   coursesCount = this.courses.length;
  //   apiCourses:any =[];
  //   latestCourses:any = [];
  //   remainingCourses:any = [];

  //   fcourseName:any;
  //   fMode:any;
  //   fDesc:any;
  //   fAgenda:any;
  //   fSession:any;
  //   fLink:any;
  //   filteredCourses:any = [];
  //   fType:any;
  //   fcoursecode:any;

  //   aCourseCode:any;
  //   aCourseName:any;
  //   aDesc:any;
  //   aAgenda:any;
  //   aSession:any;
  //   aDuration:any;
  //   aMode:any;
  //   aType:any;
  //   aCoursecode:any;
  //   aLink:any;
  //   aLevel:any;

  //   uCourseID:any;
  //   uCourseCode:any;
  //   uCourseName:any;
  //   uDesc:any;
  //   uAgenda:any;
  //   uSession:any;
  //   uDuration:any;
  //   uMode:any;
  //   uType:any;
  //   uLink:any;
  //   uLevel:any;

  //   addCourseResponse:any;
  //   updateCourseResponse:any;
  //   searchText:any;
  //   courseDetailsResponse:any;
  //   courseDeleteResponse:any;
  //   courseCode:any;

  //   submit(added:any){
  //     console.log("Form Submitted", added);
  //   }

  //   ngOnInit(): void {
  //     this.getCourses();

  //     this.formValue = this.formbuilder.group({
  //       courseCode:[
  //         {value: '', disabled: true},
  //         Validators.required,
  //         Validators.minLength(3)],
  //       coursename:[''],
  //       Description:[''],
  //       Agenda:[''],
  //       sessions:[''],
  //       Duration:[''],
  //       Link:[''],
  //       courseid:[{value:'', disabled: true}],
  //       Mode:[''],
  //       Type:[''],
  //       Level:['']
  //     });



  //   }

  //   // now = new Date();
  //   // loginDate = this.datepipe.transform(this.now, 'yyyy-MM-dd');

  //   onEdit(course:any){
  //     this.formValue.controls['courseCode'].setValue(course.CrsCode);
  //     this.formValue.controls['coursename'].setValue(course.CrsName);
  //     this.formValue.controls['Description'].setValue(course.CrsDesc);
  //     this.formValue.controls['Agenda'].setValue(course.CrsAgenda);
  //     this.formValue.controls['sessions'].setValue(course.CrsSessions);
  //     this.formValue.controls['Duration'].setValue(course.CrsDuration);
  //     this.formValue.controls['Link'].setValue(course.CrsLink);
  //     this.formValue.controls['courseid'].setValue(course.CourseID);
  //     this.formValue.controls['Mode'].setValue(course.CrsMode);
  //     this.formValue.controls['Type'].setValue(course.CrsType);
  //     this.formValue.controls['Level'].setValue(course.CrsLevel);
  //   }

  //   getCourses(){
  //     this.course.getcoursePayload().subscribe(
  //       response=>{
  //         this.apiCourses = response ;
  //         this.apiCourses = this.apiCourses.result; 
  //         this.splitCourses(this.apiCourses);
  //       }
  //     );
  //   }

  //   splitCourses(courseList:any){
  //     this.latestCourses = [];
  //     this.remainingCourses = [];

  //     for(let i=0; i <= courseList.length-1; i++ ) {
  //       if(i<=8){
  //         // console.log("coursesssss",courseList[i]);
  //         this.latestCourses.push(courseList[i])
  //       }
  //       else{
  //         this.remainingCourses.push(courseList[i]);
  //         // console.log("remainingCourses", this.remainingCourses);
  //       }
  //     }
  //   }

  //   sendCourseSearchPayload(courseCode:any,courseName:any,courseMode:any,courseDesc:any){
  //     // Need to get API end point from Shubham - APPROACH 1
  //     // this.http.post('/http://localhost:3000/courses/getFilterCourse',{
  //     //   courseName,courseMode,courseDesc
  //     // }).subscribe(
  //     //   /*get the response*/
  //     //   response=>{

  //     //     // console.log(response)

  //     //     this.filteredCourses=response;

  //     //     // console.log(this.arr);
  //     //     // this.filterCandidate(this.arr)  
  //     //     this.splitCourses(this.filteredCourses);  

  //     //   }
  //     // );
  //     // Approach 2 - From Service File
  //     debugger;
  //     this.course.getCourseByFilter(courseCode,courseName,courseMode,courseDesc).subscribe(
  //         /*get the response*/

  //         response=>{

  //           this.filteredCourses=response;

  //           // this.filterCandidate(this.arr)  
  //           this.splitCourses(this.filteredCourses.result);        
  //         }
  //       );       
  //   }

  //   sendAddCoursePayload(CourseCode:any,
  //                        CourseName:any,
  //                        Desc:any, 
  //                        Agenda:any,
  //                        Session:any,
  //                        Duration:any,
  //                        Mode:any,
  //                        Link:any){
  //     this.course.addCoursePayload(CourseCode,
  //                                  CourseName,
  //                                  Desc, 
  //                                  Agenda,
  //                                  Session,
  //                                  Duration,
  //                                  Mode,
  //                                  Link
  //                                  ).subscribe(
  //       response=>{
  //         this.addCourseResponse = response;
  //         this.toastr.success('Course Added Successfully');
  //         this.getCourses();
  //       }
  //     )

  //   }

  //   getCourseByID(CourseName:any){
  //     this.course.getCoursePayloadByID(CourseName).subscribe(
  //       response=>{
  //         this.courseDetailsResponse = response;
  //       }
  //     )
  //   }

  //   sendUpdateCoursePayload(){
  //     this.uCourseCode = this.formValue.controls['courseCode'].value;
  //     this.uCourseName = this.formValue.controls['coursename'].value;
  //     this.uDesc       = this.formValue.controls['Description'].value;
  //     this.uAgenda     = this.formValue.controls['Agenda'].value; 
  //     this.uSession    = this.formValue.controls['sessions'].value;
  //     this.uDuration   = this.formValue.controls['Duration'].value;
  //     this.uLink       = this.formValue.controls['Link'].value;
  //     this.uMode       = this.formValue.controls['Mode'].value;
  //     this.uType       = this.formValue.controls['Type'].value;
  //     this.uLevel      = this.formValue.controls['Level'].value;

  //     this.course.updateCoursePayload(this.uCourseID, this.uCourseName).subscribe(
  //       response=>{
  //         this.updateCourseResponse = response;
  //         this.toastr.success('Course Updated Successfully');
  //         this.getCourses();
  //       }
  //     )


  //   }

  //   deleteACourse(Course:any){
  //     debugger;

  //     this.course.deleteCourse(Course.CourseID).subscribe(
  //       response=>{
  //         this.courseDeleteResponse = response;
  //         this.getCourses();

  //       }
  //     )
  //   }




}
