import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path:  '',
    redirectTo:  'login',
    pathMatch:  'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent ,canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService]},
  { path:  '**',
   redirectTo:  'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
