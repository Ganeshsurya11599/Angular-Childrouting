import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { ServiceComponent } from './service/service.component';
import { ElectronicsComponent } from './electronics/electronics.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,
  children:[
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutusComponent}
  ]
},
{path:'about',component:AboutComponent,
children:[
  {path:'index',component:IndexComponent}
]
},
{path:'service',component:ServiceComponent,
children:[
{path:'electronics',component:ElectronicsComponent}
]
},
{path:'',redirectTo:'/home.component.html',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
