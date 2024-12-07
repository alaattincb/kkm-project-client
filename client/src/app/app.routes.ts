import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // Uygulama ilk açıldığında home route'una yönlendirme
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  
    // Home component route'u
    { path: 'home', component: HomeComponent },
  
    // Chat component route'u
    { path: 'chat', component: ChatComponent },
  
    // Login component route'u
    { path: 'login', component: LoginComponent }
  ];
