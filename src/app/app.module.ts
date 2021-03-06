import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MaterialModule } from './modules/material/material.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApplicationContactInfoComponent } from './containers/application-contact-info/application-contact-info.component';
import { EnterpriseInformationComponent } from './containers/enterprise-information/enterprise-information.component';
import { SelectAccountTypeComponent } from './containers/select-account-type/select-account-type.component';
import { BankOfServiceApplicationComponent } from './containers/bank-of-service-application/bank-of-service-application.component';
import { FileUplaodComponent } from './containers/file-uplaod/file-uplaod.component';
import { ConfirmComponent } from './containers/confirm/confirm.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BankTransferComponent } from './containers/bank-transfer/bank-transfer.component';
import { UpiPasswordComponent } from './containers/upi-password/upi-password.component';
import {ApiService} from './services/api.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OlaOffersComponent } from './containers/ola-offers/ola-offers.component';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import { ModalComponent } from './containers/modal/modal.component';
import { EWalletComponent } from './containers/e-wallet/e-wallet.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    StepperComponent,
    NavbarComponent,
    ApplicationContactInfoComponent,
    EnterpriseInformationComponent,
    SelectAccountTypeComponent,
    BankOfServiceApplicationComponent,
    FileUplaodComponent,
    ConfirmComponent,
    CheckboxGroupComponent,
    AutocompleteComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    BankAccountComponent,
    WalletComponent,
    BankTransferComponent,
    UpiPasswordComponent,
    OlaOffersComponent,
    ModalComponent,
    EWalletComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    ApiService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
       multi: true
     }],
  bootstrap: [AppComponent],
  entryComponents: [UpiPasswordComponent, ModalComponent]
})
export class AppModule { }
