import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationContactInfoComponent } from './containers/application-contact-info/application-contact-info.component';
import { SelectAccountTypeComponent } from './containers/select-account-type/select-account-type.component';
import { EnterpriseInformationComponent } from './containers/enterprise-information/enterprise-information.component';
import { BankOfServiceApplicationComponent } from './containers/bank-of-service-application/bank-of-service-application.component';
import { FileUplaodComponent } from './containers/file-uplaod/file-uplaod.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BankTransferComponent } from './containers/bank-transfer/bank-transfer.component';
import { UpiPasswordComponent } from './containers/upi-password/upi-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'bank-transfer', component: BankTransferComponent},
  { path: 'upi-password', component: UpiPasswordComponent},



  // { path: 'application-contact-info', component: ApplicationContactInfoComponent},
  // { path: 'select-account-type', component: SelectAccountTypeComponent},
  // { path: 'enterprise-information', component: EnterpriseInformationComponent },
  // { path: 'bank-of-service-application', component: BankOfServiceApplicationComponent},
  // { path: 'file-uplaod', component: FileUplaodComponent},
  // { path: 'confirm', component: ConfirmComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
