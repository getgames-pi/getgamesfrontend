import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatPaginatorModule ,MatToolbarModule, MatButtonModule, MatSidenavModule, MatOptionModule,
  MatFormFieldModule, MatIconModule, MatListModule, MatSelectModule, MatCardModule,
  MatInputModule, MatNativeDateModule, MatDatepickerModule, MatExpansionModule, MatSortModule, MatTableModule
} from '@angular/material';
import { Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeUserComponent } from './home-user/home-user.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ComprarComponent } from './comprar/comprar.component';
import { TrocarComponent } from './trocar/trocar.component';
import { VenderComponent } from './vender/vender.component';
import { MeusprodutosComponent } from './meusprodutos/meusprodutos.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import {Component, ViewEncapsulation} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';



@Component({
  encapsulation: ViewEncapsulation.None
})
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CadastrarComponent,
    HomeUserComponent,
    ComprarComponent,
    TrocarComponent,
    VenderComponent,
    MeusprodutosComponent,
    TelaProdutoComponent,
    UpdateComponent,
    LoginComponent,
    ContatoComponent,
    LogoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatOptionModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'home-usuario', component: HomeUserComponent, canActivate:[AuthGaurdService] },
      { path: 'comprar', component: ComprarComponent, canActivate:[AuthGaurdService] },
      { path: 'vender', component: VenderComponent, canActivate:[AuthGaurdService] },
      { path: 'trocar', component: TrocarComponent, canActivate:[AuthGaurdService] },
      { path: 'meus-produtos', component: MeusprodutosComponent ,canActivate:[AuthGaurdService]},
      {path: 'update-game/:id', component: UpdateComponent, canActivate:[AuthGaurdService]} , 
      {path: 'logout', component:LogoutComponent}
    ]),
  ],
  providers: [AuthService,  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [TelaProdutoComponent, ContatoComponent],
  exports: [RouterModule]
})
export class AppModule { }
