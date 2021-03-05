import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutcomeComponent } from './components/outcome/outcome.component';

const routes: Routes = [
  {path:'outcome', component:OutcomeComponent},
  {path:'result', component:UserComponent},
  {path: '', redirectTo: '/result', pathMatch: 'full'},
  {path: '**', redirectTo: '/result', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OutcomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
