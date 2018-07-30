import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: WelcomeComponent,
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: HomeComponent
  },
  {
    path: 'chat/:name',
    component: ChatComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
        pathMatch: 'full',
      },
      //{
      //  path: 'chatpage',
      //  component: ChatPageComponent,
      //  pathMatch: 'full',
      //}
      {
        path: ':name/:Id',
        component: ChatPageComponent,
        pathMatch: 'full',
      }
    ]

  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
