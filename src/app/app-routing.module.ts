import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BankTransferComponent } from './containers/bank-transfer/bank-transfer.component';
import { UpiPasswordComponent } from './containers/upi-password/upi-password.component';
import {OlaOffersComponent} from './containers/ola-offers/ola-offers.component';
import {EWalletComponent} from './containers/e-wallet/e-wallet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'bank-transfer', component: BankTransferComponent},
  { path: 'upi-password', component: UpiPasswordComponent},
  { path: 'alpha-ola-offers', component: OlaOffersComponent},
  {path:'alpha-e-wallet', component:EWalletComponent},



  // { path: 'application-contact-info', component: ApplicationContactInfoComponent},
  // { path: 'select-account-type', component: SelectAccountTypeComponent},
  // { path: 'enterprise-information', component: EnterpriseInformationComponent },
  // { path: 'bank-of-service-application', component: BankOfServiceApplicationComponent},
  // { path: 'file-uplaod', component: FileUplaodComponent},
  // { path: 'confirm', component: ConfirmComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
