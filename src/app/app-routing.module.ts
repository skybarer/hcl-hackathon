import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationContactInfoComponent } from './containers/application-contact-info/application-contact-info.component';
import { SelectAccountTypeComponent } from './containers/select-account-type/select-account-type.component';
import { EnterpriseInformationComponent } from './containers/enterprise-information/enterprise-information.component';
import { BankOfServiceApplicationComponent } from './containers/bank-of-service-application/bank-of-service-application.component';
import { FileUplaodComponent } from './containers/file-uplaod/file-uplaod.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';

const routes: Routes = [
  { path: 'application-contact-info', component: ApplicationContactInfoComponent},
  { path: 'select-account-type', component: SelectAccountTypeComponent},
  { path: 'enterprise-information', component: EnterpriseInformationComponent },
  { path: 'bank-of-service-application', component: BankOfServiceApplicationComponent},
  { path: 'file-uplaod', component: FileUplaodComponent},
  { path: 'confirm', component: ConfirmComponent },
  { path: '**', redirectTo: '/application-contact-info', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
