import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alpha-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  items = [
    {
      'name': 'Basic Information',
      'link': 'application-contact-info',
      'subItems': [
        { 'name': 'Application Contact Info', 'link': 'application-contact-info' },
        { 'name': 'Select Account type', 'link': 'select-account-type' }
      ]
    },
    {
      'name': 'Enterprise Information',
      'link': 'enterprise-information',
      'subItems': [
        { 'name': 'Enterprise Information', 'link': 'enterprise-information' },
        { 'name': 'Select Account type', 'link': 'select-account-type' }
      ]
     },
    { 'name': 'Bank of service application', 'link': 'bank-of-service-application' },
    { 'name': 'File Uplaod', 'link': 'file-uplaod' },
    { 'name': 'Confirm', 'link': 'confirm' }
  ];

  // items = [
  //   {
  //     'name': 'Basic Information',
  //     'link': 'application-contact-info',
  //     'subItems': [
  //       { 'name': 'Contact Info', 'link': 'application-contact-info' },
  //       { 'name': 'Select Account type', 'link': 'select-account-type' }
  //     ]
  //   },
  //   {
  //     'name': 'Enterprise Information',
  //     'link': 'enterprise-information',
  //     'subItems': [
  //       { 'name': 'Enterprise Information', 'link': 'enterprise-information' },
  //       { 'name': 'legal Representaive/ Unit Person Incharge ', 'link': 'enterprise-information' },
  //       { 'name': 'Finincial Officer', 'link': 'enterprise-information' },
  //       { 'name': 'Other authorised signed', 'link': 'enterprise-information' },
  //       { 'name': 'Other pament contents', 'link': 'enterprise-information' }
  //     ]
  //   },
  //   { 'name': 'Bank of service application', 'link': 'bank-of-service-application' },
  //   { 'name': 'File Uplaod', 'link': 'file-uplaod' },
  //   { 'name': 'Confirm', 'link': 'confirm' }
  // ];

  itemsLength: number;
  subItemsLength: number;
  selectedUserIndex: number;
  currentItemIndexState: number;
  subItemIndexState: number;
  linkState: String;


  ngOnInit() {

    this.currentItemIndexState = 0;
    this.subItemIndexState = 1;
    this.itemsLength = this.items.length;
    this.linkState = 'nextLink';


    for (let i = 0; i < this.itemsLength; i++) {
      (this.items[i])['tickIcon'] = false;
      (this.items[i])['arrowIcon'] = false;
      (this.items[i])['state'] = false;
      // provides indexing to list-items
      (this.items[i])['i'] = i;
      if (this.items[i].subItems) {
        for (let j = 0; j < this.items[i].subItems.length; j++) {
          (this.items[i].subItems[j])['tickIcon'] = false;
          (this.items[i].subItems[j])['arrowIcon'] = false;
          (this.items[i].subItems[j])['state'] = false;
           // provides indexing to sub-list-items
          (this.items[i].subItems[j])['j'] = j;
        }
      }
    }

    // (this.items[0])['tickIcon'] = true;
    // (this.items[0].subItems[0])['tickIcon'] = true;
    // console.log(this.items);
  }

  // to remove last divider in item-list
  isMdDividerRequiredForListItem = (index: number) => {
    if (index === this.itemsLength - 1) { return false; }
    return true;
  }

  // show and hide functionality of sublist items based on onclick.
    selectUserIndex =  (index: any) => {
      if (this.selectedUserIndex !== index) {
        this.selectedUserIndex = index;
      } else {
        this.selectedUserIndex = undefined;
      }
   }

   subRouterLink = () => {

     if (this.linkState === 'previousLink') {
       this.router.navigateByUrl(this.items[this.currentItemIndexState].subItems[this.subItemIndexState].link);
// tslint:disable-next-line: max-line-length
       console.log(`this.items[${this.currentItemIndexState}].subItems[${this.subItemIndexState}].link = ${this.items[this.currentItemIndexState].subItems[this.subItemIndexState].link} = [${this.currentItemIndexState} ${this.subItemIndexState}]`);

     }

     if (this.linkState === 'nextLink') {
       this.router.navigateByUrl(this.items[this.currentItemIndexState].subItems[this.subItemIndexState].link);
// tslint:disable-next-line: max-line-length
       console.log(`this.items[${this.currentItemIndexState}].subItems[${this.subItemIndexState}].link = ${this.items[this.currentItemIndexState].subItems[this.subItemIndexState].link} = [${this.currentItemIndexState} ${this.subItemIndexState}]`);

     }



   }

  stepperRouteSubItem = () => {
      // console.log(this.items[this.currentItemIndexState].subItems);

    if (this.linkState === 'previousLink') {

      // if (this.subItemIndexState === this.subItemsLength - 1) {
      //   this.subRouterLink();
      //   this.currentItemIndexState--;
      //   this.subItemIndexState = 0;
      // } else {
      //   this.subRouterLink();
      //   if (this.currentItemIndexState === 1 && this.subItemIndexState === 0) {
      //     this.subItemIndexState = this.subItemsLength;
      //   }
      //   if (this.subItemIndexState > 0) {
      //     this.subItemIndexState--;
      //   }
      // }
      // if (this.subItemIndexState === this.subItemsLength - 1) {
      //   this.subRouterLink();
      //   if (this.currentItemIndexState >= 0) {
      //   this.currentItemIndexState--;
      //   }
      //   this.subItemIndexState = 0;
      // } else {
      //   this.subRouterLink();
      //   this.subItemIndexState = this.subItemsLength;
      //   if (this.subItemIndexState > 0) {
      //   this.subItemIndexState--;
      //   }
      // }

      if ( this.currentItemIndexState === 0 && this.subItemIndexState === 0 ) {
        return;
      }

      if (this.subItemIndexState === this.subItemsLength - 1) {
        this.subItemIndexState --;
        this.subRouterLink();
        this.currentItemIndexState--;
      } else {
        this.subItemIndexState = this.subItemsLength - 1;
        this.subRouterLink();
      }

      }

    if (this.linkState === 'nextLink') {

      if (this.subItemIndexState === this.subItemsLength - 1) {
        this.subRouterLink();
        this.currentItemIndexState++;
        this.subItemIndexState = 0;
      } else {
        this.subRouterLink();
        this.subItemIndexState++;
      }
    }

  }

  stepperRouteItem = () => {
    // else route to list tem
    this.router.navigateByUrl(this.items[this.currentItemIndexState].link);
    console.log(`${this.items[this.currentItemIndexState].link} = ${this.currentItemIndexState}`);
  }

  previousLink = () => {
    this.linkState = 'previousLink';
    if (this.currentItemIndexState < 0) { return ; }
    // if (this.currentItemIndexState === 0 && this.subItemIndexState === 1) { return; }

    if (this.currentItemIndexState === this.items.length) {
      this.currentItemIndexState -= 2;
    }
    // if (this.currentItemIndexState === this.items.length - 1) {
    //   this.currentItemIndexState--;
    // }

    // check if subitem exists.
    if (this.items[this.currentItemIndexState].subItems) {
      this.subItemsLength = this.items[this.currentItemIndexState].subItems.length;
      this.stepperRouteSubItem();
    } else {
      this.stepperRouteItem();
      this.currentItemIndexState--;
    }

  }

  nextLink = () => {
    this.linkState = 'nextLink';
    if (this.currentItemIndexState > this.itemsLength - 1 ) { return; }

    // check if subitem exists.
    if (this.items[this.currentItemIndexState].subItems) {
      this.subItemsLength = this.items[this.currentItemIndexState].subItems.length;
      this.stepperRouteSubItem();
    } else {
      // if (this.currentItemIndexState === this.itemsLength) {
      //   return;
      // }
      this.stepperRouteItem();
      this.currentItemIndexState++;
    }

  }


}
